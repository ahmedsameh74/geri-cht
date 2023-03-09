import './Blog.css'
import food from "../../assets/food.png";
import quote from "../../assets/vectors/quote.svg";

const Blog = () => {
  return (
    <div className="section Blog">
      <div className="Blog-header">
        <img src={food} alt="" />
      </div>

      <div className="Blog-body">
        <h2 className="sec-title">Blog Title</h2>
        <div className="Blog-details">
          <p className="Blog-athor">Ahmed Sameh</p>
          <p className="Blog-date">9/8/2002</p>
        </div>
        <p className="Blog-text">
          <img src={quote} alt="" /> Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Adipisci optio corporis rem aliquam, repellendus
          quos animi quidem ab asperiores explicabo itaque commodi, dolores
          placeat magni fugiat assumenda incidunt, quae sapiente. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Adipisci optio corporis
          rem aliquam, repellendus quos animi quidem ab asperiores explicabo
          itaque commodi, dolores placeat magni fugiat assumenda incidunt, quae
          sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Adipisci optio corporis rem aliquam, repellendus quos animi quidem ab
          asperiores explicabo itaque commodi, dolores placeat magni fugiat
          assumenda incidunt, quae sapiente. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Adipisci optio corporis rem aliquam,
          repellendus quos animi quidem ab asperiores explicabo itaque commodi,
          dolores placeat magni fugiat assumenda incidunt, quae sapiente.{" "}
          <img src={quote} alt="" />
        </p>
      </div>
    </div>
  );
}

export default Blog