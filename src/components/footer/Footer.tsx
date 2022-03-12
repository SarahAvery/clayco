import FooterStyled from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <FooterStyled>
      <div className="container">
        <div>
          <p className="title">Follow us on</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faInstagram} className="icon" />
          <FontAwesomeIcon icon={faTwitter} className="icon" />
          <FontAwesomeIcon icon={faYoutube} className="icon" />
          <FontAwesomeIcon icon={faFacebook} className="icon" />
        </div>
        <div className="para">
          <p>Privacy Policy</p>
        </div>
      </div>
      <div className="logo">
        &copy;Clay<span>.</span>co
      </div>
    </FooterStyled>
  );
};

export default Footer;
