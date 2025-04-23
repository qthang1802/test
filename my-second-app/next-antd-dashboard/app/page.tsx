import React from "react";
import { Row, Col } from "antd";
import Earnings from "./components/Earnings";
import TopEarningsYoutube from "./components/TopEarningsYoutube";
import TopEarningsWebsite from "./components/TopEarningsWebsite";
import LastEarning from "./components/LastEarning";

export default function Home() {
  return (
    <div>
  `    <Row gutter={[16, 16]} justify="center">
        <Col span={24}>
          <Earnings />
        </Col>
        <Col span={12}>
          <TopEarningsYoutube />
        </Col>
        <Col span={12}>
          <TopEarningsWebsite />
        </Col>
      </Row>
      <LastEarning  />
    </div>
  );
}