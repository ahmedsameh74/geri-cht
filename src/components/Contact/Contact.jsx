import vector from "../../assets/vectors/Vector.svg";
import './Contact.css'

const Contact = () => {
  return (
    <div className="Contact section" id="contact">
      <div className="contact-wrapper">
        <div>
          <p className="sm-title">Newsletter</p>
          <img src={vector} alt="vector" />
        </div>
        <div>
          <h3 className="sec-title">Subscribe to Our Newsletter</h3>
          <p className="sm-title" style={{ textAlign: "center" }}>
            And never miss latest Updates!
          </p>
        </div>
        <div className="input">
          <input type="text" placeholder="Enter your email" />
          <button className="btn">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
