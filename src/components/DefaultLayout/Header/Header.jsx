import React from "react";
import { useState, useEffect,useContext } from "react";

import { Link } from "react-router-dom";
import icon from "../../Image/icon.svg";
import "./Header.scss";

import { AiOutlineSend } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import { ThemContext } from "../../../App";


function Header() {


    const them = useContext(ThemContext)
    
    const [activeHeader,setActiveHeader] = useState()
    const [toggleTab,setToggleTab] = useState(them);
    const [active, setActive] = useState(true);
    const [noBg, setBg] = useState("Header");

    useEffect(() => {
        const addBg = () => {
            if (window.scrollY >= 10) {
                setBg("Header on-scroll");
                setActiveHeader ("tabactive")
            }
            else {
                setBg(" Header ")
                setActiveHeader ("")
            }
        };
        window.addEventListener("scroll", addBg);
        return () => {
            window.removeEventListener("scroll", addBg);
        };
    }, []);

    
    const handelNavbar = (index) => {
        setToggleTab(index)
        setActive(!active);
    };


    return (
        <div className={noBg}>
            <div className="container">
                <div className="containerHeader">
                    <div className="logoDiv">
                        <div>
                        
                            <img src={icon} alt="err" className="logo" />
                        </div>
                    </div>
    
                    <div
                        onClick={handelNavbar}
                        className={active ? "toggleIcon" : "toggleIcon opa"}
                    >
                        <CgMenuGridO className="icon" />
                    </div>
    
                    <div className={active ? "navBarMenu" : "navBarMenu showNavBar"}>
                        <div>
                            <ul className="menu flex">
                                <li   className={toggleTab === 1 ? "listItem activebtn" : "listItem"}>
                                    <Link id="link" onClick={() => handelNavbar(1)}  className={activeHeader} to="/">Trang Chủ</Link>
                                </li>

                                <li  className={toggleTab === 2 ? "listItem activebtn" : "listItem"} >
                                    <Link id="link" onClick={() => handelNavbar(2)}  className={activeHeader} to="/introduce">Về Chúng tôi</Link>
                                </li>
        
                                <li  className={toggleTab === 3 ? "listItem activebtn" : "listItem"} >
                                    <Link id="link" onClick={() => handelNavbar(3)} className={activeHeader} to="/successful">Dự án Thành công</Link>
                                </li>
        
                                <li  className={toggleTab === 4? "listItem activebtn" : "listItem"} >
                                    <Link id="link" onClick={() => handelNavbar(4)} className={activeHeader} to="/QandA">Hỏi Đáp</Link>
                                </li>
                            </ul>
                        </div>
    
                        <div className="btnDiv">
                            <button onClick={handelNavbar} className="btn flex btnOne">
                            <div>LIÊN HỆ</div>
                            <AiOutlineSend className="icon" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
