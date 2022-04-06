import React from "react";
import "./Section6.scss";
import "./Section6.responsive.scss";

function Section6() {
  return (
    <div className="section6">
      <div className="section6-content1">
        <h1>
          Получите детальное<br></br> коммерческое предложение
        </h1>
        <p>
          Отправьте запрос и мы подберем для вас оптимальный<br></br> вариант
          аренды аппарата УЗИ
        </p>
      </div>
      <form className="form-div01">
        <div className="line01">
        <label htmlFor={"name"}>
            {" "}
           Имя <br></br>
            <input
              className="form-input01"
              type="text"
              placeholder="Имя..."
              id="name01"
            ></input>
          </label>
          
        
        </div>
        <div className="line02">
            <label htmlFor={"phone"}>
            {" "}
            Телефон <br></br>
            <input
              className="form-input01"
              type="phone"
              placeholder="Телефон..."
              id="phone01"
            ></input>
          </label>
          <label htmlFor={"city"}>
            {" "}
            Город <br></br>
            <input
              className="form-input01"
              type="text"
              placeholder="Город"
              id="city01"
            ></input>
          </label>

          
        </div>
        <label htmlFor={"email"}>
            {" "}
            Электронная почта <br></br>
            <input
              className="form-input01"
              type="email"
              placeholder="Электронная почта..."
              id="email01"
            ></input>
          </label>
          <label htmlFor={"budget"}>Бюджетный класс аппарата, который вас интересует<br></br>
                   <select default="" className="book-input01" name="type" id="budget01">
                       <option value="">Не выбран</option>
                       <option value="">Бюджетного класса</option>
                       <option value="">Среднийнего класса</option>
                       <option value="">Высокого класса</option>
                       <option value="">Экспертного класса</option>
                   </select>
                   </label>
          
        <button className="button-send01">Отправить</button>
      </form>
      
    </div>
  );
}
export default Section6;
