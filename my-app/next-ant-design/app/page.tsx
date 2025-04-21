import React from 'react';
import { Button } from 'antd';

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold">Home</h1>
            <p className="mt-4 text-lg">Welcome to the home page!</p>
            <Button type="primary" className="mt-4">
                Click Me
            </Button>
        </div>
    );
}

export default Home;