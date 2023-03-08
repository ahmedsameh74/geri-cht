import './Cheif.css'
import cheif from '../../assets/cheif.png'
import vector from "../../assets/vectors/Vector.svg";
import quote from "../../assets/vectors/quote.svg";
import signature from "../../assets/vectors/Kevin.png";

const Cheif = () => {
  return (
    <div className="section bg grid" id="cheif">
      <div className="right">
        <div className="img-container">
          <img src={cheif} className="img" alt="food" />
        </div>
      </div>
      <div className="left">
        <p className='sm-title'>Chef’s Word</p>
        <img src={vector} alt="" />
        <h2 className='sec-title'>What we believe in</h2>
        <p className='text'>
          <img src={quote} alt="" /> Sit tellus lobortis sed senectus vivamus
          molestie. Condimentum volutpat morbi facilisis quam scelerisque
          sapien. Et, penatibus aliquam amet tellus{" "}
        </p>
        <p>Kevin Luo</p>
        <p>Chef & Founder</p>
        <img src={signature} alt="" />
      </div>
    </div>
  );
}

export default Cheif