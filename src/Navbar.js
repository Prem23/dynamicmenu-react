import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './Navbar.scss';
import Menuitem from './Menuitem';
import SearchBar from './Searchbar';

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const menuItems = [
        'Home',
        'Electronics',
        'Books',
        'Music',
        'More',
    ];

    const mobileMenuItems = [
        'Home',
        'More',
    ];

    const moreItems = [
        'Movies',
        'Games',
    ]

    const moreMobileItems = [
        'Electronics',
        'Books',
        'Music',
        'Movies',
        'Games',
    ]


    useEffect(() => {
        const checkMobileView = () => {
            const isMobile = window.innerWidth <= 768;
            setShowMobileMenu(isMobile);
        };

        window.addEventListener('resize', checkMobileView);

        checkMobileView();

        return () => {
            window.removeEventListener('resize', checkMobileView);
        };
    }, []);

    return (
        <nav className="navbar">
            <img src={logo} alt="Your Logo" className="logo" />
            {showMobileMenu ?
                <Menuitem menuItems={mobileMenuItems} moreItems={moreMobileItems} /> :
                <Menuitem menuItems={menuItems} moreItems={moreItems} /> 
            }
            <SearchBar />
        </nav>
    );
};

export default Navbar;