import React from "react";
import "../styles/FirstSection.scss";
import styled, { keyframes } from "styled-components";
import FadeInLeftBig from "react-animations/lib/fadeInLeftBig";
import FadeInRightBig from "react-animations/lib/fadeInRightBig";
import { Kakaochannel, afterLoad } from "../App";
import Fade from "react-reveal/Fade";
import Jump from "react-reveal/Jump";
import { chat, ellipse } from "./CarouselSection";
import { Row, Col } from "antd";

const FadeInLeftBigAnimation = keyframes`${FadeInLeftBig}`;
export const FadeInLeftBigDiv = styled.div`
  animation: 2.5s ${FadeInLeftBigAnimation};
`;
const FadeInRightBigAnimation = keyframes`${FadeInRightBig}`;
export const FadeInRightBigDiv = styled.div`
  animation: 2.5s ${FadeInRightBigAnimation};
`;

const FirstSection = ({ index, last }) => {
  console.log(last);
  const firstMainImage =
    "https://firebasestorage.googleapis.com/v0/b/houseproject-ca3a0.appspot.com/o/firstsection_image1-min.png?alt=media&token=a764b621-c8bc-4a7a-982f-323dd9fd6ed0";
  const greenMouseImage =
    "https://firebasestorage.googleapis.com/v0/b/houseproject-ca3a0.appspot.com/o/greenmouse.svg?alt=media&token=84b3a131-9d97-4c83-84ce-1482d1bc7aa7";

  return (
    <>
      <Row>
        <Col
          md={12}
          sm={24}
          xs={24}
          span={12}
          className="FirstSection-leftSide"
        >
          <img src={firstMainImage} className="image1" alt="image1" />
        </Col>
        <Col md={12} sm={24} xs={24} span={12}>
          hello
        </Col>
      </Row>
    </>
  );
};

export default FirstSection;
