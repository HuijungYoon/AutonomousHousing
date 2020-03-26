import React, { useEffect, useState } from "react";
import "../styles/Carousel.scss";
// import "../style.css";
import cn from "classnames";
import { Row, Col } from "antd";
import Jump from "react-reveal/Jump";
import { LazyLoadImage } from "react-lazy-load-image-component";
import LazyBackground from "../components/common/LazyBackground";
import "react-lazy-load-image-component/src/effects/blur.css";

const sectionOneData = [
  {
    id: 1,
    className: "firstSlide",
    // backgroundImage: require("../images/carousel_image1.png"),
    backgroundImage:
      "https://firebasestorage.googleapis.com/v0/b/houseproject-ca3a0.appspot.com/o/carousel_image1.png?alt=media&token=5be2ef8c-d70a-4d6b-be9a-33865c7c27a3",
    title: "한국자율주택이 함께합니다!",
    subTitle: "오래된 주택을 보유하고 계신다면"
  },
  {
    id: 2,
    className: "secondSlide",
    // backgroundImage: require("../images/carousel_image2.png"),
    backgroundImage:
      "https://firebasestorage.googleapis.com/v0/b/houseproject-ca3a0.appspot.com/o/carousel_image2.png?alt=media&token=3eb7e2a8-8623-43c4-8c5a-df070c8af8cf",
    title: "오래되고 낡은 집, 고민이시죠?",
    subTitle: "오래된 주택을 보유하고 계신다면"
  },
  {
    id: 3,
    className: "thridSlide",
    // backgroundImage: require("../images/carousel_image3.png"),
    backgroundImage:
      "https://firebasestorage.googleapis.com/v0/b/houseproject-ca3a0.appspot.com/o/carousel_image3.png?alt=media&token=b2b6ec01-1ed3-48df-8047-0df0162734b0",
    title: "자율주택정비사업을 신청하세요",
    subTitle: "오래된 주택을 보유하고 계신다면"
  },

  {
    id: 4,
    className: "fourthSlide",
    //  backgroundImage: require("../images/carousel_image4.png"),
    backgroundImage:
      "https://firebasestorage.googleapis.com/v0/b/houseproject-ca3a0.appspot.com/o/carousel_image4.png?alt=media&token=e987988f-a92c-4af4-a194-b34053120f41",
    title: "정부가 사업비를 지원합니다",
    subTitle: "오래된 주택을 보유하고 계신다면"
  }
];

const Kakaochannel = () => {
  window.Kakao.Channel.chat({
    channelPublicId: "_nUzxhxb" // 카카오톡 채널 홈 URL에 명시된 id로 설정합니다.
  });
};
export const secionOneList = sectionOneData.map(x => {
  return (
    <>
      <img
        src={require("../images/chat.svg")}
        onClick={Kakaochannel}
        className="chat"
        alt="chat"
      />

      <a className="CarouselSection-chat-mobileversion-a" href="tel:16442258">
        <img
          src={require("../images/chat.svg")}
          className="CarouselSection-chat-mobileversion"
          alt="Carouselchat"
        />
      </a>

      <Jump top duration={3500} forever={true}>
        <img
          src={require("../images/mousescroll.svg")}
          className="mouseScrollDownR"
          alt="mouse"
        />
      </Jump>
      <LazyBackground
        className={cn("slide", x.className)}
        src={x.backgroundImage}
        placeholder={x.backgroundImage}
      >
        <img src={require("../images/logo.png")} className="logo" alt="logo" />

        <Row>
          <Col span={24}>
            <span className={cn("slid", "title")}>{x.title}</span>
          </Col>
          <Col span={24}>
            <span className={cn("slid", "subtitle")}>{x.subTitle}</span>
          </Col>
          <Col span={24}>
            <img
              style={{ visibility: "hidden" }}
              src={require("../images/mousescroll.svg")}
              className="mouseScrollDown"
              alt="mouse"
            />
          </Col>
          <Col span={24}></Col>
        </Row>
      </LazyBackground>
      {/* <div className={cn("slide", x.className)}>
        <img src={require("../images/logo.png")} className="logo" alt="logo" />

        <Row>
          <Col span={24}>
            <span className={cn("slid", "title")}>{x.title}</span>
          </Col>
          <Col span={24}>
            <span className={cn("slid", "subtitle")}>{x.subTitle}</span>
          </Col>
          <Col span={24}>
            <img
              style={{ visibility: "hidden" }}
              src={require("../images/mousescroll.svg")}
              className="mouseScrollDown"
              alt="mouse"
            />
          </Col>
          <Col span={24}></Col>
        </Row>
      </div> */}
    </>
  );
});

const CarouselSection = () => {
  return <>{secionOneList}</>;
};

export default CarouselSection;
