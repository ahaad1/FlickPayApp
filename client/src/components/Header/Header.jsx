import React from 'react';
import style from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faArrowRightToBracket, faPlus } from '@fortawesome/free-solid-svg-icons';

export function Header() {
    return (
        <div className={style.header}>
            <a href="/" className={style.header_logo}>
                <img src="../../../assets/wallet.png" alt="Wallet Logo" />
                <h2>FlickPay</h2>
            </a>
            <div className={style.header_navbar}>
                <ul className={style.navbar_nav}>
                    <li className={style.header_nav_btn}>
                        <a href='#' className={style.navbar_nav_link}>
                            <button className={style.navbar_nav_btn}>
                                <FontAwesomeIcon icon={faPlus} className={style.plusIcon} />
                            </button>
                        </a>
                    </li>
                    <li className={style.header_nav_btn}>
                        <a href='#' className={style.navbar_nav_link}>
                            <FontAwesomeIcon icon={faGear} />
                        </a>
                    </li>
                    <li className={style.header_nav_btn}>
                        <a href='#' className={style.navbar_nav_link}>
                            <FontAwesomeIcon icon={faArrowRightToBracket} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
