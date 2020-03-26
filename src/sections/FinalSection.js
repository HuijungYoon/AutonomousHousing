import React from "react";
import "../styles/FinalSection.scss";
import { Kakaochannel } from "../App";
import Bounce from "react-reveal/Bounce";
import { ellipse, chat } from "./CarouselSection";

const FinalSection = ({ index }) => {
  const finalMainImage =
    "https://firebasestorage.googleapis.com/v0/b/houseproject-ca3a0.appspot.com/o/finalSection_image1.png?alt=media&token=feb54b37-e8bc-4f01-ac49-0648afd8c0e5";
  const footerlogo =
    "https://firebasestorage.googleapis.com/v0/b/houseproject-ca3a0.appspot.com/o/footerlogo.png?alt=media&token=b223b0ae-1e77-401d-82f7-2877178d907c";
  return (
    <>
      <Bounce top cascade when={index}>
        <div className="FinalSection">
          <span>한국자율주택이 함께합니다</span>

          <img src={finalMainImage} className="image1" alt="fianlImage" />

          <div className="explainsqure">
            <img src={ellipse} className="ellipse" alt="ellipse" />
            <div className="h" />
            <p>
              1. 국내유일의 자율주택정비사업 전문업체입니다. <br />
              <br />
              2. 설계, 시공, 법무, 행정 전문가로 구성된 프로젝트팀이 최상의
              솔루션 을 제공하고 신속한 사업진행과 민원해결, 최고
              <br />의 수익을 약속합니다.
              <br />
              <br /> 3. 사업 신청부터 설계, 공사, 기금지원, 이주, 입주까지 전
              과정을 지원 합니다.
              <br />
              <br />
            </p>
          </div>
        </div>
      </Bounce>
      <Bounce top cascade when={index}>
        <div className="footersqure">
          <img src={footerlogo} className="footer-logo" alt="logo" />
          <span>
            한국자율주택(주) | 대표 김지한 | 사업자등록번호 709-87-01524 |
            대표번호 1644-2258
          </span>
          <span>이메일 jihank21@hanmail.net</span>
          <span>
            서울특별시 구록구 디지털로31길 12 태평양물산 별관2층 넥스트데이 84호
          </span>
          <img
            src={chat}
            className="finalSection-chat"
            alt="finalSection-chat"
            onClick={Kakaochannel}
          />
          <a className="FinalSection-chat-mobileversion-a" href="tel:16442258">
            <img
              src={chat}
              className="FinalSection-chat-mobileversion"
              alt="FinalSectionchat"
            />
          </a>
        </div>
      </Bounce>
    </>
  );
};

export default FinalSection;
