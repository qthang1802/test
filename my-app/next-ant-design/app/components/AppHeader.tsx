import React from "react";

import { RadarChartOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";


function AppHeader() {
    return (
        <div className="flex items-center justify-between p-4 bg-white text-black">
        <div className="flex items-center">
            <RadarChartOutlined className ="text-3xl" />
            <h1 className="text-2xl ">Academic</h1>
        </div>
        <div className="flex items-center">
        <Avatar size="large" icon = {<UserOutlined />} className="mr-2" />
        <h1 className="text-2xl ">John Doe</h1> 
        </div>
        </div>
    );
}

export default AppHeader;