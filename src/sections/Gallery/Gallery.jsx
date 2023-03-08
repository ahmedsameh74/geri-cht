import './Gallery.css'
import vector from "../../assets/vectors/Vector.svg";
import food from "../../assets/food.png";
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { useRef, useState } from 'react';
import insta from '../../assets/insta.png'

const Gallery = () => {
    const scrollRef = useRef(null)
    const [curr, setCurr] = useState(0)

    const instagram = [
        {img: food},
        {img: food},
        {img: food},
        {img: food},
        {img: food},
        {img: food},
    ]

    const handleRight = () => {
        scrollRef.current.scrollLeft += 100
        // setCurr(curr + 300)
        console.log(scrollRef.current.scrollLeft)
    }
    const handleLeft = () => {
        // setCurr(curr - 300)
        scrollRef.current.scrollLeft -= 100
    }

  return (
    <div className="section flex-center" id="gallery">
      <div className="left">
        <p className="sm-title">Instagram</p>
        <img src={vector} alt="vector" />
        <h3 className="sec-title">Photo Gallery</h3>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
        </p>
        <button className="btn">view More</button>
      </div>
      <div className="right">
        <div className="left-arrow" onClick={handleLeft}>
          <BsArrowLeftShort />
        </div>
        <div className="image" ref={scrollRef} style={{transform: curr && `translateX(${curr}px)`}}>
          {instagram.map((item, index) => {
            return (
              <div className="oneImg" key={index}>
                <img src={item.img} alt="food" />
                <div className="insta">
                  <img src={insta} alt=""/>
                </div>
              </div>
            );
          })}
          {/* <div className="oneImg">
            <img src={food} alt="food" />
          </div>
          <div className="oneImg">
            <img src={food} alt="food" />
          </div>
          <div className="oneImg">
            <img src={food} alt="food" />
          </div>
          <div className="oneImg">
            <img src={food} alt="food" />
          </div> */}
        </div>
        <div className="right-arrow" onClick={handleRight}>
          <BsArrowRightShort />
        </div>
      </div>
    </div>
  );
}

export default Gallery