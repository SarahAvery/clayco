const Confirmation = ({ values, cart, subtotal }: { values: any; cart: { [key: string]: any }; subtotal: number }) => {
  type EachItemType = { title: string; price: number; quantity: number };

  console.log(values);

  return (
    <>
      <h1>Order Summary</h1>
      {!values.fullName && <p>please add your bilinging information</p>}
      {values?.fullName && (
        <div className="order-summary container">
          <div className="summary">
            <h2>Order</h2>
            {cart.map(({ title, price, quantity }: EachItemType) => (
              <div className="item">
                <p>{title}</p>
                <div>
                  <p>
                    {quantity} @ ${price}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="billing-info">
            <div>
              <h2>Billing</h2>
              <div>
                Name:
                <p>{values.fullName}</p>
              </div>
              <div>
                Billing Address:
                <p>
                  {values.address}, {values.city} {values.prov.value}, {values.postal}
                </p>
              </div>
            </div>
          </div>
          <div className="subtotal">
            <div className="sub-container">
              <div>
                <p>Subtotal:</p>
                <p>${subtotal}</p>
              </div>
              <div>
                <p>Tax:</p>
                <p>${Math.round((subtotal * 1.13 - subtotal) * 100) / 100}</p>
              </div>
              <div>
                <p>Total</p>
                <p>${Math.round(subtotal * 1.13 * 100) / 100}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Confirmation;
