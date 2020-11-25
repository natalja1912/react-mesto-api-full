import React from 'react';
import headerLogoPath from '../../images/header-logo.svg';

function Header(props) {
    return (
        <header className={`header ${props.classes}`}>
            <img className="header__logo" src={headerLogoPath} alt="Логотип" />
            <div className="header__items">{props.children}</div>
        </header>
    );
}

export default Header;