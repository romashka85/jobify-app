import React from "react";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>job<span>tracking</span></h1>
          <p>
            I'm baby vHS man braid organic +1 yuccie whatever butcher 90's distillery mumblecore. Knausgaard master cleanse portland, vexillologist paleo thundercats tbh tumeric fingerstache hot chicken letterpress green juice. Trust fund la croix scenester art party small batch messenger bag vinyl godard gastropub, four dollar toast JOMO.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn login-link">
            Login / Demo User
          </Link>
        </div>
        <div>
          <img src={main} alt="job hunt" className="img main-img" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Landing;
