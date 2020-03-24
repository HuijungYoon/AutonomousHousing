import React from "react";
import "../styles/FinalSection.scss";
import { Kakaochannel } from "../App";
import Bounce from "react-reveal/Bounce";

const FinalSection = ({ index }) => {
  return (
    <>
      <Bounce top cascade when={index}>
        <div className="FinalSection">
          <span>한국자율주택이 함께합니다</span>

          <img
            src={require("../images/finalSection_image1.png")}
            alt="fianlImage"
          />

          <div className="explainsqure">
            <img src={require("../images/ellipse.png")} alt="chat" />
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
          <img
            src={require("../images/footerlogo.png")}
            className="footer-logo"
            alt="logo"
          />
          <span>
            한국자율주택(주) | 대표 김지한 | 사업자등록번호 709-87-01524 |
            대표번호 1644-2258
          </span>
          <span>이메일 jihank21@hanmail.net</span>
          <span>
            서울특별시 구록구 디지털로31길 12 태평양물산 별관2층 넥스트데이 84호
          </span>
          <img
            src={require("../images/chat.svg")}
            className="finalSection-chat"
            alt="finalSection-chat"
            onClick={Kakaochannel}
          />
          <a className="FinalSection-chat-mobileversion-a" href="tel:16442258">
            <img
              src={require("../images/chat.svg")}
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
