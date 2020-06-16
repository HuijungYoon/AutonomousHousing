import React from "react";
import "../styles/ThridSection.scss";
import { Kakaochannel } from "../App";
import Fade from "react-reveal/Fade";
import Jump from "react-reveal/Jump";
import { ellipse, chat, greenMouseImage } from "./CarouselSection";
import {
  FadeInLeftBigDiv,
  FadeInRightBigTitleDiv,
  FadeInRightBigExplainDiv,
} from "./FirstSection";
const ThridSection = ({ thridIndex }) => {
  const thridMainImage =
    "https://firebasestorage.googleapis.com/v0/b/houseproject-ca3a0.appspot.com/o/thridsection_image1.png?alt=media&token=58a5cabe-529a-420c-b4d8-488acb722938";
  return (
    <>
      <div className="ThridSectionleftSide">
        {thridIndex === true ? (
          <FadeInLeftBigDiv>
            <img src={thridMainImage} className="image1" alt="image1" />
          </FadeInLeftBigDiv>
        ) : (
          ""
        )}
        <Jump top duration={3500} forever={true}>
          <img
            src={greenMouseImage}
            className="ThridSection-greenmouse"
            alt="ThridSectiongreenmouse"
          />
        </Jump>
      </div>

      <div className="ThridSectionrightSide">
        {thridIndex === true ? (
          <FadeInRightBigTitleDiv>
            <div className="titlesqure">
              <span>용적률 상향</span>
            </div>
          </FadeInRightBigTitleDiv>
        ) : (
          ""
        )}
        {thridIndex === true ? (
          <FadeInRightBigExplainDiv>
            <div className="explainsqure">
              <img src={ellipse} className="ellipse" alt="chat" />
              <div className="h"></div>
              <p>
                <br/>
                연면적이나 신축호수의 20% 이상을
                <br />
                신혼부부,청년주택으로 제공할경우
                <br />
                특례법에 따라
                <br />
                용적률이 최대 50% 추가됩니다.
                <br />
                서울특별시의 경우
                <br /> 1종일반주거지역 150% => 200%
                <br />
                2종일반주거지역 200% => 250% 로
                <br />
                상향됩니다.
              </p>
            </div>
          </FadeInRightBigExplainDiv>
        ) : (
          ""
        )}
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
