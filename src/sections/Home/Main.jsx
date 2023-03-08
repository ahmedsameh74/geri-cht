import './Home.css'
import img from "../../assets/khloe-arledge-ND3edEmzcdQ-unsplash.png";
import vector from "../../assets/vectors/Vector.svg";

const Main = () => {
  return (
    <div className="section grid" id="home">
      <div className="left">
        <p className='sm-title'>Chase the new Flavour</p>
        <img src={vector} alt="" />
        <h2>The key to Fine dining</h2>
        <p className='text'>
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus{" "}
        </p>
        <button>Explore Menu</button>
      </div>
      <div className="right">
        <div className="img-container">
          <img src={img} className="img" alt="food" />
        </div>
      </div>
    </div>
  );
}

export default Main