import React, { useEffect, useState } from "react";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import "./style.css";
import CarouselSection, { secionOneList } from "./sections/CarouselSection";
import FirstSection from "./sections/FirstSection";
import SecondSection from "./sections/SecondSection";
import ThridSection from "./sections/ThridSection";
import FourthSection from "./sections/FourthSection";
import FifthSection from "./sections/FifthSection";
import SixthSection from "./sections/SixthSection";
import FinalSection from "./sections/FinalSection";

export const Kakaochannel = () => {
  window.Kakao.Channel.chat({
    channelPublicId: "_nUzxhxb" // 카카오톡 채널 홈 URL에 명시된 id로 설정합니다.
  });
};

function App() {
  const [index, setIndex] = useState(null);
  const [last, setLast] = useState(true);
  const onLeave = (origin, destination, direction) => {
    //console.log("Leaving section " + setIndex(destination.index));
    console.log("test start");
    console.log("test start");
    if (direction === "down") {
      setIndex(direction);
    }
  };
  const afterLoad = (origin, destination, direction) => {
    // if (direction === "down") {
    //   setIndex(direction);
    // }

    console.log(index);
  };

  useEffect(() => {
    window.Kakao.init("d9eadaa9148988d3614b4e8c77594f10");
  }, []);

  return (
    <>
      <ReactFullpage
        scrollOverflow={true}
        // navigation={true}
        // slidesNavigation={true}
        slidesNavPosition="bottom"
        // sectionsColor={["orange", "purple", "green"]}
        scrollBar={false}
        onLeave={onLeave}
        controlArrows={false}
        afterLoad={afterLoad}
        // responsiveHeight={1024}
        render={({ state, fullpageApi }) => {
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
              <div className="section">{FirstSection({ index, last })}</div>
              <div className="section">{SecondSection({ index })}</div>
              <div className="section">{ThridSection({ index })}</div>
              <div className="section">{FourthSection({ index })}</div>
              <div className="section">{FifthSection({ index })}</div>
              <div className="section">{SixthSection({ index })}</div>
              <div className="section">{FinalSection({ index })}</div>
            </div>
          );
        }}
      />
    </>
  );
}

export default App;
