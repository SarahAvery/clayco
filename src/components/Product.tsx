import { useCallback, useState } from "react";

type ProductProps = {
  id: number;
  title: string;
  price: number;
  description: string;
  image?: string;
  onChange: (id: number, quantity: number) => any;
};

const Product = ({ id, title, price, description, image, onChange }: ProductProps) => {
  const [quantity, updateQuantity] = useState(0);

  const onQuantityChange = useCallback(
    (value: number) => {
      updateQuantity(value);
      onChange(id, value);
    },
    [id, onChange]
  );

  const onClick = useCallback(
    (event, operator) => {
      event.preventDefault();
      if (operator === "decrement") {
        onQuantityChange(quantity > 0 ? quantity - 1 : quantity);
        return;
      }
      onQuantityChange(quantity + 1);
    },
    [onQuantityChange, quantity]
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
          <p className="description">{description}</p>
          <div className="quantity">
            <button onClick={(event) => onClick(event, "decrement")} disabled={quantity === 0}>
              -
            </button>
            <input
              type="number"
              min="0"
              max="10"
              value={quantity}
              onChange={(event) => onQuantityChange(Number(event.target.value))}
            ></input>
            <button onClick={(event) => onClick(event, "increment")} disabled={quantity === 10}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
