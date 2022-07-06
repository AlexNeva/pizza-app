import React from "react";
import uniqid from "uniqid";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CartItem } from "../../components";
import { clearItems } from "../../redux/slices/cartSlice";
import classes from "./cart.module.scss";

const Cart = () => {
  const { items, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const clearCart = () => {
    dispatch(clearItems());
  };
  return (
    <div className={classes.cart}>
      <div className={classes.top}>
        <h2 className="pageTitle">Корзина</h2>
        <button className={classes.clearBtn} onClick={clearCart}>
          <svg width="35" height="35">
            <use href="/img/sprite.svg#trash"></use>
          </svg>
          <span>Очистить корзину</span>
        </button>
      </div>
      <div className="content__items">
        {items.map((item) => (
          <CartItem key={uniqid()} {...item} />
        ))}
      </div>
      <div className={classes.bottom}>
        <div className={classes.details}>
          <span>
            Всего пицц: <b>{items.length} шт.</b>
          </span>
          <span>
            Сумма заказа: <b>{totalPrice} ₽</b>
          </span>
        </div>
        <div className={classes.buttons}>
          <Link to="/" className={`${classes.back} button button--outline`}>
            Вернуться назад
          </Link>
          <button className={`${classes.pay} button`}>Оплатить сейчас</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
