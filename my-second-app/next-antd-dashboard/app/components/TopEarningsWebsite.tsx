import React from "react";
import { Card, Col, Row } from "antd";

import Image from "next/image";
import {Progress} from "antd";


function TopEarningsWebsite() {
    return (
        <Card title="Top Earnings from website" style={{ height: "100%" }}>
            <Row gutter={[3,3]}>
                <Col span={24} >
                        <Row gutter={8}>
                            <Col span={7}>
                            
                                <Image src="/b.png" alt="Top Earnings" width={150} height={50}/>

                            </Col>
                            <Col span={17}>
                                    <h2>Top Earnings from youtube</h2>
                                    <Progress percent={70} status="active" size ="small"/> 
                            </Col>
                        </Row>
                </Col>
                <Col span={24} >
                        <Row gutter={8}>
                            <Col span={7}>
                            
                                <Image src="/b.png" alt="Top Earnings" width={150} height={50}/>

                            </Col>
                            <Col span={17}>
                                    <h2>Top Earnings from youtube</h2>
                                    <Progress percent={70} status="active" size ="small"/> 
                            </Col>
                        </Row>
                </Col>
                <Col span={24} >
                        <Row gutter={8}>
                            <Col span={7}>
                            
                                <Image src="/b.png" alt="Top Earnings" width={150} height={50}/>

                            </Col>
                            <Col span={17}>
                                    <h2>Top Earnings from youtube</h2>
                                    <Progress percent={70} status="active" size ="small"/> 
                            </Col>
                        </Row>
                </Col>
            </Row>
        </Card>
    );
}

export default TopEarningsWebsite;