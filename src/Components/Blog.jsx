import React from "react";
import "./CSS/blog.scss";
import { Link } from "react-router-dom";
import image1 from "./Assets/blog-bottom-1.jpg";
import image2 from "./Assets/blog-bottom-2.jpg";
import image3 from "./Assets/blog-bottom-3.jpg";
import image4 from "./Assets/blog-bottom-4.jpg";


export default function Blog() {
  return (
    <div className="blog-home">
      <div className="blog-container">
        <div className="background-blog">
          <p className="line-bright">Our blog</p>
          <h1 className="line-bright">Blog Articles</h1>
          <div>
            <Link
              className="line-bright"
              style={{ color: "white", textDecoration: "none" }}
            >
              Home
            </Link>
            <span className="line-bright"> / Our blog</span>
          </div>
        </div>
      </div>
      <div className="bottom-blog">
        <div className="d-flex justify-content-center gap-5 p-5">
          <div>
            <img src={image1} height={330} alt="blog-1" />
          </div>
          <div>
            <img src={image2} height={330} alt="blog-2" />
          </div>
        </div>
        <div className="d-flex justify-content-center gap-5 p-5">
        <div>
        <img src={image3} height={330} alt="blog-3" />
      </div>
      <div>
        <img src={image4} height={330} alt="blog-4" />
      </div>
        </div>
      </div>
    </div>
  );
}
