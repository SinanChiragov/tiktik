import React from 'react';
import { navlist } from '../components/navlist';
import '../assets/style/style.css';

const Navigation = () => {
    return (
        <div className="navRow_236y3">
            <ul className="navbar_2uuBv">
                {navlist.map((menuitem) => {
                    return <li className={menuitem.itemClassName}><a href={menuitem.linkName}>{menuitem.name}</a></li>
                })}
            </ul>

            
        </div>
    )
}
export default Navigation