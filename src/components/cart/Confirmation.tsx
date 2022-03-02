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

  const onBack = (e: any) => {
    e.preventDefault();
    onStepChange(1);
  };

  return (
    <>
      <h1>Order Summary</h1>
      <div className="order-summary container">
        <div className="summary">
          <h2>Order</h2>
          {cart.map(({ title, price, quantity, id, image }: EachItemType) => (
            <div className="item" key={id}>
              <img src={image} alt="" />
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
              <p>${formatCurrancy(subtotal)}</p>
            </div>
            <div>
              <p>Tax:</p>
              <p>${formatCurrancy(Math.round((subtotal * 1.13 - subtotal) * 100) / 100)}</p>
            </div>
            <div>
              <p>Total</p>
              <p>${formatCurrancy(Math.round(subtotal * 1.13 * 100) / 100)}</p>
            </div>
          </div>
        </div>
        <div className="button-nav-container">
          <button type="button" className="back step-btn" onClick={onBack}>
            Back
          </button>
        </div>
      </div>
    </>
  );
};

export default Confirmation;
