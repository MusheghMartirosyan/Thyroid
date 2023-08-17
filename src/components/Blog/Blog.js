import "./Blog.css"
import vectorImg from "../../images/Vector.png"
import BlogItem from "../BlogItem/BlogItem"

const Blog = () => {
    return(
        <div className="blog">
            <div className="blog-header">
                <h2>Interesting About Thyroid Gland</h2>
                <img src={vectorImg} alt="Vector" />
            </div>
            <div className="blog-items">
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
            </div>
        </div>
    )
}

export default Blog