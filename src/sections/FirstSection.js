import React from "react";
import "../styles/FirstSection.scss";

const FirstSection = () => {
  console.log("불러와지나?");
  return (
    <>
      <div className="leftSide">
        <img
          src={require("../images/firstsection_image1.png")}
          className="image1"
          alt="image1"
        />
        <img
          src={require("../images/greenmouse.svg")}
          className="greenmouse"
          alt="greenmouse"
        />
      </div>

      <div className="rightSide">
        <div className="titlesqure">
          <span>자율주택정비사업이란?</span>
        </div>
        <div className="explainsqure">
          <img src={require("../images/ellipse.png")} alt="chat" />
          <p>
            2018년부터 시행된 &#60;빈집 및 소규모주택정
            <br />
            비에 관한 특례법&#62;에 따라 노후 단독주택 또<br />는 다세대
            밀집지역의 주민들이 서로 합의해
            <br /> 정부의 사업비 지원과 용적률 특혜를 받아
            <br /> 새집을 짓는 사업입니다.
            <br />
            <br />
            인접한 2가구 이상만 합의해 신청하면 사업이 가능합니다.
          </p>
        </div>
        <img src={require("../images/chat.svg")} className="chat" alt="chat" />
      </div>
    </>
  );
};

export default FirstSection;
