import React from "react";
import "../styles/SecondSection.scss";
import { Kakaochannel } from "../App";
import {
  FadeInRightBigDiv,
  FadeInLeftBigTitleDiv,
  FadeInLeftBigExplainDiv
} from "./FirstSection";
import Fade from "react-reveal/Fade";
import Jump from "react-reveal/Jump";
import { greenMouseImage, chat, ellipse } from "./CarouselSection";
import fadeInRightBig from "react-animations/lib/fadeInRightBig";
const SecondSection = ({ index }) => {
  //console.log(`page1 is ${index}`);
  const secondMainImage =
    "https://firebasestorage.googleapis.com/v0/b/houseproject-ca3a0.appspot.com/o/secondsection_image1.png?alt=media&token=591cf8eb-8a35-4a2d-a724-7d61192099da";
  return (
    <>
      <div className="secondSectionrightSide">
        {/* <Fade right big when={index}>
          <img src={secondMainImage} className="image1" alt="image1" />
        </Fade> */}

        {index === true ? (
          <FadeInRightBigDiv>
            <img src={secondMainImage} className="image1" alt="image1" />
          </FadeInRightBigDiv>
        ) : (
          ""
        )}
        <Jump top duration={3500} forever={true}>
          <img
            src={greenMouseImage}
            className="secondSection-greenmouse"
            alt="secondSectiongreenmouse"
          />
        </Jump>
      </div>

      <div className="secondSectionleftSide">
        {index === true ? (
          <FadeInLeftBigTitleDiv>
            <div className="titlesqure">
              <span>사업비 정부지원</span>
            </div>
          </FadeInLeftBigTitleDiv>
        ) : (
          ""
        )}
        {index === true ? (
          <FadeInLeftBigExplainDiv>
            <div className="explainsqure">
              <img src={ellipse} className="ellipse" alt="chat" />
              <div className="h"></div>
              <p>
                자율주택정비사업의 금융지원
                <br />
                <br /> 융자대상 : 공사비, 이주비, 기존대출상환비 등 전체 사업비
                <br /> 융자기간 : 최장 준공후 10년
                <br /> 지원금리 : 연 1.5%
                <br /> 융자금액 : 총사업비의 70%
                <br /> 예시)10억(토지비용)+15억(건축및기타사업비용)
                <br />= 17.5억 융자가능
              </p>
            </div>
          </FadeInLeftBigExplainDiv>
        ) : (
          ""
        )}
        <img
          src={chat}
          className="secondSection-chat"
          alt="secondSectionchat"
          onClick={Kakaochannel}
        />
        <a className="secondSection-chat-mobileversion-a" href="tel:16442258">
          <img
            src={chat}
            className="secondSection-chat-mobileversion"
            alt="secondSectionchat"
          />
        </a>
      </div>
    </>
  );
};

export default SecondSection;
