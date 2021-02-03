import './OkpdStyle.sass';
import 'react-bootstrap';

import React, {useState} from "react";
import SearchOkpd from "./components/SearchOkpd";
import NavTreeList from "./components/NavTreeList";


let Okpd = () => {

  const [Data, setData] = useState({
    setData: "",
  });

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
          <NavTreeList/>
        </div>
      </div>
    </div>
  );
}

export default Okpd;