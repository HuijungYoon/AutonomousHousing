import React from "react";
import "../styles/ThridSection.scss";
import { Kakaochannel } from "../App";
import Fade from "react-reveal/Fade";
import Jump from "react-reveal/Jump";
import { ellipse, chat, greenMouseImage } from "./CarouselSection";
const ThridSection = ({ index }) => {
  const thridMainImage =
    "https://firebasestorage.googleapis.com/v0/b/houseproject-ca3a0.appspot.com/o/thridsection_image1.png?alt=media&token=58a5cabe-529a-420c-b4d8-488acb722938";
  return (
    <>
      <div className="ThridSectionleftSide">
        <Fade left big when={index}>
          <img src={thridMainImage} className="image1" alt="image1" />
        </Fade>
        <Jump top duration={3500} forever={true}>
          <img
            src={greenMouseImage}
            className="ThridSection-greenmouse"
            alt="ThridSectiongreenmouse"
          />
        </Jump>
      </div>

      <div className="ThridSectionrightSide">
        <Fade right big when={index}>
          <div className="titlesqure">
            <span>용적률 상향</span>
          </div>
        </Fade>

        <Fade right big when={index}>
          <div className="explainsqure">
            <img src={ellipse} className="ellipse" alt="chat" />
            <div className="h"></div>
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
          </div>
        </Fade>

        <img
          src={chat}
          className="ThridSection-chat"
          alt="ThridSectionchat"
          onClick={Kakaochannel}
        />
        <a className="ThridSection-chat-mobileversion-a" href="tel:16442258">
          <img
            src={chat}
            className="ThridSection-chat-mobileversion"
            alt="ThridSectionchat"
          />
        </a>
      </div>
    </>
  );
};

export default ThridSection;
