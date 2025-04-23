import React from "react";
import { Row, Col } from "antd";
import Earnings from "./components/Earnings";
import TopEarnings from "./components/TopEarnings";

export default function Home() {
  return (
    <Row gutter={[16, 16]} justify="center">
      <Col span={24}>
        <Earnings />
      </Col>
      <Col span={24}>
        <TopEarnings />
      </Col>
    </Row>
  );
}