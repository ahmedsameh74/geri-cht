import './Footer.css'
import insta from "../../assets/insta.png";
import twi from "../../assets/twi.png";
import face from "../../assets/face.png";

const Footer = () => {
  return (
    <div className="section" id="footer">
      <div className="footer-content">
        <div>
          <p className="sm-title">Contact Us</p>
          <p className="text">9 W 53rd St, New York, NY 10019, USA</p>
          <p className="text">+1 212-344-1230</p>
          <p className="text">+1 212-555-1230</p>
        </div>
        <div>
          <p className="sec-title">Gerícht</p>
          <p className="sm-title">
            "The best way to find yourself is to lose yourself in the service of
            others.”
          </p>
          <div className="imgs">
            <img src={insta} alt="insta" />
            <img src={twi} alt="twi" />
            <img src={face} alt="face" />
          </div>
        </div>
        <div>
          <p className="sm-title">Working Hours</p>

          <p className="text">Monday-Friday: 08:00 am -12:00 am</p>
          <p className="text">Saturday-Sunday: 08:00 am - 02:00 am</p>
        </div>
      </div>

      <div className="text">2021 Gerícht. All Rights reserved.</div>
    </div>
  );
}

export default Footer