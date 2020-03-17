import React from "react";
import { bounce } from "react-animations";
import Radium, { StyleRoot } from "radium";
const Test = () => {
  const styles = {
    bounce: {
      animation: "x 10s",
      animationName: Radium.keyframes(bounce, "bounce")
    }
  };
  return (
    <>
      <div className="test" style={styles.bounce}>
        ??
      </div>
    </>
  );
};

export default Test;
