import './FindUs.css'

import vector from "../../assets/vectors/Vector.svg";
import food from "../../assets/food.png";

const FindUs = () => {
  return (
    <div className="section bg grid" id="find">
      <div className="left">
        <div className="header">
          <p className="sm-title">Contact</p>
          <img src={vector} alt="spoon" />
        </div>
        <div className="body">
          <h2 className="sec-title">Find Us</h2>
          <p className="text">
            Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
          </p>
        </div>
        <div className="div">
          <p className="xs-title">Opening Hours</p>
          <p className="sm-para">Mon - Fri: 10:00 am - 02:00 am</p>
          <p className="sm-para">Sat - Sun: 10:00 am - 03:00 am</p>
        </div>

        <button className="btn">Visit Us</button>
      </div>
      <div className="right">
        <div className="img-container">
          <img src={food} alt="" className="img" />
        </div>
      </div>
    </div>
  );
}

export default FindUs