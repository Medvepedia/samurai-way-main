import React from 'react';
import s from './Header.module.css';
function Header() {
    return (
<header className={s.header}>
    <img
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO44m1GdbKmnzULgpRQwoovDOqe6iPMvBRYWurufmf54WMcqOyyWXYdgD4xTee2KrEiWE&usqp=CAU' alt='header_image'/>
</header>
    );
}

export default Header;