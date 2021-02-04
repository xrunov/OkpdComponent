import './OkpdStyle.sass';
import 'react-bootstrap';

import React, {useState} from "react";
import SearchOkpd from "./components/SearchOkpd";
import NavTreeList from "./components/NavTreeList";

const toppingOptions = [
  {
    name: "Pepperoni",
    code: "pepperoni-id",
    subArray: [
      {
        name: "Spicy",
        code: "spicy-id",
        subArray: []
      },
      {
        name: "Regular",
        code: "regular-id",
        subArray: []
      }
    ]
  },
  {
    name: "Chicken",
    code: "chicken-id",
    subArray: [
      {
        name: "Buffalo",
        code: "buffalo-id",
        subArray: [
          {
            name: "Mild",
            code: 'mild-id',
            subArray: [],
          },
          {
            name: "Hot",
            code: 'hot-id',
            subArray: [
              {
                name: 'Jalapeño',
                code: 'jalapeno-id',
                subArray: []
              },
              {
                name: 'Cayenne',
                code: 'cayenne-id',
                subArray: []
              }
            ],
          },
        ]
      },
      {
        name: "BBQ",
        code: 'bbq-id',
        subArray: [],
      }
    ]
  },
]
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
          <button className="btn btn-primary">
            СПИСОК ОКПД2
          </button>
        </div>
        <div className="r">
          <NavTreeList
            listContent={toppingOptions}
          />
        </div>
      </div>
    </div>
  );
}

export default Okpd;