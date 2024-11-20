import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/coins.mp4" autoPlay loop muted />
      <h1>Sparks Banking</h1>
      <p>Convient and easy Banking</p>
      <div
        className="hero-btns"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        {/* <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button> */}
        <Link to="/transfer" className="btn-link">
          Transfer Money
          <i className="far fa-play-circle" />
        </Link>
        <Link to="/create-user" className="btn-link">
          Create User
          <i className="far fa-play-circle" />
        </Link>
        <Link to="/allOurCustomers" className="btn-link">
          All Users
          <i className="far fa-play-circle" />
        </Link>
        <Link to="/transactions" className="btn-link">
          Transactions
          <i className="far fa-play-circle" />
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
