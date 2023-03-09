import { Link } from "react-router-dom";
import food from "../../assets/food.png";

const BlogCard = () => {
  return (
    <div className="blog-card">
      <div className="blog-img">
        <img src={food} alt="" />
      </div>
      <div className="blog-body">
        <p className="sm-title">blog</p>
        {/* <div className="blog-title"></div> */}
        <p className="blog-text">
          {String(
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur veniam, ea optio enim itaque voluptates. In perspiciatis culpa illum commodi sed modi quia totam architecto eligendi unde iure, eius nesciunt?"
          ).substring(0, 250)}
        </p>
        <Link className="btn" to={`/blog/id`}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
