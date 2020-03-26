import React from "react";
import "../styles/FifthSection.scss";
import { Kakaochannel } from "../App";
import Fade from "react-reveal/Fade";
import Jump from "react-reveal/Jump";

const FifthSection = ({ index }) => {
  return (
    <>
      <div className="FifthSectionleftSide">
        <Fade left big when={index}>
          <img
            src={require("../images/fifthSection_image1.png")}
            className="image1"
            alt="image1"
          />
        </Fade>
        <Jump top duration={3500} forever={true}>
          <img
            src={require("../images/greenmouse.svg")}
            className="FifthSection-greenmouse"
            alt="FifthSectiongreenmouse"
          />
        </Jump>
      </div>

      <div className="FifthSectionrightSide">
        <Fade right big when={index}>
          <div className="titlesqure">
            <span>주차장설치기준완화</span>
          </div>
        </Fade>
        <Fade right big when={index}>
          <div className="explainsqure">
            <img
              src={require("../images/ellipse.png")}
              className="ellipse"
              alt="chat"
            />
            <div className="h" />
            <p>
              인근의 주차장에 주차장 사용권을 확보하는
              <br /> 경우 주차장 총수의 30%까지
              <br /> 주차장 설치 기준을 완화해줍니다.
              <br />
            </p>
          </div>
        </Fade>
        <img
          src={require("../images/chat.svg")}
          className="FifthSection-chat"
          alt="FifthSectionchat"
          onClick={Kakaochannel}
        />
        <a className="FifthSection-chat-mobileversion-a" href="tel:16442258">
          <img
            src={require("../images/chat.svg")}
            className="FifthSection-chat-mobileversion"
            alt="FifthSectionchat"
          />
        </a>
      </div>
    </>
  );
};

export default FifthSection;
