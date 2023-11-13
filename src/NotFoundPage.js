import React from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.css";

function NotFoundPage() {
  return (
    <>
      <div className="NotFound">
        <div className="NotFound__inputContainer">
          <Link to="/" style={{ textDecoration: "none" }}>
            <img
              src="https://i.pinimg.com/originals/0d/4b/2b/0d4b2b319c96d857928eb8cd6c86b2d4.png"
              alt="404 Not Found"
              className="NotFound__img"
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default NotFoundPage;
