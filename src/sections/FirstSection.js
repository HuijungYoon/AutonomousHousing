import React, { useState } from "react";
import "../styles/FirstSection.scss";
import styled, { keyframes } from "styled-components";
import FadeInLeftBig from "react-animations/lib/fadeInLeftBig";
import FadeInRightBig from "react-animations/lib/fadeInRightBig";
import { Kakaochannel, afterLoad } from "../App";
import Fade from "react-reveal/Fade";
import Jump from "react-reveal/Jump";
import { chat, ellipse } from "./CarouselSection";

const FadeInLeftBigAnimation = keyframes`${FadeInLeftBig}`;
const FadeInRightBigAnimation = keyframes`${FadeInRightBig}`;
export const FadeInLeftBigDiv = styled.div`
  animation: 1.3s ${FadeInLeftBigAnimation};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FadeInRightBigDiv = styled.div`
  animation: 1.3s ${FadeInRightBigAnimation};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FadeInRightBigTitleDiv = styled.div`
  animation: 1.3s ${FadeInRightBigAnimation};
`;
export const FadeInRightBigExplainDiv = styled.div`
  animation: 1.3s ${FadeInRightBigAnimation};
`;

export const FadeInLeftBigTitleDiv = styled.div`
  animation: 1.3s ${FadeInLeftBigAnimation};
`;
export const FadeInLeftBigExplainDiv = styled.div`
  animation: 1.3s ${FadeInLeftBigAnimation};
`;

const FirstSection = ({ index, isMount, firstIndex }) => {
  const firstMainImage =
    "https://firebasestorage.googleapis.com/v0/b/houseproject-ca3a0.appspot.com/o/firstsection_image1-min.png?alt=media&token=a764b621-c8bc-4a7a-982f-323dd9fd6ed0";
  const greenMouseImage =
    "https://firebasestorage.googleapis.com/v0/b/houseproject-ca3a0.appspot.com/o/greenmouse.svg?alt=media&token=84b3a131-9d97-4c83-84ce-1482d1bc7aa7";

  return (
    <>
      <div className="FirstSectionleftSide">
        {/* <Fade left big when={index}>
          <img src={firstMainImage} className="image1" alt="image1" />
        </Fade> */}
        {firstIndex === true ? (
          <FadeInLeftBigDiv>
            <img src={firstMainImage} className="image1" alt="image1" />
          </FadeInLeftBigDiv>
        ) : (
          ""
        )}
        <Jump top duration={3500} forever={true}>
          <img
            src={greenMouseImage}
            className="FirstSection-greenmouse"
            alt="FirstSectiongreenmouse"
          />
        </Jump>
      </div>

      <div className="FirstSectionrightSide">
        {/* <Fade right big when={index}>
       
          <div className="titlesqure">
            <span>자율주택정비사업이란?</span>
          </div>

          <div className="explainsqure">
            <img src={ellipse} className="ellipse" alt="ellipse" />
            <div className="h"></div>
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
        </Fade> */}
        {firstIndex === true ? (
          <FadeInRightBigTitleDiv>
            <div className="titlesqure">
              <span>자율주택정비사업이란?</span>
            </div>
          </FadeInRightBigTitleDiv>
        ) : (
          ""
        )}
        {firstIndex === true ? (
          <FadeInRightBigExplainDiv>
            <div className="explainsqure">
              <img src={ellipse} className="ellipse" alt="ellipse" />
              <div className="h"></div>
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
          </FadeInRightBigExplainDiv>
        ) : (
          ""
        )}

        <img
          src={chat}
          className="FirstSection-chat"
          alt="FirstSectionchat"
          onClick={Kakaochannel}
        />
        <a className="FirstSection-chat-mobileversion-a" href="tel:16442258">
          <img
            src={chat}
            className="FirstSection-chat-mobileversion"
            alt="FirstSectionchat"
          />
        </a>
      </div>
    </>
  );
};

export default FirstSection;
