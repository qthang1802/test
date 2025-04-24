'use client'
import { useEffect, useState } from 'react';
import { Table, Spin } from 'antd';

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Tên',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Công ty',
      dataIndex: ['company', 'name'],
      key: 'company',
    },
  ];

  return (
    <div style={{ padding: 24 }}>
      <h1>Danh sách người dùng</h1>
      {loading ? <Spin /> : <Table dataSource={data} columns={columns} rowKey="id" />}
    </div>
  );
}
