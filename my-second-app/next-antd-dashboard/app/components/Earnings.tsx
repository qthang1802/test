import { Card, Col, Row,Flex } from "antd";
import {ArrowRightOutlined, ArrowUpOutlined, DollarOutlined } from "@ant-design/icons";
import React from "react";


function Earnings() {
    return (
    <Row gutter={16} justify="center" align="middle">
    <Col span={6}>
    <Card>
        <h1  className="text-2xl marginBottom: 10px">
              Youtube
        </h1>

        <Flex align="center" justify="space-between" gap={8}>
          

            <h1 className="text-3xl"> <DollarOutlined /> 1257.65</h1>
            <ArrowUpOutlined style={{ color: 'green', fontSize: 24 }} />

        </Flex>
      </Card>
    </Col>

    <Col span={6}>
      <Card>
        <h1  className="text-2xl marginBottom: 10px">
              Facebook
        </h1>
        <Flex align="center" justify="space-between" gap={8}>
          

            <h1 className="text-3xl"> <DollarOutlined /> 1257.65</h1>
            <ArrowUpOutlined style={{ color: 'green', fontSize: 24 }} />

        </Flex>
      </Card>
    </Col>
    <Col span={6}>
    <Card>
        <h1  className="text-2xl marginBottom: 10px">
              Website
        </h1>
        <Flex align="center" justify="space-between" gap={8}>
          

            <h1 className="text-3xl"> <DollarOutlined /> 1257.65</h1>
            <ArrowUpOutlined style={{ color: 'green', fontSize: 24 }} />

        </Flex>
      </Card>
    </Col>
    <Col span={6}>
    <Card>
        <h1  className="text-2xl marginBottom: 10px">
              Buy me a coffee
        </h1>
        <Flex align="center" justify="space-between" gap={8}>
          

            <h1 className="text-3xl"> <DollarOutlined /> 1257.65</h1>
            <ArrowUpOutlined style={{ color: 'green', fontSize: 24 }} />

        </Flex>
      </Card>
    </Col>
  </Row>
    );
}
export default Earnings;