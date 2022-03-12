import { useState } from "react";
import Checkout from "./Checkout";

const Confirmation = ({
  values,
  cart,
  subtotal,
  onStepChange,
}: {
  values: any;
  cart: { [key: string]: any };
  subtotal: number;
  onStepChange: (step: number) => void;
}) => {
  type EachItemType = { title: string; price: number; quantity: number; id: number; image?: string };

  const internationalNumberFormat = new Intl.NumberFormat("en-CA");

  const formatCurrancy = (value: number) => {
    return internationalNumberFormat.format(value);
  };

  const [checkedout, setCheckedout] = useState(false);

  const onBack = (e: any) => {
    e.preventDefault();
    onStepChange(2);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    setCheckedout(true);
  };

  const formatCard = `****-****-****-${values.cardnumber.substring(values.cardnumber.length - 4)}`;

  return (
    <>
      {checkedout === true && <Checkout></Checkout>}
      <h1>Order Summary</h1>
      <div className="order-summary container">
        <div className="summary">
          <h2>Order</h2>
          {cart.map(({ title, price, quantity, id, image }: EachItemType) => {
            if (quantity > 0) {
              return (
                <div className="item" key={id}>
                  <img src={image} alt="" />
                  <p>{title}</p>
                  <div>
                    <p>
                      {quantity} x ${price}
                    </p>
                  </div>
                </div>
              );
            } else return null;
          })}
        </div>
        <div className="bill-sub-container">
          <div className="billing-info">
            <h2>Billing</h2>
            <div className="billing-container">
              <div>
                <h3>Name:</h3>
                <p>{values.fullName}</p>
              </div>
              <div>
                <h3>Billing Address:</h3>
                <p>{values.address}</p>
                <p>
                  {values.city} {values.prov.value}, {values.postal}
                </p>
              </div>
              <div>
                <h3>Card:</h3>
                <p>{formatCard}</p>
                <p>
                  {values.expmonth}/{values.expyear}
                </p>
              </div>
            </div>
          </div>
          <div className="subtotal">
            <h2>Total</h2>
            <div className="sub-container">
              <div>
                <h3>Subtotal:</h3>
                <p>${formatCurrancy(subtotal)}</p>
              </div>
              <div>
                <h3>Tax:</h3>
                <p>${formatCurrancy(Math.round((subtotal * 1.13 - subtotal) * 100) / 100)}</p>
              </div>
              <hr />
              <div>
                <h3>Total:</h3>
                <p>${formatCurrancy(Math.round(subtotal * 1.13 * 100) / 100)}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="button-nav-container">
          <button type="submit" className="next step-btn checkout" onClick={onSubmit}>
            Checkout
          </button>
          <button type="button" className="back step-btn" onClick={onBack}>
            Back
          </button>
        </div>
      </div>
    </>
  );
};

export default Confirmation;
