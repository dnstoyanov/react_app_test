import React, { useState } from "react";

import classes from "./Header.module.scss";
import { Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineCloseSquare } from "react-icons/ai";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((current) => !current);

  return (
    <div className={classes.header}>
      <div className={classes.header__content}>
        <div>
          <Link to="/" className={classes.logo}>
            Logo
          </Link>
        </div>
        <div>
          <nav
            className={`${classes.nav} ${menuOpen ? classes[`nav--open`] : {}}`}
          >
            <ul>
              <li className={classes.nav__item} href={"/"}>
                <Link to="/home">Home</Link>
              </li>
              <li className={classes.nav__item} href={"/"}>
                <Link to="/about-us">About Us</Link>
              </li>
              <li className={classes.nav__item} href={"/"}>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li className={classes.nav__item} href={"/"}>
                <Link to="/contacts">Contact Us</Link>
              </li>
            </ul>
            <div className={classes.nav__button__container}>
              <Button />
            </div>
          </nav>
        </div>
        <div>
          <div className={classes.header__button__container}>
            <button
              className={classes.button}
              onClick={() => console.log(window.title)}
            >
              Log Info
            </button>
          </div>
          <button className={classes.header__toggler} onClick={toggleMenu}>
            {!menuOpen ? <BiMenuAltRight /> : <AiOutlineCloseSquare />}
          </button>
        </div>
      </div>
    </div>
  );
};

const Button = () => {
  return <button className={classes.button}>Log Info</button>;
};
