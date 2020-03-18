import React from "react";
import "../styles/FirstSection.scss";
import styled, { keyframes } from "styled-components";
import FadeInLeftBig from "react-animations/lib/fadeInLeftBig";
import FadeInRightBig from "react-animations/lib/fadeInRightBig";
import { Kakaochannel, afterLoad } from "../App";
import Fade from "react-reveal/Fade";
const FadeInLeftBigAnimation = keyframes`${FadeInLeftBig}`;
export const FadeInLeftBigDiv = styled.div`
  animation: 2.5s ${FadeInLeftBigAnimation};
`;
const FadeInRightBigAnimation = keyframes`${FadeInRightBig}`;
export const FadeInRightBigDiv = styled.div`
  animation: 2.5s ${FadeInRightBigAnimation};
`;

const FirstSection = ({ index }) => {
  console.log("page1");
  console.log(index);

  return (
    <>
      <div className="FirstSectionleftSide">
        <Fade left big when={index}>
          <img
            src={require("../images/firstsection_image1.png")}
            className="image1"
            alt="image1"
          />
        </Fade>
        <img
          src={require("../images/greenmouse.svg")}
          className="FirstSection-greenmouse"
          alt="FirstSectiongreenmouse"
        />
      </div>

      <div className="FirstSectionrightSide">
        <div className="titlesqure">
          <Fade right big when={index}>
            <span>용적률 상향</span>
          </Fade>
        </div>

        <div className="explainsqure">
          <Fade right big when={index}>
            <img
              src={require("../images/ellipse.png")}
              className="ellipse"
              alt="chat"
            />
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
          </Fade>
        </div>

        <img
          src={require("../images/chat.svg")}
          className="FirstSection-chat"
          alt="FirstSectionchat"
          onClick={Kakaochannel}
        />
        <a className="FirstSection-chat-mobileversion-a" href="tel:16442258">
          <img
            src={require("../images/chat.svg")}
            className="FirstSection-chat-mobileversion"
            alt="FirstSectionchat"
          />
        </a>
      </div>
    </>
  );
};

export default FirstSection;
