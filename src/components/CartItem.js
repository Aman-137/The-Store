import React from "react";
import FormatPrice from "../Helpers/FormatPrice";
import CartAmountToggle from "./CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";

const CartItem = ({ id, name, image, color, price, amount }) => {
  const { removeItem, setDecrement, setIncrement } = useCartContext();

  // const setDecrement = () => {
  //   // amount > 1 ? setAmount(amount - 1) : setAmount(1);
  // };

  // const setIncrement = () => {
  //   // amount < stock ? setAmount(amount + 1) : setAmount(stock);
  // };

  return (
    <div className="cart_heading grid grid-five-column">
      <div className="cart-image--name">
        <div>
          <figure>
            <img src={image} alt={id} />
          </figure>
        </div>
        <div>
          <p>{name}</p>
          <div className="color-div">
            <p>color:</p>
            <div
              className="color-style"
              style={{ backgroundColor: color, color: color }}
            ></div>
          </div>
        </div>
      </div>

      {/* price */}
      <div className="cart-hide">
        <p>
          <FormatPrice price={price} />
        </p>
      </div>

      {/* quantity */}
      <CartAmountToggle
        amount={amount}
        setIncrease={() => setIncrement(id)}
        setDecrease={() => setDecrement(id)}
      />

      {/* Subtotal */}
      <div className="cart-hide">
        <p>
          <FormatPrice price={price * amount} />
        </p>
      </div>

      {/* Remove */}
      <div>
        <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
      </div>
    </div>
  );
};

export default CartItem;
