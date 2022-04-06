import React, { useEffect, useRef, useState } from "react";
import "./Details.scss";
import "./Details.responsive.scss"
import { useSelector,useDispatch } from "react-redux";
import garanty from "../../../images/page/producers/Garanty.svg";
import Rating from '@mui/material/Rating';
import Broshur from "../../../images/page/downloads/broshur.svg";
import Checklist from "../../../images/page/downloads/checklist.svg";
import Standart from "../../../images/page/downloads/standart.svg";
import Watch from "../../../images/page/downloads/watch.svg";
import Des from "../../../images/page/advantages/desinfikacia.svg";
import Rep from "../../../images/page/advantages/repair.svg";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {AiOutlineCheck} from "react-icons/ai"
import BrandLogo from "../../../images/page/items/Logiq7/devices/brandlogo.svg";
import {IoIosArrowDown} from "react-icons/io"


function Details({item}) {

    const [imageState, setImageState] = useState(null)
    const element = useRef(null)
    const charactersDiv = useRef()
    const characterStatus = useRef(false)
    const dispatch = useDispatch()
    const [device,setDevice] = useState({ images: [], rating: 0,sensors:[] ,options:[], devices:[]})
    const allItems = useSelector(function (state) {
        return state.items
    })
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots:false,
        arrows:false,
        responsive:[
           {breakpoint:700,
            settings:{
                slidesToShow:3
            }
            },
            {breakpoint:500,
                settings:{
                    slidesToShow:3,
                    arrows:false,
             }
            },
           
        ]
      };

    function newImage(event) {
        setImageState(event.target.src)
    }


    function toggle(e){
        if(characterStatus.current){
            charactersDiv.current.style.display = "none"
            e.target.style = "transform:rotate(0deg)"
            characterStatus.current = false
        }
        else{
            charactersDiv.current.style.display = "block"
            e.target.style = "transform:rotate(180deg)"
            characterStatus.current  = true
        }
    }

    useEffect(() => {
        setDevice(item)
        setImageState(item.mainImage)
    }, [item])

    


    return (
        <section className="details-section">
            <div className="images-div">
                {device.images.map((elem, index) => {
                    const images = ["jpg", "gif", "png"]
                    const videos = ["mp4", "3gp", "ogg"]

                    const url = elem
                    const extension = url.split(".")[2]

                    if (images.includes(extension)) {
                        element.current = "image"
                    } else if (videos.includes(extension)) {
                        element.current = "video"
                    }
                    return (
                        <div className="image-div" key={index}>
                            {element.current === "image" ? <img onClick={newImage} alt={device.name} src={elem}></img> : <video onClick={() => dispatch({type:"media",payload:elem})}><source src={elem} type="video/mp4"></source></video>}
                        </div>
                    )
                })}
            </div>
            <div className="detailed-div">
                <div className="main-image-div">
                    <img className="main-image" onClick={() => {dispatch({type:"media",payload:imageState})}} alt={device.name} src={imageState}></img>
                </div>
                <div className="described-div">
                <div className="garanty-div-resp">
                            <img src={garanty} alt="your garanty" className="garanty-icon"></img>
                            <p>Гарантия лучшей цены</p>
                        </div>
                    <div className="producer-div">
                       <div className="producer-name-div">
                        <img className="brand-logo" src={BrandLogo} alt="nkar"></img>
                        </div>
                    </div>
                    <div className="title-div">
                        <h1>
                            {device.name}
                        </h1>

                    </div>
                    <div className="stars-div">
                        <p>{device.rating}</p>
                        <Rating name="half-rating-read" precision={0.5} value={device.rating} readOnly></Rating>
                    </div>
                    <div className="price-div">
                        <h3 className="price">
                            {device.price}
                            <span className="price-span">
                                ₽ /мec
                            </span>
                        </h3>
                        <p>Скидка от 3х месяцев аренды</p>
                    </div>
                    <div className="button-cont">
                        <div className="button-div">
                            <button>
                                Получить КП
                            </button>
                        </div>
                        <div className="garanty-div">
                            <img src={garanty} alt="your garanty" className="garanty-icon"></img>
                            <p>Гарантия лучшей цены</p>
                        </div>
                    </div>
                    <div className="description-div">
                        <h5>
                            Краткое описание
                        </h5>
                        <p>
                            {device.description}
                        </p>
                    </div>
                    <div className="downloads-div">

                        <div className="download-div">
                            <img src={Broshur} alt="..." ></img>
                            <p>Скачать <br />брошюру</p>
                        </div>
                        <div className="download-div">
                            <img src={Watch} alt="watch"></img>
                            <p>Смотреть <br />видеообзор</p>
                        </div>
                        <div className="download-div">
                            <img src={Standart} alt="..."></img>
                            <p>Стандарт<br /> оснащения</p>
                        </div>
                        <div className="download-div">
                            <img src={Checklist} alt="checklist"></img>
                            <p>Скачать <br />чек-лист</p>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="advantages-div">
                        <div className="advantage-div">
                            <img src={Rep} alt="..."></img>
                            <p>
                                Оборудование прошло <br /> полное ТО по стандартам  <br />производителя
                            </p>
                        </div>
                        <div className="advantage-div">
                            <img src={Des} alt="..."></img>
                            <p>
                                Произведена дезинфекция  <br /> всех поверхностей  <br />
                                и датчиков
                            </p>
                        </div>
                    </div>
                    <div className="descriptions-div">
                        <div className="description-title-div">
                           <h5>Характеристики</h5>
                           <div className="arrow-divk" onClick={toggle}>
                               <IoIosArrowDown className="down-arrow"/>
                           </div>
                        </div>
                        <div className="characters-div" ref={charactersDiv}>
                        <div className="character-div">
                            <div className="character-name">
                                <p>
                                    Электорпитание
                                </p>
                            </div>
                            <div className="character-value">
                                <p>
                                    {device.nutrition}
                                </p>
                            </div>
                        </div>
                        <div className="character-div">
                            <div className="character-name">
                                <p>
                                    Вес
                                </p>
                            </div>
                            <div className="character-value">
                                <p>
                                    {device.weight}
                                </p>
                            </div>
                        </div>
                        <div className="character-div">
                            <div className="character-name">
                                <p>
                                    Дисплей
                                </p>
                            </div>
                            <div className="character-value">
                                <p>
                                    {device.display}
                                </p>
                            </div>
                        </div>
                        <div className="character-div">
                            <div className="character-name">
                                <p>
                                    Платформа
                                </p>
                            </div>
                            <div className="character-value">
                                <p>
                                    {device.platform}
                                </p>
                            </div>
                        </div>
                        <div className="character-div">
                            <div className="character-name">
                                <p>
                                    Color
                                </p>
                            </div>
                            <div className="character-value">
                                <p>
                                    {device.color}
                                </p>
                            </div>
                        </div>
                        <div className="character-div">
                            <div className="character-name">
                                <p>
                                    PW
                                </p>
                            </div>
                            <div className="character-value">
                                <p>
                                    {device.pw}
                                </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="complect-div">
                         <h5>Комплектация</h5>
                         <div className="sensors-div">
                             <h5>Датчики</h5>
                             <Slider {...settings} style={{width:"90%",height:"200px", overflow:"hidden"}}>
                                 {device.sensors.map((elem,index) => (
                                     <div className="slider-item" key={index} >
                                         <div className="slider-img-div">
                                             <img className="slider-img" onClick={() => dispatch({type:"media",payload:elem.image})} src={elem.image} alt="!Failed to open"></img>
                                             {elem.available ? 
                                             <div className="available-div available"> <AiOutlineCheck /> </div>
                                              : <div className="available-div"></div> }
                                         </div>
                                         <p >{elem.name}</p>
                                     </div>
                                 ))}
                             </Slider>
                         </div>
                         <div className="sensors-div" id="options-div">
                             <h5>Опции</h5>
                             <Slider {...settings} id="options-slider">
                                 {device.options.map((elem,index) => (
                                     <div className="slider-item" style={{width:"150px"}} key={index}>
                                         <div className="slider-img-div">
                                             <img className="slider-img" onClick={() => dispatch({type:"media",payload:elem.image})} src={elem.image} alt="!Failed to open"></img>
                                             {elem.available ? 
                                             <div className="available-div available"> <AiOutlineCheck /> </div>
                                              : <div className="available-div"></div> }
                                         </div>
                                         <p>{elem.name}</p>
                                     </div>
                                 ))}
                             </Slider>
                         </div>
                         <div className="sensors-div devices-div">
                             <h5>Устройства</h5>
                             <Slider {...settings} id="options-slider">
                             
                                 {device.devices.map((elem,index) => (
                                     <div className="slider-item" style={{width:"150px"}} key={index}>
                                     <div className="slider-img-div">
                                         <img className="slider-img" onClick={() => dispatch({type:"media",payload:elem.image})}  src={elem.image} alt="!Failed to open"></img>
                                         {elem.available ? 
                                         <div className="available-div available"> <AiOutlineCheck /> </div>
                                          : <div className="available-div"></div> }
                                     </div>
                                     <p>{elem.name}</p>
                                 </div>
                                 ))}
                                 </Slider>
                             
                         </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Details