import React from "react";
import Logo from "./logo";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>
                About <Logo />
              </h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <p>{props.data ? props.data.paragraph2 : "loading..."}</p>
              <p>{props.data ? props.data.paragraph3 : "loading..."}</p>
              <h3>Vision and Mission</h3>
              <p style={{ marginTop: "-6px" }}>
                <span style={{ fontWeight: 600 }}>Vision: </span>
                We are driven by a vision to be the best provider of what we do
                in the market place.
                <br />
                <span style={{ fontWeight: 600 }}>Mission: </span>
                To deliver top choice and genuine business solutions.
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
