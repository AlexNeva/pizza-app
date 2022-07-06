import React from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "../../redux/slices/cartSlice";
import classes from "./cartItem.module.scss";

const CartItem = (item) => {
  const { imageUrl, title, price, cartId } = item;

  const dispatch = useDispatch();

  const removePizza = (idx) => {
    dispatch(removeItem(idx));
  };

  return (
    <div className={classes.item}>
      <div className={classes.image}>
        <img width={80} height={80} src={imageUrl} alt="Pizza" />
      </div>
      <div className={classes.info}>
        <h3>{title}</h3>
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
        <b>{price} ₽</b>
      </div>
      <button
        className={classes.removeItem}
        onClick={() => removePizza(cartId)}
      >
        <svg width="10" height="10">
          <use href="/img/sprite.svg#plus"></use>
        </svg>
      </button>
    </div>
  );
};

export default CartItem;
