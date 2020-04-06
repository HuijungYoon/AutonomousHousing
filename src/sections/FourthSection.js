import React from "react";
import "../styles/FourthSection.scss";
import { Kakaochannel } from "../App";
import Fade from "react-reveal/Fade";
import Jump from "react-reveal/Jump";
import { greenMouseImage, ellipse, chat } from "./CarouselSection";
import {
  FadeInRightBigDiv,
  FadeInLeftBigTitleDiv,
  FadeInLeftBigExplainDiv,
} from "./FirstSection";
const FourthSection = ({ fourthIndex }) => {
  const fourtMainImage =
    "https://firebasestorage.googleapis.com/v0/b/houseproject-ca3a0.appspot.com/o/fourthSection_image1.png?alt=media&token=ebf5a11e-0bd7-48b1-85ef-90cd53c3bf1a";
  return (
    <>
      <div className="FourthSectionrightSide">
        {fourthIndex === true ? (
          <FadeInRightBigDiv>
            <img src={fourtMainImage} className="image1" alt="image1" />
          </FadeInRightBigDiv>
        ) : (
          ""
        )}
        <Jump top duration={3500} forever={true}>
          <img
            src={greenMouseImage}
            className="FourthSection-greenmouse"
            alt="FourthSectiongreenmouse"
          />
        </Jump>
      </div>

      <div className="FourthSectionleftSide">
        {fourthIndex === true ? (
          <FadeInLeftBigTitleDiv>
            <div className="titlesqure">
              <span>신축 후 전량 LH매입</span>
            </div>
          </FadeInLeftBigTitleDiv>
        ) : (
          ""
        )}
        {fourthIndex === true ? (
          <FadeInLeftBigExplainDiv>
            <div className="explainsqure">
              <img src={ellipse} className="ellipse" alt="chat" />
              <div className="h"></div>
              <p>
                LH공사에서 신축물량을 주변시세대로 전량
                <br /> 매입해 미분양 리스크를 완전히 해소했습니다.
                <br />
                <br />
                <br />
                희망 시 가구별로 단독, 다가구, 다세대,
                <br /> 다중주택 등 원하는 대로 지을 수도 있습니다.
                <br />
              </p>
            </div>
          </FadeInLeftBigExplainDiv>
        ) : (
          ""
        )}

        <img
          src={chat}
          className="FourthSection-chat"
          alt="FourthSectionchat"
          onClick={Kakaochannel}
        />

        <a className="FourthSection-chat-mobileversion-a" href="tel:16442258">
          <img
            src={chat}
            className="FourthSection-chat-mobileversion"
            alt="FourthSectionchat"
          />
        </a>
      </div>
    </>
  );
};

export default FourthSection;
