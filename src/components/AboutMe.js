import React, { Component } from "react";

class AboutMe extends Component {
  render() {
    return (
      <div>
        <h1>Hello there!</h1>
        <p>Thanks for visiting, i'll be back soon :)</p>
        <div class="svgcontainer">
          <svg
            class="svgspin"
            width="163"
            height="161"
            viewBox="0 0 163 161"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="2.76538"
              y="83.7593"
              width="118.454"
              height="108.095"
              rx="12.4445"
              transform="rotate(-45 2.76538 83.7593)"
              fill="#FF7676"
              fill-opacity="0.64"
            />
            <rect
              x="37.5805"
              y="39.0425"
              width="43.7863"
              height="43.7863"
              transform="rotate(-45 37.5805 39.0425)"
              stroke="#333333"
              stroke-width="2.30454"
            />
            <rect
              x="37.5805"
              y="113.249"
              width="43.7863"
              height="43.7863"
              transform="rotate(-45 37.5805 113.249)"
              stroke="#333333"
              stroke-width="2.30454"
            />
            <rect
              x="1.62956"
              y="76.3765"
              width="43.7863"
              height="43.7863"
              transform="rotate(-45 1.62956 76.3765)"
              stroke="#333333"
              stroke-width="2.30454"
            />
            <rect
              x="75.3752"
              y="76.3765"
              width="43.7863"
              height="43.7863"
              transform="rotate(-45 75.3752 76.3765)"
              stroke="#333333"
              stroke-width="2.30454"
            />
          </svg>
        </div>
        <p class="black-background">Get in touch: larisaesco@gmail.com</p>
      </div>
    );
  }
}

export default AboutMe;
