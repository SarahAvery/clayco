import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import Product from "../Product";
import { CartItem } from "./Cart";

const CartOrder = ({
  subtotal,
  calculateCartTotal,
  products,
  onStepChange,
}: {
  subtotal: number;
  calculateCartTotal: (id: number, quantity: number) => void;
  products: CartItem[];
  onStepChange: (step: number) => void;
}) => {
  const internationalNumberFormat = new Intl.NumberFormat("en-CA");
  const formatSubtotal = internationalNumberFormat.format(subtotal);

  const [next, setNext] = useState(false);

  useEffect(() => {
    subtotal > 0 ? setNext(false) : setNext(true);
  }, [subtotal]);

  const onNext = (e: any) => {
    e.preventDefault();
    onStepChange(2);
  };

  return (
    <>
      <h1>Order</h1>
      <div className="container">
        <div>
          <form>
            {products.map(({ id, ...props }) => (
              <Product key={id} id={id} onChange={calculateCartTotal} {...props} />
            ))}
          </form>
        </div>
        <div className="subtotal-container">
          <div>
            <p>Subtotal:</p>
            <p>${formatSubtotal}</p>
          </div>
        </div>
        <div className="button-nav-container">
          <button type="button" className="next step-btn" disabled={next} onClick={onNext}>
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default CartOrder;
