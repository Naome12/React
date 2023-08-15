import React from 'react'
import { HiOutlineX } from "react-icons/hi";
import { HiViewGrid } from "react-icons/hi";

const Header = () => {
  return (
    <div>
    <header className="header" style={{backgroundColor: '#000'}} id="header">
    <nav className="nav container">
      <a href="#home" className="nav__logo">Coffee<span>.</span>co </a>

      <div className="nav__menu" id="nav-menu">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#home" class="nav__link active-link">Home</a>
          </li>
          <li className="nav__item">
            <a href="#products" className="nav__link">Products</a>
          </li>
          <li className="nav__item">
            <a href="#place" className="nav__link">Place</a>
          </li>
          <li className="nav__item">
            <a href="#blog" className="nav__link">Blog</a>
          </li>
        </ul>

        <div className="nav__close" id="nav-close">
         <HiOutlineX />

        </div>
      </div>

      <div className="nav__toggle" id="nav-toggle">
        <HiViewGrid/>
      </div>
    </nav>
  </header>
    </div>
  )
}

export default Header
