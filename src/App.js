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
import Test from "./sections/Test";

export const Kakaochannel = () => {
  window.Kakao.Channel.chat({
    channelPublicId: "_nUzxhxb" // 카카오톡 채널 홈 URL에 명시된 id로 설정합니다.
  });
};

function App() {
  console.log("hello");
  const [index, setIndex] = useState(null);
  const onLeave = (origin, destination, direction) => {
    console.log("Leaving section " + origin.index);
  };
  const afterLoad = (origin, destination, direction) => {
    console.log("After load: " + setIndex(destination.index));
  };

  useEffect(() => {
    window.Kakao.init("ff6cbca4d658b678425348f6f830831e");
    console.log("호출되었어요");
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
            }, 9000);
          };

          return (
            <div id="fullpage-wrapper">
              <div className="section" onLoad={moveRightAutoPlay}>
                {CarouselSection()}
              </div>
              <div className="section">{FirstSection({ index })}</div>
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
