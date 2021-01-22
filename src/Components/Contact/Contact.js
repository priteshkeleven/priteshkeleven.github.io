import React from 'react';
import "./Contact.scss";
import contactMe from "./../../Assets/image/contact-me.svg";

const Contact = () => {
    return (
        <>
            <div className={"contact"} id={"contact"}>
                <div className={"contact-form"}>
                    <div>
                        <input type={"text"} className={"input name"} placeholder={"Your Name, Please!"}/>
                    </div>
                    <div>
                        <input type={"email"} className={"input email"} placeholder={"Email Address Too, Thanks!!"}/>
                    </div>
                    <div>
                        <textarea rows={5} className={"input message"} placeholder={"Greetings!!! Your Message Goes Here!"}/>
                    </div>
                    <div>
                        <button className={"send-button"}>Send 📡</button>
                    </div>
                </div>
                <div className={"contact-img-container"}>
                    <img src={contactMe} className={"contact-img"} alt={"contact-form"}/>
                </div>
            </div>

        </>
    );
};

export default Contact;
