import React from "react";
import "../styles/FifthSection.scss";
import { Kakaochannel } from "../App";
import Fade from "react-reveal/Fade";
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
        <img
          src={require("../images/greenmouse.svg")}
          className="FifthSection-greenmouse"
          alt="FifthSectiongreenmouse"
        />
      </div>

      <div className="FifthSectionrightSide">
        <div className="titlesqure">
          <Fade right big when={index}>
            <span>주차장설치기준완화</span>
          </Fade>
        </div>
        <div className="explainsqure">
          <Fade right big when={index}>
            <img src={require("../images/ellipse.png")} alt="chat" />
            <p>
              인근의 주차장에 주차장 사용권을 확보하는
              <br /> 경우 주차장 총수의 30%까지
              <br /> 주차장 설치 기준을 완화해줍니다.
              <br />
            </p>
          </Fade>
        </div>
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
