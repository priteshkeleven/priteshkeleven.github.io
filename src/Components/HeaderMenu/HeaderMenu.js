import React from 'react';
import "./HeaderMenu.scss";

const HeaderMenu = () => {
    return (
        <>
            <ul className={"header-menu"}>
                <li><a href={"#about"}>About</a></li>
                <li><a href={"#contact"}>Contact</a></li>
                <li><a href={"#social"}>Socials</a></li>
            </ul>
        </>
    );
};

export default HeaderMenu;
