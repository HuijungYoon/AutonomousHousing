import React from "react";
import "../styles/SecondSection.scss";
import { Kakaochannel } from "../App";
import { FadeInLeftBigDiv } from "./FirstSection";
import Fade from "react-reveal/Fade";
import Jump from "react-reveal/Jump";
const SecondSection = ({ index }) => {
  return (
    <>
      <div className="secondSectionrightSide">
        <Fade right big when={index}>
          <img
            src={require("../images/secondsection_image1.png")}
            className="image1"
            alt="image1"
          />
        </Fade>
        <Jump top duration={3500} forever={true}>
          <img
            src={require("../images/greenmouse.svg")}
            className="secondSection-greenmouse"
            alt="secondSectiongreenmouse"
          />
        </Jump>
      </div>

      <div className="secondSectionleftSide">
        <Fade left big when={index}>
          <div className="titlesqure">
            <span>사업비 정부지원</span>
          </div>
        </Fade>

        <Fade left big when={index}>
          <div className="explainsqure">
            <img
              src={require("../images/ellipse.png")}
              className="ellipse"
              alt="chat"
            />
            <p>
              자율주택정비사업의 금융지원
              <br /> 융자대상
              <br />
              <br /> 공사비 , 이주비 , 기존대출상환비 등<br />
              <br /> 전체 사업비
              <br /> 융자기간 : 최장 준공후 10년
              <br /> 지원금리 : 연 1.5%
              <br /> 융자금액 : 총사업비의 70%
              <br /> 예시 )10억(토지비용) + 15억(건축및기타사
              <br />
              업비용) = 17.5억 융자가능
            </p>
          </div>
        </Fade>
        <img
          src={require("../images/chat.svg")}
          className="secondSection-chat"
          alt="secondSectionchat"
          onClick={Kakaochannel}
        />
        <a className="secondSection-chat-mobileversion-a" href="tel:16442258">
          <img
            src={require("../images/chat.svg")}
            className="secondSection-chat-mobileversion"
            alt="secondSectionchat"
          />
        </a>
      </div>
    </>
  );
};

export default SecondSection;
