import React from "react";
import "./Footer.scss";
import "./Footer.responsive.scss";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faVk,
} from "@fortawesome/free-brands-svg-icons";
import Company from "../../../images/main/company.png";

import Logo from "../../../images/main/Group 511.png";
import Vector from "../../../images/main/Vector.svg";
import Mindray from "../../../images/main/mindray.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-cont1">
        <div className="footer-div1">
          <div className="footer-logo">
            <img className="logo" src={Logo} alt="nkar"></img>
            <img className="vector" src={Vector} alt="nkar"></img>
          </div>
          <p>
            © 2009–2021 ООО «Медфорд» официальный дистрибьютор и главный
            сервисный партнер<br></br> Mindray в России
          </p>
          <img className="mindray" src={Mindray} alt="nkar"></img>
        </div>
        <div className="footer-div2">
          <Link className="link" to={"/"}>
            <div className="list-item" id="home">
              Акции
            </div>
          </Link>
          <Link className="link" to={"/"}>
            <div className="list-item" id="home">
              Сервис
            </div>
          </Link>
          <Link className="link" to={"/"}>
            <div className="list-item" id="home">
              Доставка и оплата
            </div>
          </Link>
          <Link className="link" to={"/"}>
            <div className="list-item" id="home">
              Обучение
            </div>
          </Link>
        </div>
        <div className="footer-div3">
          <Link className="link" to={"/"}>
            <div className="list-item" id="home">
              О компании
            </div>
          </Link>
          <Link className="link" to={"/"}>
            <div className="list-item" id="home">
              Новости
            </div>
          </Link>
          <Link className="link" to={"/"}>
            <div className="list-item" id="home">
              Отзывы
            </div>
          </Link>
        </div>
        <div className="footer-div4">
          <p className="number1">
            <b>+7 499 495-48-21</b>
          </p>
          <Link className="link" to={"/"}>
            <div className="list-item" id="home">
              Обратный звонок
            </div>
          </Link>
          <p>
            Ленинский пр-т. 146, Москва<br></br> Пн–Пт: с 9:00 до 19:00 МСК
          </p>
          <div className="social-icons">
            <a target="_blank" href="https://www.facebook.com/">
              <FontAwesomeIcon className="social-icone" icon={faFacebook} />
            </a>
            <a target="_blank" href="https://vk.com/">
              <FontAwesomeIcon className="social-icone" icon={faVk} />
            </a>
            <a target="_blank" href="https://www.instagram.com/">
              <FontAwesomeIcon className="social-icone" icon={faInstagram} />
            </a>
          </div>
          <div className="group-company">
            <div className="c-imag">
              <img className="company" src={Company} alt="nkar"></img>
            </div>
            <div className="c-group">
              <p>Группа компаний</p>
              <h5>Medford Medical</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-r">
        <div className="copy-text">
          <Link className="link" to={"/"}>
            Политика конфиденциальности
          </Link>
          <Link className="link" to={"/"}>
            Договор оферты
          </Link>
        </div>
        <div className="copy">
          <p class="copyright">© 2022 </p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
