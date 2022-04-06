import React from "react";
import "./Section4.scss";
import "./Section4.responsive.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Section4(){
    const settings = {
        infinite: true,
        speed: 200,
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: true,
        responsive: [
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              arrows:false
            }
          },
        ]
    }
    return(
<div className="section4">
    <div className="section4-content1">
        <h1>Выгодные условия</h1>
    </div>
    <div className="section4-content2">
        <Slider {...settings} className="slider8">
        <div className="cont-div">
                <h3>Официальный<br></br> договор</h3>
                <p>Обучение, консультации и бесплатное обслуживание</p>
            </div>
            <div className="cont-div">
            <h3>Любой срок<br></br> аренды</h3>
                <p>От одного месяца + индивидуальные предложения</p>
            </div>
            <div className="cont-div">
            <h3>Цена и условия<br></br> оплаты</h3>
                <p>от 25 тыс. ₽ в месяц. Выкуп.Система скидок</p>
            </div>
            <div className="cont-div">
        <h3>Полный комплект оборудования</h3>
                <p>Все основные датчики, принтер и настройка</p>
        </div>
        <div className="cont-div">
        <h3>Прибыльная  альтернатива<br></br> лизингу и кредиту</h3>
                <p>Простое оформление</p>
        </div>
        <div className="cont-div">
        <h3>Отличный старт<br></br> для бизнеса</h3>
                <p>Оборудование окупается, вклад в репутацию</p>
        </div>
        </Slider>
        <div className="content2-div">
            <div className="cont-div">
                <h3>Официальный<br></br> договор</h3>
                <p>Обучение, консультации<br></br> и бесплатное обслуживание</p>
            </div>
            <div className="cont-div">
            <h3>Любой срок<br></br> аренды</h3>
                <p>От одного месяца +<br></br> индивидуальные предложения</p>
            </div>
            <div className="cont-div">
            <h3>Цена и условия<br></br> оплаты</h3>
                <p>от 25 тыс. ₽ в месяц. Выкуп.<br></br> Система скидок</p>
            </div>
        </div>
        <div className="content2-div">
        <div className="cont-div">
        <h3>Полный комплект оборудования</h3>
                <p>Все основные датчики, принтер и настройка</p>
        </div>
        <div className="cont-div">
        <h3>Прибыльная  альтернатива<br></br> лизингу и кредиту</h3>
                <p>Простое оформление</p>
        </div>
        <div className="cont-div">
        <h3>Отличный старт<br></br> для бизнеса</h3>
                <p>Оборудование окупается,<br></br> вклад в репутацию</p>
        </div>
        </div>
    </div>
</div>
    )
}
export default Section4;