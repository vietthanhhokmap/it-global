import React from "react";
import './Home.scss'

import Header from "../../components/ForHome/Header/Header";
import Rule from "../../components/ForHome/Rule/Rule";
import DoThings from "../../components/ForHome/DoThings/DoThings";
import Slide from "../../components/ForHome/Slide/Slide";


function Home() {
    return (  
        <div className="home">
                <Header/>
                
                <div>
                    <Rule/>
                    <DoThings/>
                    <Slide/>
                </div>
                
        </div>
    );
}

export default Home;