import React from "react";
import { Menu } from "antd";
import Link from "next/link";


function AppSider() {
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
            defaultSelectedKeys={["1"]}
        />
  );
}



export default AppSider;