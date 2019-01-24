import React, { Component } from "react";

class AboutMe extends Component {
  render() {
    return (
      <div>
        <h1>Hello there!</h1>
        <h3>Thanks for visiting my site.</h3>
        <h4>
          I’m currently working on a new design, you can{" "}
          <span className="yellowBlock">
            <a className="yellowAnchor" href="mailto:larisaesco@gmail.com">
              email me
            </a>
          </span>{" "}
          or check out my{" "}
          <span className="yellowBlock">
            <a
              className="yellowAnchor"
              href="https://www.instagram.com/larinena/"
              target="_blank"
            >
              instagram.
            </a>
          </span>
        </h4>
        <svg
          class="fixed"
          width="350"
          height="200"
          viewBox="0 0 450 256"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M445.084 272C448.305 256.842 450 241.119 450 225C450 100.736 349.264 0 225 0C100.736 0 0 100.736 0 225C0 241.119 1.69494 256.842 4.91631 272H445.084Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="225"
              y1="0"
              x2="225"
              y2="450"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FBB03B" />
              <stop offset="0.484968" stop-color="#FEC8AB" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }
}

export default AboutMe;
