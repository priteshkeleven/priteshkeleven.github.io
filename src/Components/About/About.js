import React from 'react';
import "./About.scss";
import aboutMe from "./../../Assets/image/about-me.svg";

const About = () => {
    return (
        <>
            <div className={"about"} id={"about"}>
                <div className={"about-me-img-container"}>
                    <img className={"about-me-img"} src={aboutMe} alt={"about-me"}/>
                </div>
                <div className={"about-me-text"}>
                    <h2>About Me</h2>
                    <strong>Hi There! 👋</strong>
                    <p>
                        I am working as a Full-Stack JavaScript Developer 👨‍💻 with two years of experience. <br/><br/>
                        I mainly work with two major languages, JavaScript and Python. For Front-end, I can develop
                        responsive layout with <strong>ReactJS, SASS, CSS3, Vanilla JS, ES6/7, HTML5</strong> and for
                         Back-end, I can use <strong>Django, Flask, ExpressJS, NodeJS, Axios</strong>. On top of that, I can also integrate
                        it with various SQL/NoSQL
                        Database.
                    </p>
                    <p>
                        To know more --> <strong><a href={"#social"}>Go to Socials! 📱</a></strong>
                    </p>
                    <p>
                        To contact me --> <strong><a href={"#contact"}>Use Form! 🧾</a></strong>
                    </p>
                </div>
            </div>
        </>
    );
};

export default About;
