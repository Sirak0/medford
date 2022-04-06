import React from "react";
import "./Page.scss";
import Header from "./Header/Header";
import Details from "./Details/Details";
import Card from "./Card/Card";
import Footer from "../Main/Footer/Footer";



function Page({item}){
    return(
        <main className="page-main">
            <Header />
            <Details item={item} />
            <Card item={item}/>
            <Footer />
        </main>
    )
}

export default Page