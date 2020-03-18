import React from "react";
import "../styles/ThridSection.scss";
import { Kakaochannel } from "../App";
import Fade from "react-reveal/Fade";

const ThridSection = ({ index }) => {
  return (
    <>
      <div className="ThridSectionleftSide">
        <Fade left big when={index}>
          <img
            src={require("../images/thridsection_image1.png")}
            className="image1"
            alt="image1"
          />
        </Fade>
        <img
          src={require("../images/greenmouse.svg")}
          className="ThridSection-greenmouse"
          alt="ThridSectiongreenmouse"
        />
      </div>

      <div className="ThridSectionrightSide">
        <div className="titlesqure">
          <Fade right big when={index}>
            <span>용적률 상향</span>
          </Fade>
        </div>

        <div className="explainsqure">
          <Fade right big when={index}>
            <img src={require("../images/ellipse.png")} alt="chat" />
            <p>
              2018년부터 시행된 &#60;빈집 및 소규모주택정
              <br />
              비에 관한 특례법&#62;에 따라 노후 단독주택 또<br />는 다세대
              밀집지역의 주민들이 서로 합의해
              <br /> 정부의 사업비 지원과 용적률 특혜를 받아
              <br /> 새집을 짓는 사업입니다.
              <br />
              <br /> 인접한 2가구 이상만 합의해 신청하면 사업
              <br />이 가능합니다.
            </p>
          </Fade>
        </div>

        <img
          src={require("../images/chat.svg")}
          className="ThridSection-chat"
          alt="ThridSectionchat"
          onClick={Kakaochannel}
        />
        <a className="ThridSection-chat-mobileversion-a" href="tel:16442258">
          <img
            src={require("../images/chat.svg")}
            className="ThridSection-chat-mobileversion"
            alt="ThridSectionchat"
          />
        </a>
      </div>
    </>
  );
};

export default ThridSection;
