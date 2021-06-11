import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import { BusinessCenter, Chat, Home, Notifications, SupervisorAccount } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';
import { auth } from './firebase';

function Header() {


    const dispatch = useDispatch()

    const logoutOfApp =() => {
        dispatch(logout())
        auth.signOut()
    }

    return (
        <div className="header">
            <header className="header__left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg" 
                    alt="Linkedin Logo" />

                <div className="header__search">
                    <SearchIcon />
                    <input placeholder="Search" type="text" />
                </div>
            </header>

            <header className="header__right">
                <HeaderOption Icon={Home} title='Home'/>
                <HeaderOption Icon={SupervisorAccount} title='My Network'/>
                <HeaderOption Icon={BusinessCenter} title='Jobs'/>
                <HeaderOption Icon={Chat} title='Messaging'/>
                <HeaderOption Icon={Notifications} title='Notifications'/>
                <HeaderOption   avatar = {true}
                                title="me"
                                onClick={logoutOfApp} />
            </header>

        </div>
    )
}

export default Header
