import React from "react";
import classes from "./cartItem.module.scss";

const CartItem = () => {
  return (
    <div className={classes.item}>
      <div className={classes.image}>
        <img
          width={80}
          height={80}
          src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
          alt="Pizza"
        />
      </div>
      <div className={classes.info}>
        <h3>Сырный цыпленок</h3>
        <p>тонкое тесто, 26 см.</p>
      </div>
      <div className={classes.count}>
        <button className={`${classes.minus} ${classes.changeBtn}`}>
          <svg width="10" height="2">
            <use href="/img/sprite.svg#minus"></use>
          </svg>
        </button>
        <b>2</b>
        <button className={`${classes.plus} ${classes.changeBtn}`}>
          <svg width="10" height="10">
            <use href="/img/sprite.svg#plus"></use>
          </svg>
        </button>
      </div>
      <div className={classes.price}>
        <b>770 ₽</b>
      </div>
      <button className={classes.removeItem}>
        <svg width="10" height="10">
          <use href="/img/sprite.svg#plus"></use>
        </svg>
      </button>
    </div>
  );
};

export default CartItem;
