import { useState } from 'react';
import Shopcart from './Shopcart/Shopcart';
import Searchbar from './Searchbar/Searchbar';

import './Navbar.scss';
import Logo from '../../assets/images/logo.svg';
import User from '../../assets/icons/user.svg';

function Navbar(props){

    const [navMobile, setNavMobile] = useState(false);

    function navClickHandler(){
        setNavMobile(!navMobile);
    }

    return(
        <header className='container-padding'>
            <nav>
                <div className={`menu-mobile-btn ${navMobile ? 'active' : ''}`} onClick={navClickHandler}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className='logo'>
                    <Logo />
                </div>

                <div className='desk-container'>
                    <div className='login-btn-desktop'>
                        <User />
                        <span>Minha Conta</span>
                    </div>

                    <Shopcart cartCounter={props.cartCounter}/>
                </div>
                

                <div className={`menu-mobile  ${navMobile ? 'active' : ''}`}>
                    <div className='login-btn'>
                        <User />
                        <span>Minha Conta</span>
                    </div>
                </div>
            </nav>

            <Searchbar />
        </header>
    )
}

export default Navbar;
