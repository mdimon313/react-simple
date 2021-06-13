import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/instagram.svg';
import {ReactComponent as Home} from '../../assets/home.svg';
import {ReactComponent as Message} from '../../assets/messenger.svg';
import {ReactComponent as Explore} from '../../assets/explore.svg';
import './Header.css';

const Header= ()=> {
    return (
        <nav>
            <div className="div-header">
                <div className='div-svg'>
                    <Logo/>
                    {/* <h1 className="insta-logo">instagram</h1> */}
                </div>
                <div style={{display: 'flex', flexDirection:'row', alignItems: 'center'}}>
                    <NavLink exact to='/' activeClassName="active"><Home className='div-svg'/></NavLink>
                    <NavLink exact to='/message' activeClassName="active"><Message className='div-svg'/></NavLink>
                    <NavLink exact to='/explore' activeClassName="active"><Explore className='div-svg'/></NavLink>
                    <button className='buttton-header'>Log out</button>
                </div>
            </div>
        </nav>
    )
}

export default Header;

