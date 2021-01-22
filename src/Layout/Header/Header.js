import React from 'react';
import "./Header.scss";
import HeaderMenu from "../../Components/HeaderMenu/HeaderMenu";

const Header = () => {
    return (
        <>
            <header className={"header"}>
                <nav className={"nav-header"}>
                    <h3 className={"heading"}>
                        <a href={"https://priteshkeleven.github.io"}>Pritesh K.</a>
                    </h3>
                </nav>
            </header>
            <HeaderMenu/>
        </>
    );
};

export default Header;
