import React from "react";
import { Header } from "antd/es/layout/layout";
import { Button, Flex, Input } from "antd";
import {SettingOutlined,NotificationOutlined} from "@ant-design/icons";
import Title from "antd/es/typography/Title";
import {Avatar} from "antd"
import Search from "antd/es/input/Search";

function AppHeader()  {
    return (
        <Header
        style={{
            background: "#fff",
            padding: 0,
            zIndex: 1,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
        }}
        >
        <div>
            <Title level = {3} style={{ margin: 0, fontSize: "24px", color: "#2288ff", marginLeft: "20px" }}>
                My Wallet
            </Title>
        </div>
        <Search
            size="large" 
            placeholder="Search anything ..." 
            style={{ width: 500 }} 
            enterButton ="Search" 
            />
        <Flex>
            <Button type = "text" icon={<SettingOutlined />} style={{ marginRight: "20px" }} />
            <Button type = "text" icon={<NotificationOutlined />} style={{ marginRight: "20px" }} />
            <Button type = "text" icon={<Avatar src="https://joeschmoe.io/api/v1/random" />} style={{ marginRight: "20px" }} />
            <Button type = "text" style={{ marginRight: "20px" }}>Logout</Button>
        </Flex>
        </Header>
    );


}

export default AppHeader;   