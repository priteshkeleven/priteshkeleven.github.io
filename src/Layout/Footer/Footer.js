import React from 'react';
import "./Footer.scss";
import {BsHeartFill} from "react-icons/bs";

const Footer = () => {
    return (
        <>
             <footer className={"footer"}>
                 <nav className={"nav-footer"}>
                    <h4>Made with <BsHeartFill style={{verticalAlign: "middle"}}/> by Pritesh K.</h4>
                 </nav>
             </footer>
        </>
    );
};

export default Footer;
