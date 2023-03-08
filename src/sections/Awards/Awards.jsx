import './Awards.css'
import vector from "../../assets/vectors/Vector.svg";
import one from "../../assets/vectors/1.png";
import two from "../../assets/vectors/2.png";
import three from "../../assets/vectors/3.png";
import five from "../../assets/vectors/5.png";
import food from "../../assets/food.png";
import G from "../../assets/G-white.png";


const Awards = () => {
  return (
    <div className="grid bg section" id="awards">
      <div className="left">
        <p className="sm-title">Awards & recognition</p>
        <img src={vector} alt="spoon" />
        <h2 className="sec-title">Our Laurels</h2>
        <div className="grid">
          <div className="flex-center">
            <img src={one} alt="" />
            <div className="div">
              <p className="xs-title">Bib Gourmond</p>
              <p className="sm-para">
                Lorem ipsum dolor sit amet, consectetur.
              </p>
            </div>
          </div>
          <div className="flex-center">
            <img src={two} alt="" />
            <div className="div">
              <p className="xs-title">Bib Gourmond</p>
              <p className="sm-para">
                Lorem ipsum dolor sit amet, consectetur.
              </p>
            </div>
          </div>
          <div className="flex-center">
            <img src={three} alt="" />
            <div className="div">
              <p className="xs-title">Bib Gourmond</p>
              <p className="sm-para">
                Lorem ipsum dolor sit amet, consectetur.
              </p>
            </div>
          </div>
          <div className="flex-center">
            <img src={five} alt="" />
            <div className="div">
              <p className="xs-title">Bib Gourmond</p>
              <p className="sm-para">
                Lorem ipsum dolor sit amet, consectetur.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="background">
            <img src={G} alt="g" />
          </div>
          <img src={food} alt="" className="img" />
        </div>
      </div>
    </div>
  );
}

export default Awards