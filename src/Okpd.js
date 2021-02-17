import './OkpdStyle.sass';
import 'react-bootstrap';

import React, {useState} from "react";
import SearchOkpd from "./components/SearchOkpd";
import NavTreeList from "./components/NavTreeList";
import Modal from "./components/Modal";
import { connect } from 'react-redux';

let Okpd = (props) => {
  const [isOpen, setOpen] = useState(false)

  const [Data, setData] = useState({

  });

  let toppingOptions = props.treeListContent;

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
          <button className="btn btn-primary" onClick={() => setOpen(true)}>
            СПИСОК ОКПД2
          </button>
        </div>
      </div>
      <Modal isOpen={isOpen} setOpen={setOpen}>
        <NavTreeList
          listContent={toppingOptions}
        />
      </Modal>
    </div>
  );
}

export default connect (
  state => ({
    treeListContent: state
  }),
  dispatch => ({
    onKnopka : (listCont) => {
      dispatch({type: 'ChangeList', payload: listCont});
    }
  })
)(Okpd);