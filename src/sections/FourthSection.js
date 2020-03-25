import React from "react";
import "../styles/FourthSection.scss";
import { Kakaochannel } from "../App";
import Fade from "react-reveal/Fade";
import Jump from "react-reveal/Jump";
const FourthSection = ({ index }) => {
  return (
    <>
      <div className="FourthSectionrightSide">
        <Fade right big when={index}>
          <img
            src={require("../images/fourthSection_image1.png")}
            className="image1"
            alt="image1"
          />
        </Fade>
        <Jump top duration={3500} forever={true}>
          <img
            src={require("../images/greenmouse.svg")}
            className="FourthSection-greenmouse"
            alt="FourthSectiongreenmouse"
          />
        </Jump>
      </div>

      <div className="FourthSectionleftSide">
        <Fade left big when={index}>
          <div className="titlesqure">
            <span>신축 후 전량 LH매입</span>
          </div>
        </Fade>
        <Fade left big when={index}>
          <div className="explainsqure">
            <img
              src={require("../images/ellipse.png")}
              className="ellipse"
              alt="chat"
            />
            <div className="h"></div>
            <p>
              LH공사에서 신축물량을 주변시세대로 전량
              <br /> 매입해 미분양 리스크를 완전히 해소했습니
              <br />
              다.
              <br />
              <br />
              희망 시 가구별로 단독, 다가구, 다세대,
              <br /> 다중주택 등 원하는 대로 지을 수도 있습니
              <br />
              다.
            </p>
          </div>
        </Fade>

        <img
          src={require("../images/chat.svg")}
          className="FourthSection-chat"
          alt="FourthSectionchat"
          onClick={Kakaochannel}
        />

        <a className="FourthSection-chat-mobileversion-a" href="tel:16442258">
          <img
            src={require("../images/chat.svg")}
            className="FourthSection-chat-mobileversion"
            alt="FourthSectionchat"
          />
        </a>
      </div>
    </>
  );
};

export default FourthSection;
