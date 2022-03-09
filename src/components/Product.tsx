import { useCallback, useState } from "react";
import { CartItem } from "./cart/Cart";

type ProductProps = CartItem & {
  onChange: (id: number, quantity: number) => any;
};

const Product = ({ id, title, price, excerpt, image, quantity: defaultQuantity, onChange }: ProductProps) => {
  const [quantity, updateQuantity] = useState<string>(defaultQuantity?.toString() || "0");

  const onQuantityChange = useCallback(
    (value: string) => {
      updateQuantity(value);
      onChange(id, Number(value));
    },
    [id, onChange]
  );

  const onClick = useCallback(
    (event, operator) => {
      event.preventDefault();
      if (operator === "decrement") {
        onQuantityChange(Number(quantity) === 0 ? "0" : String(Number(quantity) - 1));
        return;
      }
      onQuantityChange(Number(quantity) === 0 ? "1" : String(Number(quantity) + 1));
    },
    [onQuantityChange, quantity]
  );

  const onQuantityBlur = useCallback(
    (value) => {
      onQuantityChange(Number(value) === 0 ? "0" : String(Number(value)));
    },
    [onQuantityChange]
  );

  return (
    <div className="product-container">
      <div className="images">
        <img src={image} alt="" />
      </div>
      <div>
        <label>
          <p className="product-title">
            {title} <span>${price}</span>
          </p>
        </label>
        <div className="product-info">
          <p className="description">{excerpt}</p>
          <div className="quantity">
            <button onClick={(event) => onClick(event, "decrement")} disabled={Number(quantity) === 0}>
              -
            </button>
            <input
              type="number"
              min="0"
              max="10"
              value={quantity}
              onChange={(event) => onQuantityChange(event.target.value)}
              onBlur={(event) => onQuantityBlur(event.target.value)}
            ></input>
            <button onClick={(event) => onClick(event, "increment")} disabled={Number(quantity) === 10}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
