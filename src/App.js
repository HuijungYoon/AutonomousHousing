import React, { useEffect } from "react";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import "./style.css";
import CarouselSection, { secionOneList } from "./sections/CarouselSection";
import FirstSection from "./sections/FirstSection";
import SecondSection from "./sections/SecondSection";
function App() {
  const onLeave = (origin, destination, direction) => {
    console.log("Leaving section " + origin.index);
  };
  const afterLoad = (origin, destination, direction) => {
    console.log("After load: " + destination.index);
  };

  return (
    <>
      <ReactFullpage
        scrollOverflow={true}
        // navigation={true}
        slidesNavigation={true}
        slidesNavPosition="bottom"
        // sectionsColor={["orange", "purple", "green"]}
        onLeave={onLeave}
        controlArrows={false}
        afterLoad={afterLoad}
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
              <div className="section">{FirstSection()}</div>
              {/* <div className="section">{SecondSection()}</div> */}
            </div>
          );
        }}
      />
    </>
  );
}

export default App;
