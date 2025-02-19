import React, {useState} from 'react'
import "./Nav.css"
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import logo from '../../Assets/logo.png';
import Login from '../Login/Login';

const Navbar = () => {
  const [active, setActive] = useState('navBar')
  const showNav =()=>{
    setActive('navBar activeNavbar')
  }

  const removeNav =()=>{
    setActive('navBar')
  }
  return (
    <section className='navBarSection'>
      <div className="header">
        <div className='logoDiv'>
        <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className={active}>
          <ul className="navLists flex">

            <li className="navItem">
              <a href="" className="navLink">Home</a>
            </li>

            <li className="navItem">
              <a href="" className="navLink">About</a>
            </li>

            <li className="navItem">
              <a href="" className="navLink">Activities</a>
            </li>

            <li className="navItem">
              <a href="" className="navLink">Offers</a>
            </li>

            <li className="navItem">
              <a href="" className="navLink">Contact</a>
            </li>

            <div className="headerBtns flex">
              <button className="loginBtn btn">
                <a href="Login">Login</a>
              </button>

              <button className="btn">
                <a href="#">Sign Up</a>
              </button>
            </div>

          </ul>

          <div onClick={removeNav} className="closeNavbar">
            <AiFillCloseCircle className="icon"/>
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className='icon'/>
        </div>
      </div>
    </section>
  )
}

export default Navbar
