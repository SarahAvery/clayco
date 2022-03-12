import ContactStyled from "./Styles";

const ContactPage = () => {
  return (
    <ContactStyled>
      <h2>Contact Us</h2>
      <div className="container">
        <div className="contact">
          <p>
            <span>Location:</span>1345 Fairview Rd West
          </p>
          <p>
            <span>Phone:</span>(416) 639-4784
          </p>
          <p>
            <span>Email:</span> contact@clayco.com
          </p>
        </div>
        <div className="hours-container">
          <div className="hours">
            <div>
              <p className="days">Monday-Thursday:</p>
              <p className="hour">10am - 7pm</p>
            </div>
            <div>
              <p className="days">Friday:</p>
              <p className="hour">10am - 9pm</p>
            </div>
            <div>
              <p className="days">Saturday:</p>
              <p className="hour">11am - 6pm</p>
            </div>
            <div>
              <p className="days">Sunday:</p>
              <p className="hour">11am - 5pm</p>
            </div>
          </div>
        </div>
      </div>
    </ContactStyled>
  );
};
export default ContactPage;
