import './Blogs.css'

import BlogCard from '../../components/BlogCard/BlogCard';

const Blogs = () => {
  return (
    <div className="section Blogs grid">
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
    </div>
  );
}

export default Blogs