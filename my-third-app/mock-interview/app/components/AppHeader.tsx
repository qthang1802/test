import React from "react";
import { Header } from "antd/es/layout/layout";

function AppHeader() {
    return (
        <Header
            style={{
                position: "fixed", // Make the header fixed
                top: 0, // Stick to the top of the viewport
                left: 0, // Align to the left
                width: "100%", // Full width
                background: "white",
                padding: 0,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center", // Vertically center the content
                zIndex: 10, // Ensure it stays above other elements
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", // Add a subtle shadow for better visibility
            }}
        >
            <div
                style={{
                    color: "black",
                    fontSize: "24px",
                    fontWeight: "bold",
                    marginLeft: "20px",
                }}
            >
                My Application
            </div>
            <div
                style={{
                    color: "black",
                    marginRight: "20px",
                    fontSize: "16px",
                }}
            >
                User Profile
            </div>
        </Header>
    );
}

export default AppHeader;