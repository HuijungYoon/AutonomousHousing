import React, { useEffect } from "react";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import "./style.css";
import CarouselSection, { secionOneList } from "./sections/CarouselSection";

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
          const moveTo = () => {
            // fullpageApi.moveTo(1, 0);
            fullpageApi.moveSlideRight();
          };

          return (
            <div id="fullpage-wrapper">
              <div className="section">{secionOneList}</div>
              <div className="section">
                <h3>Section 3</h3>

                <button onClick={moveTo}>Move top</button>
              </div>
            </div>
          );
        }}
        afterRender={({ fullpageApi }) => {
          setInterval(() => {
            console.log(fullpageApi);
            // fullpageApi.moveTo(1, 0);
          }, 3000);
        }}
      />
    </>
  );
}

export default App;
