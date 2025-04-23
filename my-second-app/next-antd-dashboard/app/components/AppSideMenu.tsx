'use client'
import { Menu } from "antd";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function AppSideMenu() {
    const pathName = usePathname();
    const [selectedKey, setSelectedKey] = useState("");

    useEffect(() => {
        if (pathName.startsWith("/")) {
            setSelectedKey("1");
        } else if (pathName.startsWith("/wallets")) {
            setSelectedKey("2");
        } else if (pathName.startsWith("/loans")) {
            setSelectedKey("3");
        } else if (pathName.startsWith("/expences")) {
            setSelectedKey("4");
        } else if (pathName.startsWith("/trading")) {
            setSelectedKey("5");
        } else if (pathName.startsWith("/vaults")) {
            setSelectedKey("6");
        } else if (pathName.startsWith("/reports")) {
            setSelectedKey("7");
        } else {
            setSelectedKey("1");
        }
    }, [pathName]);

    const menuItems = [
        { label: <Link href="/">Earnings</Link>, key: "1" },
        { label: <Link href="/wallets">Wallets</Link>, key: "2" },
        { label: <Link href="/loans">Loans</Link>, key: "3" },
        { label: <Link href="/expences">Expences</Link>, key: "4" },
        { label: <Link href="/trading">Trading</Link>, key: "5" },
        { label: <Link href="/vaults">Vaults</Link>, key: "6" },
        { label: <Link href="/reports">Reports</Link>, key: "7" },
    ];

    return (
        <Menu
            items={menuItems}
            mode="inline"
            defaultSelectedKeys={[selectedKey]}
            selectedKeys={[selectedKey]}
        />
    );
}

export default AppSideMenu;