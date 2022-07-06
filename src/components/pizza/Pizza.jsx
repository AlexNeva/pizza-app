import debounce from "lodash.debounce";
import React from "react";
import uniqid from "uniqid";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/slices/cartSlice";
import classes from "./pizza.module.scss";

const Pizza = (item) => {
  const dispatch = useDispatch();
  const { title, price, imageUrl } = item;

  const addPizza = debounce((pizza) => {
    dispatch(addItem(pizza));
  }, 250);

  return (
    <div className={classes.pizza}>
      <img
        width={260}
        height={260}
        className={classes.image}
        src={imageUrl}
        alt="Pizza"
      />
      <h4 className={classes.title}>{title}</h4>
      <div className={classes.selector}>
        <ul>
          <li className={classes.active}>тонкое</li>
          <li>традиционное</li>
        </ul>
        <ul>
          <li className={classes.active}>26 см.</li>
          <li>30 см.</li>
          <li>40 см.</li>
        </ul>
      </div>
      <div className={classes.footer}>
        <div className={classes.price}>{price} ₽</div>
        <button
          className={`button button--outline ${classes.addBtn}`}
          onClick={() => addPizza({ ...item, cartId: uniqid() })}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
        </button>
      </div>
    </div>
  );
};

export default Pizza;
