import React from "react";
import "../styles/Carousel.scss";
import "../style.css";
import cn from "classnames";
// import Scroll from "../images/mousescroll.svg";
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

// export const secionOneList = sectionOneData.map(x => {
//   return (
//     <>
//       <div className={cn("slide", x.className)}>
//         <img src={require("../images/logo.png")} className="logo" alt="logo" />
//         <div className="slide-flex">
//           <span className={cn("slid", "title")}>{x.title}</span>
//           <span className={cn("slid", "subtitle")}>{x.subTitle}</span>
//           <img
//             src={require("../images/mousescroll.svg")}
//             className="mouseScrollDown"
//             alt="mouse"
//           />
//           <img
//             src={require("../images/chat.svg")}
//             className="chat"
//             alt="chat"
//           />
//           {/* <Scroll /> */}
//         </div>
//       </div>
//     </>
//   );
// });
export const secionOneList = sectionOneData.map(x => {
  return (
    <>
      <div className={cn("slide", x.className)}>
        <img src={require("../images/logo.png")} className="logo" alt="logo" />
        <Row>
          <Col>
            <span className={cn("slid", "title")}>{x.title}</span>
          </Col>
          <Col>
            <span className={cn("slid", "subtitle")}>{x.subTitle}</span>
          </Col>
          <Col>
            <img
              src={require("../images/mousescroll.svg")}
              className="mouseScrollDown"
              alt="mouse"
            />
          </Col>
        </Row>
        <img src={require("../images/chat.svg")} className="chat" alt="chat" />
      </div>
    </>
  );
});

const CarouselSection = () => {
  return <>{secionOneList}</>;
};

export default CarouselSection;
