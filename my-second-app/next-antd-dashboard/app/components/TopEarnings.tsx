import React from "react";
import { Card, Col, Row } from "antd";
import { Button, Flex, Input } from "antd";




function TopEarnings() {
    return (
        <Row gutter={16} justify="center" align="middle">
            <Col span={12}>
                <Card title="Top Earnings from youtube" style={{ height: "100%" }}>
                    <h1 className="text-2xl marginBottom: 10px">Top Earnings</h1>
                    <Flex >

                        <p>Your content here</p>
                        <p>Your content here</p>
                    </Flex>
                </Card>
            </Col>
            <Col span={12}>
                <Card>
                    <h1 className="text-2xl marginBottom: 10px">Total Earnings</h1>
                    <h1 className="text-3xl">$20000.00</h1>
                </Card>
            </Col>
        </Row>
    );
}

export default TopEarnings;