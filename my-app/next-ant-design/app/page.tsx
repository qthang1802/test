import React from 'react';
import { Row, Col,Flex } from 'antd';
import {Card} from 'antd';
import {CrownOutlined, DatabaseOutlined, SafetyCertificateOutlined} from '@ant-design/icons';
import CourseTable from './components/CourseTable';
import Profile from './components/Profile';
const Home = () => {
    return (
        <Row gutter={16}>
            <Col span={17}>
                <Row gutter={16}>
                    <Col span ={8}>
                        <Card>
                            <Flex align="center" gap={16} >
                                <div className = "text-2xl font-bold flex items-center justify-center h-12 w-12 !bg-red-200 ">
                                    <CrownOutlined className="text-3xl" />
                                </div>
                                <div>   
                                    <h1 className = "text-3xl">24</h1>
                                    <h2>Enrolled Courses</h2>
                                </div>
                            </Flex>

                        </Card>
                    </Col>
                    <Col span ={8}>
                        <Card>                            
                            <Flex align="center" gap={16} >
                                <div className = "text-2xl font-bold flex items-center justify-center h-12 w-12 !bg-green-200 ">
                                    <DatabaseOutlined className="text-3xl" />
                                </div>
                                <div>   
                                    <h1 className = "text-3xl">56</h1>
                                    <h2>Lessons</h2>
                                </div>
                            </Flex>
                        </Card>
                    </Col>
                    <Col span ={8}>
                        <Card>                            
                            <Flex align="center" gap={16} >
                                <div className = "text-2xl font-bold flex items-center justify-center h-12 w-12 !bg-yellow-200 ">
                                    <SafetyCertificateOutlined className="text-3xl" />
                                </div>
                                <div>   
                                    <h1 className = "text-3xl">17</h1>
                                    <h2>Certifications</h2>
                                </div>
                            </Flex>
                        </Card>
                    </Col>
                </Row>
                <div style={{ marginTop: '16px' }}>
                    <CourseTable />
                </div>
            </Col>
            <Col span={7}>
                <Profile />
            </Col>
        </Row>
    );
}

export default Home;