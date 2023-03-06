import './Home.css'
import img from "../../assets/khloe-arledge-ND3edEmzcdQ-unsplash.png";
import vector from "../../assets/vectors/Vector.svg";

const Home = () => {
  return (
    <div className="section" id="home">
      <div className="left">
        <p>Chase the new Flavour</p>
        <img src={vector} alt="" />
        <h2>The key to Fine dining</h2>
        <p>
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus{" "}
        </p>
        <button>Explore Menu</button>
      </div>
      <div className="right">
        <div className="img-container">
            <img src={img} alt="food" />
        </div>
      </div>
    </div>
  );
}

export default Home