import React from "react";
import { Link } from "react-router-dom";
import classes from "./header.module.scss";

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={`${classes.container} container`}>
        <Link to="/">
          <div className={classes.logo}>
            <svg width="38" height="38">
              <use href="/img/sprite.svg#logo"></use>
            </svg>
            <div>
              <span>React Pizza</span>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </Link>

        <Link to="/cart" className={`${classes.cartBtn} button`}>
          <span>520 ₽</span>
          <div className={classes.cartBtnDelimitr}></div>
          <svg width="18" height="18">
            <use href="/img/sprite.svg#cart"></use>
          </svg>
          <span>3</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
