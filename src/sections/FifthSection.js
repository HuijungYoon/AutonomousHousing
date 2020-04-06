import React from "react";
import "../styles/FifthSection.scss";
import { Kakaochannel } from "../App";
import Fade from "react-reveal/Fade";
import Jump from "react-reveal/Jump";
import { chat, greenMouseImage, ellipse } from "./CarouselSection";
import {
  FadeInLeftBigDiv,
  FadeInRightBigTitleDiv,
  FadeInRightBigExplainDiv,
  FadeInLeftBigExplainDiv,
} from "./FirstSection";
const FifthSection = ({ fifthIndex }) => {
  const fifthMainImage =
    "https://firebasestorage.googleapis.com/v0/b/houseproject-ca3a0.appspot.com/o/fifthSection_image1.png?alt=media&token=7da55445-c627-4171-891a-f24c5d55f7fc";
  return (
    <>
      <div className="FifthSectionleftSide">
        {fifthIndex === true ? (
          <FadeInLeftBigDiv>
            <img src={fifthMainImage} className="image1" alt="image1" />
          </FadeInLeftBigDiv>
        ) : (
          ""
        )}

        <Jump top duration={3500} forever={true}>
          <img
            src={greenMouseImage}
            className="FifthSection-greenmouse"
            alt="FifthSectiongreenmouse"
          />
        </Jump>
      </div>

      <div className="FifthSectionrightSide">
        {fifthIndex === true ? (
          <FadeInRightBigTitleDiv>
            <div className="titlesqure">
              <span>주차장설치기준완화</span>
            </div>
          </FadeInRightBigTitleDiv>
        ) : (
          ""
        )}

        {fifthIndex === true ? (
          <FadeInRightBigExplainDiv>
            <div className="explainsqure">
              <img src={ellipse} className="ellipse" alt="chat" />
              <div className="h" />
              <p>
                인근의 주차장에 주차장 사용권을 확보하는
                <br /> 경우 주차장 총수의 30%까지
                <br /> 주차장 설치 기준을 완화해줍니다.
                <br />
              </p>
            </div>
          </FadeInRightBigExplainDiv>
        ) : (
          ""
        )}

        <img
          src={chat}
          className="FifthSection-chat"
          alt="FifthSectionchat"
          onClick={Kakaochannel}
        />
        <a className="FifthSection-chat-mobileversion-a" href="tel:16442258">
          <img
            src={chat}
            className="FifthSection-chat-mobileversion"
            alt="FifthSectionchat"
          />
        </a>
      </div>
    </>
  );
};

export default FifthSection;
