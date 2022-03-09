import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <div className="modal">
      <div className="checkout-modal">
        <div className="confirmed">
          <p>Confirmed</p>
        </div>
        <h2>Your order is complete!</h2>
        <p>You will be receiving a confirmation email with class details.</p>
        <div className="link-container">
          <Link to="/classes" className="step-btn">
            <FontAwesomeIcon icon={faCompass} className="icon"></FontAwesomeIcon>
            <p>Explore more classes</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
