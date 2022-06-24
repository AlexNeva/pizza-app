import React from "react";
import { CartItem } from "../../components";
import classes from "./cart.module.scss";

const Cart = () => {
  return (
    <div className={classes.cart}>
      <div className={classes.top}>
        <h2 className="pageTitle">Корзина</h2>
        <button className={classes.clearBtn}>
          <svg width="35" height="35">
            <use href="/img/sprite.svg#trash"></use>
          </svg>
          <span>Очистить корзину</span>
        </button>
      </div>
      <div className="content__items">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className={classes.bottom}>
        <div className={classes.details}>
          <span>
            Всего пицц: <b>3 шт.</b>
          </span>
          <span>
            Сумма заказа: <b>900 ₽</b>
          </span>
        </div>
        <div className={classes.buttons}>
          <a href="/" className={`${classes.back} button button--outline`}>
            Вернуться назад
          </a>
          <button className={`${classes.pay} button`}>Оплатить сейчас</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
