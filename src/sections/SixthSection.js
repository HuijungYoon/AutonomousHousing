import React from "react";
import "../styles/SixthSection.scss";
import { Kakaochannel } from "../App";
import Fade from "react-reveal/Fade";
import Jump from "react-reveal/Jump";
import { greenMouseImage, chat, ellipse } from "./CarouselSection";
const SixthSection = ({ index }) => {
  const sixthMainImage =
    "https://firebasestorage.googleapis.com/v0/b/houseproject-ca3a0.appspot.com/o/sixthSection_image1.png?alt=media&token=916649d1-d7db-497a-a272-274b01be540d";
  return (
    <>
      <div className="SixthSectionrightSide">
        <Fade right big when={index}>
          <img src={sixthMainImage} className="image1" alt="image1" />
        </Fade>
        <Jump top duration={3500} forever={true}>
          <img
            src={greenMouseImage}
            className="SixthSection-greenmouse"
            alt="SixthSectiongreenmouse"
          />
        </Jump>
      </div>

      <div className="SixthSectionleftSide">
        <Fade left big when={index}>
          <div className="titlesqure">
            <span>사업기간 1년</span>
          </div>
        </Fade>
        <Fade left big when={index}>
          <div className="explainsqure">
            <img src={ellipse} className="ellipse" alt="chat" />
            <div className="h" />
            <p>
              재개발, 재건축 사업의 경우
              <br /> 평균 8~10년이 소요되지만
              <br />
              <br />
              자율주택정비사업은사업신청부터 완공까지
              <br /> 모든사업이평균 1년 내에 완료됩니다.
              <br />
            </p>
          </div>
        </Fade>
        <img
          src={chat}
          className="SixthSection-chat"
          alt="SixthSectionchat"
          onClick={Kakaochannel}
        />
        <a className="SixthSection-chat-mobileversion-a" href="tel:16442258">
          <img
            src={chat}
            className="SixthSection-chat-mobileversion"
            alt="SixthSectionchat"
          />
        </a>
      </div>
    </>
  );
};

export default SixthSection;
