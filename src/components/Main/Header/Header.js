import React from "react";
import "./Header.scss";
import "./Header.responsive.scss";
import Logo from "../../../images/main/Favicon.svg";
import Vector from "../../../images/main/Vector.svg";
function Header() {
  return (
    <div className="header-cont">
      <div className="logo-div">
        <img className="logo" src={Logo} alt="nkar"></img>
        <img className="vector" src={Vector} alt="nkar"></img>
      </div>
      <div className="contacts-div">
        <p className="number">
          <b>+7 499 495-48-21</b>
        </p>
        <p className="adress">Ленинский пр-т. 146, Москва</p>
      </div>
    </div>
  );
}
export default Header;
