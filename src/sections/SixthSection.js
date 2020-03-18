import React from "react";
import "../styles/SixthSection.scss";
import { Kakaochannel } from "../App";
import Fade from "react-reveal/Fade";
const SixthSection = ({ index }) => {
  return (
    <>
      <div className="SixthSectionrightSide">
        <Fade right big when={index}>
          <img
            src={require("../images/sixthSection_image1.png")}
            className="image1"
            alt="image1"
          />
        </Fade>
        <img
          src={require("../images/greenmouse.svg")}
          className="SixthSection-greenmouse"
          alt="SixthSectiongreenmouse"
        />
      </div>

      <div className="SixthSectionleftSide">
        <div className="titlesqure">
          <Fade left big when={index}>
            <span>사업기간 1년</span>
          </Fade>
        </div>
        <div className="explainsqure">
          <Fade left big when={index}>
            <img src={require("../images/ellipse.png")} alt="chat" />
            <p>
              재개발, 재건축 사업의 경우
              <br /> 평균 8~10년이 소요되지만
              <br />
              <br />
              자율주택정비사업은사업신청부터 완공까지
              <br /> 모든사업이평균 1년 내에 완료됩니다.
              <br />
            </p>
          </Fade>
        </div>
        <img
          src={require("../images/chat.svg")}
          className="SixthSection-chat"
          alt="SixthSectionchat"
          onClick={Kakaochannel}
        />
        <a className="SixthSection-chat-mobileversion-a" href="tel:16442258">
          <img
            src={require("../images/chat.svg")}
            className="SixthSection-chat-mobileversion"
            alt="SixthSectionchat"
          />
        </a>
      </div>
    </>
  );
};

export default SixthSection;
