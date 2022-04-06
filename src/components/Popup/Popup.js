import React, { useEffect, useState } from "react";
import "./Popup.scss";
import "./Popup.responsive.scss";
import { useSelector, useDispatch } from "react-redux";

function Popup() {
  const dispatch = useDispatch();
  const [device, setDevice] = useState();
  const getData = useSelector(function (state) {
    return state.getPopup;
  });

  useEffect(() => {
    setDevice(getData);
  }, [getData]);

  return (
    <>
      {getData ? (
        //   <div className="demo">

        <div className="popup">
          {/* {devices.map((elem, index) => ( */}
          <div className="popup-cont">
            <div className="popup-img">
              <img className="image" src={device.mainImage} alt="nkar"></img>
            </div>
            <div className="popup-order">
              <div className="popup-hed">
                <div className="popup-text">
                  <h2 className="popup-h">
                    Получите детальное коммерческое<br></br>{" "}
                    предложениепо аренде аппарата <br></br> УЗИ{" "}
                    <span>{device.name}</span>
                  </h2>
                  <p className="price">От {device.price} ₽/мес.</p>
                </div>
                <div
                  className="popup-close"
                  onClick={() => dispatch({ type: "getPopup", payload: false })}
                >
                  X
                </div>
              </div>
              <form className="form1-div">
                <div className="line12">
                  <label htmlFor={"name1"}>
                    {" "}
                    Имя <br></br>
                    <input
                      className="form-input1"
                      type="text"
                      placeholder="Имя..."
                      id="name1"
                    ></input>
                  </label>
                </div>
                <div className="line21">
                  <label htmlFor={"phone1"}>
                    {" "}
                    Телефон <br></br>
                    <input
                      className="form-input1"
                      type="phone"
                      placeholder="Телефон..."
                      id="phone1"
                    ></input>
                  </label>
                  <label htmlFor={"city1"}>
                    {" "}
                    Город <br></br>
                    <input
                      className="form-input1"
                      type="text"
                      placeholder="Город"
                      id="city1"
                    ></input>
                  </label>
                </div>
                <label htmlFor={"email1"}>
                  {" "}
                  Электронная почта <br></br>
                  <input
                    className="form-input1"
                    type="email"
                    placeholder="Электронная почта..."
                    id="email1"
                  ></input>
                </label>
                <label htmlFor={"budget1"}>
                  Бюджетный класс аппарата<br></br>
                  <select
                    default=""
                    className="book-input1"
                    name="type"
                    id="budget1"
                  >
                    <option value="">Не выбран</option>
                    <option value="">Бюджетного класса</option>
                    <option value="">Среднийнего класса</option>
                    <option value="">Высокого класса</option>
                    <option value="">Экспертного класса</option>
                  </select>
                </label>

                <button className="button-send1">Отправить</button>
              </form>
            </div>
          </div>
          {/* ))} */}
        </div>
      ) : null}
    </>
  );
}
export default Popup;
