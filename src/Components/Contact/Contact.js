import React, {Fragment, useState} from 'react';
import "./Contact.scss";
import contactMe from "./../../Assets/image/contact-me.svg";
import firebase from "firebase/app";

const Contact = () => {
    const db = firebase.firestore();

    const [lead, setLead] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [messageError, setMessageError] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        if (name === "name" && nameError) setNameError(false);
        if (name === "email" && emailError) setEmailError(false);
        if (name === "message" && setMessageError) setMessageError(false);
        setLead(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = () => {
        if (lead.name === "") {
            setNameError(true);
        }
        if (lead.email === "" || !(/\S+@\S+\.\S+/.test(lead.email))) {
            setEmailError(true);
        }
        if (lead.message === "") {
            setMessageError(true);
        }
        if (lead.name !== "" && lead.email !== "" && lead.message !== "" && (/\S+@\S+\.\S+/.test(lead.email))) {
            setLoading(true);
            db.collection("leads")
                .add({
                    ...lead,
                    datetime: firebase.firestore.Timestamp.fromDate(new Date())
                })
                .then(docRef => {
                    setSent(true);
                    setLoading(false);
                })
                .catch(error => {
                    setError(true);
                    setLoading(false);
                });
        }
    }

    return (
        <>
            <div className={"contact"} id={"contact"}>
                <div className={"contact-form"}>
                    {
                        !sent && !error ? (
                            <Fragment>
                                <div className={"form-control"}>
                                    <input type={"text"} className={"input name"} name={"name"}
                                           placeholder={"Your Name, Please!"}
                                           onChange={handleChange} value={lead.name}/>
                                    {nameError ? <span className={"validation-text"}>Name shouldn't be empty!!</span> : <Fragment/>}
                                </div>
                                <div className={"form-control"}>
                                    <input type={"email"} className={"input email"} name={"email"}
                                           value={lead.email}
                                           placeholder={"Email Address Too, Thanks!!"} onChange={handleChange}/>
                                    {emailError ? <span className={"validation-text"}>Email shouldn't be empty or invalid!!</span> : <Fragment/>}

                                </div>
                                <div className={"form-control"}>
                                     <textarea rows={5} className={"input message"} name={"message"}
                                               value={lead.message}
                                               placeholder={"Greetings!!! Your Message Goes Here!"}
                                               onChange={handleChange}/>
                                    {messageError ? <span className={"validation-text"}>Message looks empty!! It shouldn't.</span> : <Fragment/>}
                                </div>
                                <div className={"form-control"}>
                                    <button className={"send-button"} onClick={handleSubmit}>{loading ? `Loading...` : `Send 📡`}</button>
                                </div>
                            </Fragment>
                        ) : <Fragment/>
                    }
                    {
                        sent ? (
                            <div>
                                <button className={"send-button"} disabled>Sent! Will get back to you soon. 👍</button>
                            </div>
                        ) : <Fragment/>
                    }
                    {
                        error ? (
                            <div>
                                <button className={"send-button"} disabled>Error! Try refreshing page. ⚠️</button>
                            </div>
                        ) : <Fragment/>
                    }

                </div>
                <div className={"contact-img-container"}>
                    <img src={contactMe} className={"contact-img"} alt={"contact-form"}/>
                </div>
            </div>
        </>
    );
};

export default Contact;
