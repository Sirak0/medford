import React from "react";
import "./Section1.scss";
import Image1 from "../../../images/main/1231.png";
import "./Section1.responsive.scss";
import {useDispatch,useSelector} from "react-redux";

function Section1() {

  const dispatch = useDispatch()
  const firstElem = useSelector(function(state){
    return state.items[0]
  })
  return (
    <div className="section1">
      <div className="section1-content1">
        <div className="order-uzi">
          <h1>
            Арендуйте <br></br>
            аппарат УЗИ
          </h1>
          <p>
            С бесплатной доставкой и сервисным <br></br> обслуживанием в любом
            регионе России
          </p>
          <button onClick={() => {dispatch({type:"getPopup",payload:firstElem})}}>Получить КП</button>
        </div>
        <div className="section1-img">
          <img className="image1" src={Image1} alt="nkar"></img>
        </div>
      </div>
      <div className="responsive-midle">
        <div className="midle-p">
        <p>
          Аренда на срок от 1 мес
        </p>
        </div>
        <div className="midle-p">
        <p>
        Дешевле, чем  покупка нового
        </p>
        </div>
        <div className="midle-p">
        <p>
        Официально по договору
        </p>
        </div>
        <div className="midle-p">
        <p>
        Без залогов и поручителей
        </p>
        </div>
        <div className="midle-p">
        <p>
        Поставка УЗИ в ваш кабинет  от трех до семи дней
        </p>
        </div>
      </div>
      <div className="midle-div">
        <p>
          Аренда на <br></br>срок от 1 мес
        </p>
        <p>
          Дешевле, чем <br></br> покупка нового
        </p>
        <p>
          Официально <br></br> по договору
        </p>
        <p>
          Без залогов <br></br>и поручителей
        </p>
        <p>
          Поставка УЗИ в ваш кабинет <br></br> от трех до семи дней
        </p>
      </div>
      <div className="section1-order">
        <h1>
          Приемущества <br></br>аренды
        </h1>
      </div>
      <div className="section1-paragrafs">
        <div className="paragraf-div">
          <h3>Инвестиции</h3>
          <p>
            Не требует больших затрат, проверки спроса на УЗИ{" "}
            в вашем регионе.
          </p>
        </div>
        <div className="paragraf-div">
          <h3>Срочность</h3>
          <p>
            Быстрая замена аппарата вышедшего из строя{" "}
            до покупки нового{" "}
          </p>
        </div>
        <div className="paragraf-div">
          <h3>Лицензия</h3>
          <p>
            Аренда УЗИ аппарата оптимальное решение для 
            получения лицензии
          </p>
        </div>
      </div>
    </div>
  );
}
export default Section1;
