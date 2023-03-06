import './Cheif.css'
import cheif from '../../assets/cheif.png'
import vector from "../../assets/vectors/Vector.svg";
import quote from "../../assets/vectors/quote.svg";
import signature from "../../assets/vectors/Kevin.png";

const Cheif = () => {
  return (
    <div className="section bg" id="cheif">
      <div className="right">
        <div className="img-container">
          <img src={cheif} alt="food" />
        </div>
      </div>
      <div className="left">
        <p>Chef’s Word</p>
        <img src={vector} alt="" />
        <h2>What we believe in</h2>
        <p>
          <img src={quote} alt="" />{" "}
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus{" "}
        </p>
        <p>Kevin Luo</p>
        <p>Chef & Founder</p>
        <img src={signature} alt="" />
      </div>
    </div>
  );
}

export default Cheif