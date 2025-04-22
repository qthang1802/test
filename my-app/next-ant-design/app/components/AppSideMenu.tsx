'use client';   // This is a client component
import React, { use, useEffect, useState }  from "react";
import Link from "next/link";
import { Menu } from "antd";
import { usePathname } from "next/navigation";

export function AppSideMenu() {
    const pathName = usePathname();
    const [selectedKey, setSelectedKey] = useState([""]);

    useEffect(() => {
        if (pathName.startsWith("/bookmarks")) {
            setSelectedKey(["2"]);
        } else if (pathName.startsWith("/courses")) {
            setSelectedKey(["3"]);
        }
        else if (pathName.startsWith("/tutorials")) {
            setSelectedKey(["4"]);
        }
        else if (pathName.startsWith("/bestpractice")) {
            setSelectedKey(["5"]);
        }
        else if (pathName.startsWith("/certification")) {
            setSelectedKey(["6"]);
        }
        else if (pathName.startsWith("/resources")) {
            setSelectedKey(["7"]);
        }
        else if (pathName.startsWith("/events")) {
            setSelectedKey(["8"]);
        }
        else if (pathName.startsWith("/community")) {
            setSelectedKey(["9"]);
        } 
        else if (pathName ===("/")) {
            setSelectedKey(["1"]);
        }
    }, [pathName]);

    const menuItems = [
        {label:<Link href="/">Home</Link>, key: "1"},
        {label:<Link href="/bookmarks">Bookmarks</Link>, key: "2"},
        {label:<Link href="/courses">Courses</Link>, key: "3"},
        {label:<Link href="/tutorials">Tutorials</Link>, key: "4"},
        {label:<Link href="/bestpractice">BestPractice</Link>, key: "5"},
        {label:<Link href="/certification">Certifications</Link>, key: "6"},
        {label:<Link href="/resources">Resources</Link>, key: "7"},
        {label:<Link href="/events">Events</Link>, key: "8"},
        {label:<Link href="/community">Community</Link>, key: "9"},
    ]
    return (
        <Menu
            mode="inline"
            selectedKeys={selectedKey}
            items={menuItems}
        >
        </Menu>
    );
}
export default AppSideMenu;