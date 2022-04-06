import React, { useEffect, useState } from "react";
import "./Section3.scss";
import "./Section3.responsive.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Section3() {
  const [devices, setDevices] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const devicesData = useSelector(function (state) {
    return state.items;
  });
  const settings = {
    infinite: true,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
        },
      },
    ],
  };

  function take(e, elem) {
    e.preventDefault();
    dispatch({
      type: "getPopup",
      payload: elem,
    });
  }

  function go(e, elem) {
    console.log(e.target.tagName);
    if (e.target.tagName === "button" || e.target.tagName === "BUTTON") {
      return;
    }
    window.scrollTo({
      top: 0,
    });
    navigate(`/page${elem.id}`);
  }

  useEffect(() => {
    setDevices(devicesData);
  }, [devicesData]);

  return (
    <div className="section3">
      <div className="slider-head">
        <h1>УЗ системы в наличии</h1>
      </div>
      <Slider {...settings} className="slider5">
        {devices.map((elem, index) => (
          <div className="slider-item" onClick={(e) => go(e, elem)} key={index}>
            <div className="devices-img">
              <img className="image" src={elem.mainImage} alt="nkar"></img>
            </div>

            <div className="devices-inf1">
              <img src={elem.brandLogo}></img>

              <h2>{elem.name}</h2>
              <p>{elem.price} ₽/мес. </p>
              <button onClick={(e) => take(e, elem)}>Получить КП</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
export default Section3;
