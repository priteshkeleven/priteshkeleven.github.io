import './App.scss';
import Header from "./Layout/Header/Header";
import Body from "./Layout/Body/Body";
import Footer from "./Layout/Footer/Footer";
import firebase from "firebase";

const App = () => {
    const {
        REACT_APP_API_KEY,
        REACT_APP_AUTH_DOMAIN,
        REACT_APP_PROJECT_ID,
        REACT_APP_STORAGE_BUCKET,
        REACT_APP_MESSAGING_SENDER_ID,
        REACT_APP_APP_ID,
        REACT_APP_MEASUREMENT_ID
    } = process.env;

    const firebaseConfig = {
        apiKey: REACT_APP_API_KEY,
        authDomain: REACT_APP_AUTH_DOMAIN,
        projectId: REACT_APP_PROJECT_ID,
        storageBucket: REACT_APP_STORAGE_BUCKET,
        messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
        appId: REACT_APP_APP_ID,
        measurementId: REACT_APP_MEASUREMENT_ID,
    };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app()
    }
    firebase.analytics();

    return (
        <>
            <Header/>
            <Body/>
            <Footer/>
        </>
    );
}

export default App;
