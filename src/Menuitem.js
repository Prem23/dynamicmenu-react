import React, { useState } from 'react';
import './Menuitem.scss';
import Navdropdown from './Navdropdown';

const Menuitem = ({ menuItems, moreItems }) => {
    const [isMore, setIsMore] = useState(false);
    console.log(moreItems);

    return (
        <ul className='menu-list'>
            {menuItems.map((item, index) => (
                <li key={index} className='menu-item'>
                    {item === "More" ?
                        <a href="#" className='down-arrow' onClick={() => setIsMore(!isMore)}> {item} </a>
                        :
                        <a href="#">{item}</a>
                    }
                </li>
            ))}
            {
                isMore === true ?
                    <Navdropdown moreItems={moreItems} isMore={isMore} />
                    : null
            }
        </ul>

    );
};

export default Menuitem;