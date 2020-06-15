import React, { useEffect, useState } from "react";
import "../styles/Carousel.scss";
// import "../style.css";
import cn from "classnames";
import { Row, Col } from "antd";
import Jump from "react-reveal/Jump";
import LazyBackground from "../components/common/LazyBackground";
import "react-lazy-load-image-component/src/effects/blur.css";

const mousescroll =
  "https://firebasestorage.googleapis.com/v0/b/houseproject-ca3a0.appspot.com/o/mousescroll.svg?alt=media&token=ed831b7f-b40b-44b4-a918-aaabab254c10";
export const chat =
  "https://firebasestorage.googleapis.com/v0/b/houseproject-ca3a0.appspot.com/o/chat.svg?alt=media&token=e0ae9b8b-cf0d-418d-a8fd-8d94aa59962f";
export const greenMouseImage =
  "https://firebasestorage.googleapis.com/v0/b/houseproject-ca3a0.appspot.com/o/greenmouse.svg?alt=media&token=84b3a131-9d97-4c83-84ce-1482d1bc7aa7";
export const ellipse =
  "https://firebasestorage.googleapis.com/v0/b/houseproject-ca3a0.appspot.com/o/ellipse.png?alt=media&token=ed24cc73-0dfb-4538-a36d-9ccfc04d9ebb";
const logo =
  "https://firebasestorage.googleapis.com/v0/b/freehouse-fae33.appspot.com/o/logo.png?alt=media&token=0eb3571f-ac0d-461f-a3e4-1ca68c84b35d";

const sectionOneData = [
  {
    id: 1,
    className: "firstSlide",

    backgroundImage:
      "https://firebasestorage.googleapis.com/v0/b/freehouse-fae33.appspot.com/o/carousel_image1.png?alt=media&token=ae84c3de-18e9-49fb-984e-3a52b7e7b721",
    title: "한국자율주택이 함께합니다!",
    subTitle: "오래된 주택을 보유하고 계신다면",
  },
  {
    id: 2,
    className: "secondSlide",

    backgroundImage:
      "https://firebasestorage.googleapis.com/v0/b/houseproject-ca3a0.appspot.com/o/carousel_image2.png?alt=media&token=3eb7e2a8-8623-43c4-8c5a-df070c8af8cf",
    title: "오래되고 낡은 집, 고민이시죠?",
    subTitle: "오래된 주택을 보유하고 계신다면",
  },
  {
    id: 3,
    className: "thridSlide",
    backgroundImage:
      "https://firebasestorage.googleapis.com/v0/b/houseproject-ca3a0.appspot.com/o/carousel_image3.png?alt=media&token=b2b6ec01-1ed3-48df-8047-0df0162734b0",
    title: "자율주택정비사업을 신청하세요",
    subTitle: "오래된 주택을 보유하고 계신다면",
  },

  {
    id: 4,
    className: "fourthSlide",
    backgroundImage:
      "https://firebasestorage.googleapis.com/v0/b/houseproject-ca3a0.appspot.com/o/carousel_image4.png?alt=media&token=e987988f-a92c-4af4-a194-b34053120f41",
    title: "정부가 사업비를 지원합니다",
    subTitle: "오래된 주택을 보유하고 계신다면",
  },
];

const Kakaochannel = () => {
  window.Kakao.Channel.chat({
    channelPublicId: "_nUzxhxb", // 카카오톡 채널 홈 URL에 명시된 id로 설정합니다.
  });
};

export const secionOneList = sectionOneData.map((x) => {
  return (
    <>
      <img src={chat} onClick={Kakaochannel} className="chat" alt="chat" />

      <a className="CarouselSection-chat-mobileversion-a" href="tel:16442258">
        <img
          src={chat}
          className="CarouselSection-chat-mobileversion"
          alt="Carouselchat"
        />
      </a>

      <Jump top duration={3500} forever={true}>
        <img src={mousescroll} className="mouseScrollDownR" alt="mouse" />
      </Jump>
      <img src={logo} className="logo" alt="logo" />
      <LazyBackground
        className={cn("slide", x.className)}
        src={x.backgroundImage}
        placeholder={x.backgroundImage}
      >
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
              src={mousescroll}
              className="mouseScrollDown"
              alt="mouse"
            />
          </Col>
          <Col span={24}></Col>
        </Row>
      </LazyBackground>
    </>
  );
});

const CarouselSection = () => {
  return <>{secionOneList}</>;
};

export default CarouselSection;
