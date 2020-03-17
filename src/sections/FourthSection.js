import React from "react";
import "../styles/FourthSection.scss";
import { Kakaochannel } from "../App";
const FourthSection = () => {
  return (
    <>
      <div className="FourthSectionrightSide">
        <img
          src={require("../images/fourthSection_image1.png")}
          className="image1"
          alt="image1"
        />
        <img
          src={require("../images/greenmouse.svg")}
          className="FourthSection-greenmouse"
          alt="FourthSectiongreenmouse"
        />
      </div>

      <div className="FourthSectionleftSide">
        <div className="titlesqure">
          <span>신축 후 전량 LH매입</span>
        </div>
        <div className="explainsqure">
          <img src={require("../images/ellipse.png")} alt="chat" />
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
