import React from "react";
import "../styles/ThridSection.scss";
import styled, { keyframes } from "styled-components";
import FadeInLeftBig from "react-animations/lib/fadeInLeftBig";
import FadeInRightBig from "react-animations/lib/fadeInRightBig";
import { Kakaochannel } from "../App";
const FadeInLeftBigAnimation = keyframes`${FadeInLeftBig}`;
const FadeInLeftBigDiv = styled.div`
  animation: 2.5s ${FadeInLeftBigAnimation};
`;
const FadeInRightBigAnimation = keyframes`${FadeInRightBig}`;
const FadeInRightBigDiv = styled.div`
  animation: 2.5s ${FadeInRightBigAnimation};
`;
const ThridSection = () => {
  return (
    <>
      <div className="ThridSectionleftSide">
        <img
          src={require("../images/thridsection_image1.png")}
          className="image1"
          alt="image1"
        />

        <img
          src={require("../images/greenmouse.svg")}
          className="ThridSection-greenmouse"
          alt="ThridSectiongreenmouse"
        />
      </div>

      <div className="ThridSectionrightSide">
        <div className="titlesqure">
          <span>용적률 상향</span>
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
            <br /> 인접한 2가구 이상만 합의해 신청하면 사업
            <br />이 가능합니다.
          </p>
        </div>

        <img
          src={require("../images/chat.svg")}
          className="ThridSection-chat"
          alt="ThridSectionchat"
          onClick={Kakaochannel}
        />
        <a className="ThridSection-chat-mobileversion-a" href="tel:16442258">
          <img
            src={require("../images/chat.svg")}
            className="ThridSection-chat-mobileversion"
            alt="ThridSectionchat"
          />
        </a>
      </div>
    </>
  );
};

export default ThridSection;
