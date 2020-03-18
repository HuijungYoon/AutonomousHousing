import React from "react";
import { Row, Col } from "antd";
import { Kakaochannel } from "../App";
import "../styles/Test.scss";
const Test = () => {
  return (
    <>
      <Row>
        <Col span={12}>
          <h3>span</h3>
        </Col>

        <Col span={12}>
          <h3>hello</h3>
        </Col>

        <Col span={12}>
          <h3>hello</h3>
        </Col>

        <Col span={12}>
          <h3>hello</h3>
        </Col>

        <Col span={12}>
          <h3>hello</h3>
        </Col>
      </Row>
    </>
  );
};

export default Test;
