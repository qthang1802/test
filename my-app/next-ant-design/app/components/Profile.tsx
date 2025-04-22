import React from "react";
import { Card, Avatar,Progress,Flex } from "antd";
import Title from "antd/es/typography/Title";

function Profile() {
    const progress = 75; // Example progress percentage
    

    return (
        <Card className="w-full">
            <Flex vertical align="cemter">
            <h2 className="text-lg font-semibold mb-2">Progress</h2>
            <div className="flex items-center justify-center mb-4 flex-col">
                <Avatar
                    size={64}
                    icon={<img src="https://via.placeholder.com/64" alt="Avatar" />}
                    className="mb-4"
                />
                <Title style={{ marginBottom: 3, marginTop: 5 }} >John Doe Smith</Title>
                <h1 className="text-3xl"> Student </h1>
            </div>
            <h2> Front-end</h2>
            <Progress
                percent={progress}
                status="active"
                strokeColor={{
                    '0%': '#108ee9',
                    '100%': '#87d068',
                }}
                showInfo={false}
                className="mb-4"
            />
            <h2> Back-end</h2>
            <Progress
                percent={progress}
                status="active"
                strokeColor={{
                    '0%': '#108ee9',
                    '100%': '#87d068',
                }}
                showInfo={false}
                className="mb-4"
            />
            <h2> Devops</h2>
            <Progress
                percent={progress}
                status="active"
                strokeColor={{
                    '0%': '#108ee9',
                    '100%': '#87d068',
                }}
                showInfo={false}
                className="mb-4"
            />
            <h2> Testings</h2>
            <Progress
                percent={progress}
                status="active"
                strokeColor={{
                    '0%': '#108ee9',
                    '100%': '#87d068',
                }}
                showInfo={false}
                className="mb-4"
            />
            </Flex>

        </Card>
    );
}
export default Profile;