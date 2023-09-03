import React from 'react';
import './Navdropdown.scss';

const Navdropdown = ({moreItems, isMore}) => {
    return (
        <div className="dropdown">
            <ul className='dropdown-menu'>
                {moreItems.map((item, index) => {
                    return <li key={index} className='dropdown-menu-list'>
                        <button href="#">{item}</button>
                    </li>
                })}
            </ul>
        </div>
    );
};

export default Navdropdown;