import React from 'react';
import "./Body.scss";
import About from "../../Components/About/About";
import Contact from "../../Components/Contact/Contact";
import Socials from "../../Components/Socials/Socials";

const Body = () => {
    return (
        <>
            <About/>
            <Contact/>
            <Socials/>
        </>
    );
};

export default Body;
