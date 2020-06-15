import React, { useEffect, useState } from "react";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import "./style.css";
import CarouselSection from "./sections/CarouselSection";
import FirstSection from "./sections/FirstSection";
import SecondSection from "./sections/SecondSection";
import ThridSection from "./sections/ThridSection";
import FourthSection from "./sections/FourthSection";
import FifthSection from "./sections/FifthSection";
import SixthSection from "./sections/SixthSection";
import FinalSection from "./sections/FinalSection";

export const Kakaochannel = () => {
  window.Kakao.Channel.chat({
    channelPublicId: "_nUzxhxb", // 카카오톡 채널 홈 URL에 명시된 id로 설정합니다.
  });
};

function App() {
  const [index, setIndex] = useState(false);
  const [firstIndex, setFirstIndex] = useState(false);
  const [secondIndex, setSecondIndex] = useState(false);
  const [thridIndex, setThridIndex] = useState(false);
  const [fourthIndex, setFourthIndex] = useState(false);
  const [fifthIndex, setFifthIndex] = useState(false);
  const [sixthIndex, setSixthIndex] = useState(false);
  const [fianlIndex, setFinalIndex] = useState(false);

  const onLeave = (origin, destination, direction) => {
    //console.log("Leaving section " + setIndex(destination.index));
    if (direction === "down") {
      setIndex(false);
    }
    if (origin.index === 0) {
      setFirstIndex(true);
    }
    if (origin.index === 1) {
      setSecondIndex(true);
    }
    if (origin.index === 2) {
      setThridIndex(true);
    }
    if (origin.index === 3) {
      setFourthIndex(true);
    }
    if (origin.index === 4) {
      setFifthIndex(true);
    }
    if (origin.index === 5) {
      setSixthIndex(true);
    }
    if (origin.index === 6) {
      setFinalIndex(true);
    }
  };
  const afterLoad = (direction) => {
    if (direction === "down") {
      setIndex(true);
    }

    console.log(index);
  };

  useEffect(() => {
    window.Kakao.init("d9eadaa9148988d3614b4e8c77594f10");
  }, []);

  return (
    <>
      <ReactFullpage
        scrollOverflow={true}
        slidesNavPosition="bottom"
        scrollBar={false}
        onLeave={onLeave}
        controlArrows={false}
        afterLoad={afterLoad}
        render={({ fullpageApi }) => {
          const moveRightAutoPlay = () => {
            setInterval(() => {
              fullpageApi.moveSlideRight();
            }, 4000);
          };

          return (
            <div id="fullpage-wrapper">
              <div className="section" onLoad={moveRightAutoPlay}>
                {CarouselSection()}
              </div>
              <div className="section">
                {FirstSection({ index, firstIndex })}
              </div>
              <div className="section">{SecondSection({ secondIndex })}</div>
              <div className="section">{ThridSection({ thridIndex })}</div>
              <div className="section">{FourthSection({ fourthIndex })}</div>
              <div className="section">{FifthSection({ fifthIndex })}</div>
              <div className="section">{SixthSection({ sixthIndex })}</div>
              <div className="section">{FinalSection({ fianlIndex })}</div>
            </div>
          );
        }}
      />
    </>
  );
}

export default App;
