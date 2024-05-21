import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className="container">
      <nav>
        <ul>
          <li>
            <Link to="/" className={styles.link}>
              Mern Stack
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/create" className={styles.link}>
              Create Post
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/all" className={styles.link}>
              All Post
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
