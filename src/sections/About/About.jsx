import './About.css'
import G from "../../assets/G.png";
import knive from "../../assets/knive1.svg";
import vector from "../../assets/vectors/Vector.svg";

const About = () => {
  return (
    <div className="section bg flex-center" id="about">
      <div className="background">
        <img src={G} alt="g" />
      </div>
      <div className="about-content">
        <div className="left">
          <h3 className='sec-title'>About us</h3>
          <img src={vector} alt="vector" />
          <p className='text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <button>Know More</button>
        </div>
        <div className="center">
          <img src={knive} alt="" />
        </div>
        <div className="right">
          <h3 className='sec-title'>Our History</h3>
          <img src={vector} alt="vector" />
          <p className='text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
            <button>Know More</button>
        </div>
      </div>
    </div>
  );
}

export default About