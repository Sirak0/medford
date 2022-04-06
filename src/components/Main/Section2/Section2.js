import React, { useEffect, useState } from "react";
import {useRef} from "react"
import "./Section2.scss";
import "./Section2.responsive.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function Section2() {  
  const [price,setPrice] = useState(144000)
  const from = useRef() 



  function calculate(e){
     const data = new FormData(from.current)
     console.log(data);
     const quan = data.get("quantity")
     const days = data.get("days")
     const cost = data.get("cost")
     console.log(quan,days,cost);
     if(quan && days && cost){
         const sum = quan*days*cost
          setPrice(sum)
     }
  }

  useEffect(() => {
     calculate()
  }, [])
  return (
    <div className="section2">
      <div className="section2-content1">
        <h1>
          Калькулятор <br></br>окупаемости
        </h1>
        <p>
          Представьте что приобрели универсальный аппарат УЗИ<br></br> высокого
          класса с четырьмя датчиками и принтером в аренду<br></br> за
          <b> 45 тыс. ₽ в месяц</b>
        </p>
      </div>
      <form className="calculate-form" ref={from}>
      <div className="section2-content2">
        <div className="cal-div">
          <div className="input-div">
            <label htmlFor="costumer1">Количество пациентов в день</label>
            <input onChange={calculate} defaultValue={5} id="costumer1" name="quantity" className="day" type="number" min="1"></input>
          </div>
          <div className="x-icon">
            <FontAwesomeIcon className="x-icon1" icon={faXmark} />
          </div>
          <div className="input-div" id="cost-div">
            <label htmlFor="costumer">Средняя стоимость приема</label>
            <input onChange={calculate} defaultValue={1000} id="costumer" name="cost" className="cost" type="number" min="1"></input>
          </div>
          <div className="x-icon">
            <FontAwesomeIcon className="x-icon2" icon={faXmark} />
          </div>
          <div className="input-div">
            <label htmlFor="castumer3">Количество рабочих дней</label>
            <input onChange={calculate} defaultValue={365} name="days" id="costumer3" className="day" type="number" min="1"></input>
          </div>
        </div>
        <div className="calc-resoult">
            <p>Ваш доходза 365 дней:<span>{price} ₽</span> </p>
        </div>
      </div>
      </form>
      <button>Получить КП</button>
    </div>
  );
}
export default Section2;
