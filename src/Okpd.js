import './OkpdStyle.sass';
import 'react-bootstrap';

import React, {useState} from "react";
import SearchOkpd from "./components/SearchOkpd";
import NavTreeList from "./components/NavTreeList";
import Modal from "./components/Modal";
import { connect } from 'react-redux';
import OkpdConfig from "./configurations/OkpdConfig";
import OutputTable from "./components/OutputTable";
import store from './store/store'


//функция структуризации данных
let makeTree = (D) => {
  if (!D.some((el, idx, arr) => idx === 0 ? false : el.Code.startsWith(arr[idx-1].Code+"."))) {
    return [];
  }
  let firstLevel = D[0].Code;
  return D.reduce((prev, item) => {
    if (item.Code === firstLevel) return prev;
    if (!item.Code.startsWith(firstLevel+".")) {
      firstLevel = item.Code;
      prev.push({...item, subCategory: []});
      return prev;
    }
    prev[prev.length-1].subCategory.push(item);
    return prev;
  }, [{...D[0], subCategory: []}])
    .map(item => ({
      ...item,
      subCategory: makeTree(item.subCategory)
    }));
}
//запрос данных
let Tree = [];
let getData = async () => {
  try {
    const res = await fetch(OkpdConfig.reqLink)
    if (res.ok) {
      const data = await res.json();
      let D = data.data;
      const tree = makeTree(D);
      console.log(tree);
      Tree = tree;
      store.dispatch({type: 'CHANGELIST', content: Tree});
      return 0;
    }
  } catch (err) {
    console.log(err);
  }
}
// eslint-disable-next-line no-unused-vars
let data = getData();
//компонент
let Okpd = (props) => {

  const [Data, setData] = useState({
    isOpen: false,
    tExists: false,
  });
  //функция включения/выключения модального окна
  let toggleState = () => {
    Data.isOpen = !Data.isOpen;
    setData({...Data});
  }
  //обработчик нажатия кнопки
  let handleListClick = () => {
    // лог для проверки
    console.log(props.treeListContent);
    toggleState();
  }
  //toggle функция существования таблицы
  let toggleTable = () => {
    Data.tExists = !Data.tExists;
    setData({...Data});
  }
  //шаблон обрабочика изменения посковой строки
  let handleSearchChange = (SearchData) => {
    Data.searchData = SearchData;
  };
  // разметка компонента
  return (
    <div className="background">
      <div className="OkpdContainer">
        <p className="labelHeader">
          Поиск ОКПД 2, автоматическая проверка национального режима по 44-ФЗ, преимуществ УИН и организациям
          инвалидов,КТРУ, типовых контрактов, лекарственных средств на наличие в реестре ЖНВЛП
        </p>
        <div className="r">
          <SearchOkpd
            onDateReset={handleSearchChange}
          />
        </div>
        <div className="r">
          <button className="btn btn-primary" onClick={handleListClick}>
            СПИСОК ОКПД2
          </button>
        </div>
        <div className="r">
          <button className="btn btn-primary" onClick={toggleTable}>
            ПОКАЗАТЬ ТАБЛИЦУ
          </button>
        </div>
        <div className="r">
          <OutputTable
            tExists={Data.tExists}
          />
        </div>
      </div>
      <Modal isOpen={Data.isOpen} setOpen={toggleState}>
        <NavTreeList/>
      </Modal>
    </div>
  );
}
//конект к стору
export default connect (
  state => ({
    treeListContent: state
  })
)(Okpd);