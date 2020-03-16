import React from "react";
// import "../styles/SecondSection.scss";
const SecondSection = () => {
  return (
    <div>
      <div className="leftSide">
        <img
          src={require("../images/greenmouse.svg")}
          className="greenmouse"
          alt="greenmouse"
        />
      </div>

      <div className="rightSide">
        <img
          src={require("../images/secondsection_image1.png")}
          className="image1"
          alt="image1"
        />

        <img src={require("../images/chat.svg")} className="chat" alt="chat" />
      </div>
    </div>
  );
};

export default SecondSection;
