'use client';
import { Column } from "@ant-design/charts";
import { Card } from "antd";
import React from "react";


const data = [
    { type: '1-3秒', value: 16 },
    { type: '4-10秒', value: 25 },
    { type: '11-30秒', value: 24 },
    { type: '31-60秒', value: 19 },
    { type: '1-3分', value: 22 },
    { type: '3-10分', value: 5 },
    { type: '10-30分', value: 1 },
    { type: '30+分', value: 15 },
  ];

  
const config = {
    data,
    xField: 'type',
    yField: 'value',
    height: 300,
    marginBottom: 0,
  };

function LastEarning() {
    return (
        <Card title="Last Earning" style={{ height: "100%" }}>
            <Column {...config} />
        </Card>
    );
}


export default LastEarning;
