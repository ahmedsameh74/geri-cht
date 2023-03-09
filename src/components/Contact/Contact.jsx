import vector from "../../assets/vectors/Vector.svg";
import insta from "../../assets/insta.png";
import twi from "../../assets/twi.png";
import face from "../../assets/face.png";
import './Contact.css'

const Contact = ({showImg}) => {
  return (
    <div className="Contact section" id="contact">
      <div className="contact-wrapper">
        <div>
          <p className="sm-title">Newsletter</p>
          <img src={vector} alt="vector" />
        </div>
        <div>
          <h3 className="sec-title" style={{ textAlign: "center" }}>
            Subscribe to Our Newsletter
          </h3>
          <p className="sm-title" style={{ textAlign: "center" }}>
            And never miss latest Updates!
          </p>
        </div>
        <div className="input">
          <input type="text" placeholder="Enter your email" />
          <button className="btn">Subscribe</button>
        </div>
        {showImg && (
          <div className="imgs">
            <img src={insta} alt="insta" />
            <img src={twi} alt="twi" />
            <img src={face} alt="face" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
