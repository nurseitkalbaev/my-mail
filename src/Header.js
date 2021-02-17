import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header() {
    return (
        <div className='header'>
            <div className="header__left">
                <IconButton>
                    <MenuIcon />
                </IconButton>

                <img src="https://cdn.freelogovectors.net/wp-content/uploads/2018/04/gmail-logo.png" alt="" />
            </div>

            <div className="header__middle">
                <SearchIcon />
                <input placeholder="Search mail" type="text" />
                <ArrowDropDownIcon className="header__inputCaret" />
            </div>

            <div className="header__right">
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>


            </div>
        </div>
    )
}

export default Header
