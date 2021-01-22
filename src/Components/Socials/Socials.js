import React from 'react';
import "./Socials.scss";
import socialImg from "./../../Assets/image/socials.svg";
import {SiTwitter, SiGithub, SiLinkedin, SiStackoverflow} from "react-icons/si";

const Socials = () => {
    return (
        <>
            <div className={"social"} id={"social"}>
                <div className={"social-img-container"}>
                    <img src={socialImg} className={"social-img"} alt={"socials"}/>
                </div>
                <div className={"social-group"}>
                    <button className={"social-button"}
                            onClick={() => window.open("https://twitter.com/priteshkeleven")}>
                        <SiTwitter title={"Twitter Icon"}/> Twitter
                    </button>
                    <button className={"social-button"}
                            onClick={() => window.open("https://www.linkedin.com/in/pritesh-k/")}>
                        <SiLinkedin title={"LinkedIn Icon"}/> LinkedIn
                    </button>
                    <button className={"social-button"}
                            onClick={() => window.open("https://github.com/priteshkeleven")}>
                        <SiGithub title={"Github Icon"}/> Github
                    </button>
                    <button className={"social-button"}
                        onClick={() => window.open("https://stackoverflow.com/users/11389944/pritesh-k")}>
                        <SiStackoverflow title={"StackOverflow Icon"}/> Stack Overflow
                    </button>
                </div>
            </div>
        </>
    );
};

export default Socials;
