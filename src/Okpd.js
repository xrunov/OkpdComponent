import './OkpdStyle.sass';
import 'react-bootstrap';

import React from "react";

let okpd = () => {
  // разметка компонента
  return (
    <div className="background">
      <div className="CalcContainer">
        <form onSubmit={""}>
          <div className="r">
            <label className="labelHeader">
              Калькулятор пени по 44 фз – онлайн расчет неустойки
            </label>
          </div>

          <div className="row">
            <div className="inputP col">Срок окончания поставки товара, выполнения работ оказания услуг</div>
            <div className="inputP col">Окончание периода просрочки </div>
          </div>
          <div className="r DataFields">

          </div>
          <div className="r">

          </div>
          <div className="r">

          </div>
          <div className="r d-flex">
            <div className="divider"> </div>
            <div className="form-check mt-1">
              <label className="form-check-label align-middle m-1">Получить ключевую ставку на дату</label>
            </div>
          </div>
        </form>
        <div className="r">

        </div>
        <div className="r">

        </div>
      </div>
    </div>
  );
}

export default okpd;