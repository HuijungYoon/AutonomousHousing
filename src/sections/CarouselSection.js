import React from "react";
import "../styles/Carousel.scss";
// import "../style.css";
import cn from "classnames";
import { Row, Col } from "antd";

const sectionOneData = [
  {
    id: 1,
    className: "firstSlide",
    backgroundImage: require("../images/carousel_image1.png"),
    title: "한국자율주택이 함께합니다!",
    subTitle: "오래된 주택을 보유하고 계신다면"
  },
  {
    id: 2,
    className: "secondSlide",
    backgroundImage: require("../images/carousel_image2.png"),
    title: "오래되고 낡은 집, 고민이시죠?",
    subTitle: "오래된 주택을 보유하고 계신다면"
  },
  {
    id: 3,
    className: "thridSlide",
    backgroundImage: require("../images/carousel_image3.png"),
    title: "자율주택정비사업을 신청하세요",
    subTitle: "오래된 주택을 보유하고 계신다면"
  },

  {
    id: 4,
    className: "fourthSlide",
    backgroundImage: require("../images/carousel_image4.png"),
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

      <div className={cn("slide", x.className)}>
        <img src={require("../images/logo.png")} className="logo" alt="logo" />
        <img
          src={require("../images/mousescroll.svg")}
          className="mouseScrollDownR"
          alt="mouse"
        />
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
      </div>
    </>
  );
});

const CarouselSection = () => {
  return <>{secionOneList}</>;
};

export default CarouselSection;
