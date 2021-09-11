import React from 'react'
import Brightness7Icon from '@material-ui/icons/Brightness7';
import SearchIcon from '@material-ui/icons/Search';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import Link from "next/link"

const Header = () => {
    return (
        <header className="header">
            {/* ------------------------HEADER NAVBAR MAIN --------------------------*/}
            <div className="header__navbar">
                <div className="header__navbarLeft">
                    <Link href="/">
                    <a><img src="https://hackernoon.com/hn-logo.png" alt="navbarLogo" /></a>
                    </Link>
                </div>

                <div className="header__navbarRight">
                    <form>
                        <input type="text" placeholder="Search..." />
                        <button>
                            <SearchIcon />
                        </button>
                    </form>
                    <div>
                        <button className="header__navbarRightBtn1">Start Writing</button>
                        <button className="header__navbarRightBtn2">Log in</button>
                        <button className="header__navbarRightBtn3">
                            <Brightness2Icon style={{ color: "rgb(246, 247, 249)", fontSize: "2rems" }} />
                        </button>
                    </div>
                </div>
            </div>
            {/* ------------------------HEADER NAVBAR ITEMS --------------------------*/}
            <div className="header__navItems">
                <p>Read</p>
                <p>Top Stories</p>
                <p>Write</p>
                <p>StartUps</p>
                <p>Tech Giants</p>
                <p>About</p>
                <p>Help</p>
                <p>Sponsor</p>
            </div>
            {/* ------------------------HEADER ADD --------------------------*/}
            <div className="header__add">
                <img src="https://cdn.hackernoon.com/images/img-db037s1.jpeg" alt="add"/>
                <p>Gamers & game devs, We Want Your Input</p>
            </div>


        </header>
    )
}

export default Header
