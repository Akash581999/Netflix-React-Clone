import React from "react";
import logo from "../logo.svg";
import "../App.css";

const Header = () => {
  return (
    <div className="main">
      <nav>
        <span>
          <img width="53" src={logo} alt="logo" />
        </span>
        <div>
          <select className="btn" aria-label="Default select example">
            <option selected value="1">
              English
            </option>
            <option value="2">Hindi</option>
          </select>
          <button type="button" className="btn btn-red-sm">
            Sign In
          </button>
        </div>
      </nav>
      <div className="box"></div>
      <div className="hero">
        <span>Enjoy big movies, hit series and more from ₹ 149.</span>
        <span>Join today. Cancel anytime.</span>
        <span>
          Ready to watch? Enter your email to create or restart your membership.
        </span>
        <div className="hero-buttons">
          <input type="text" placeholder="Email Address" />
          <button className="btn btn-red" type="button">
            Get Started &gt;
          </button>
        </div>
      </div>

      <div className="separation"></div>
    </div>
  );
};

export default Header;
