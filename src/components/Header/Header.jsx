import React from 'react';
import { Link } from 'react-router-dom';
import '../Header/Header.scss'

import img from '../../assets/logo.png'

const Header = () => {
    return (
        <div className='container'>
            <div className='logo'>
                <img className='logo' src={img} alt="" />
            </div>
            <div className='header'>
                <nav className='header-nav'>
                    <ul className='header-menu'>
                        <Link className='link' to="/">
                            Home
                        </Link>
                        <Link className='link' to="/tovar">
                            Tovar
                        </Link>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Header;
