import { click } from '@testing-library/user-event/dist/click';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';
//import logo from "../images/logo.jpg"; // Corrected path

function Navbar() {
     <div className="navbar">

    </div>
    const [click,setClick]=useState(false);
    const [button,setButton]=useState(true);
    const handleClick= ()=> setClick(!click);
    const closeMobileMenu= ()=> setClick(false);
    const showButton=()=>{
        if(window.innerWidth <= 960)
        {
            setButton(false);
        }
        else{
            setButton(true);
        }
    }

useEffect(() => { showButton();},[]);

    window.addEventListener('resize',showButton);
  return (
    <>
    <nav className='navbar'>
<div className="navbar-container">
<Link to="/" className="navbar-logo" onClick={closeMobileMenu}> 
NGS FOUNDATION <i className="fab fa-typo3"> </i>
</Link>

<div className='menu-icon'onClick={handleClick} >

<i className={click ? 'fas fa-times': 'fas fa-bars'}/>
</div>
<ul className={click ? 'nav-menu active': 'nav-menu'}>
<li className='nav-item'>
    <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
</li>
<li className='nav-item'>
    <Link to='/about' className='nav-links' onClick={closeMobileMenu}>About us</Link>
</li>
<li className='nav-item'>
    <Link to='/what' className='nav-links' onClick={closeMobileMenu}>What we do</Link>
</li>
<li className='nav-item'>
    <Link to='/mission' className='nav-links' onClick={closeMobileMenu}>Mission</Link>
</li>
<li className='nav-item'>
    <Link to='/impact' className='nav-links' onClick={closeMobileMenu}>Our Impact</Link>
</li>
<li className='nav-item'>
    <Link to='/founder' className='nav-links' onClick={closeMobileMenu}>Our Founder</Link>
</li>
<li className='nav-item'>
    <Link to='/pressroom' className='nav-links' onClick={closeMobileMenu}>Pressroom</Link>
</li>

<li className='nav-item'>
    <Link to='/team' className='nav-links' onClick={closeMobileMenu}>Our Team</Link>
</li>

<li className='nav-item'>
    <Link to='/' className='nav-links' onClick={closeMobileMenu}></Link>
</li>
</ul>
{button && <Button buttonStyle='/'>Contact</Button> }

</div>
    </nav>
    </>
  );
}

export default Navbar;
