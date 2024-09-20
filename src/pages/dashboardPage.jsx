import React, { useState } from "react";

import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";

import { Outlet, NavLink } from "react-router-dom";

import { Button, Menu } from "antd";

const items = [
  {
    key: "users",
    icon: <PieChartOutlined />,
    label: "Option 1",
  },
  {
    key: "work-sheet",
    icon: <DesktopOutlined />,
    label: "Option 2",
  },

  {
    key: "payment",
    label: "Payment",
    icon: <MailOutlined />,
    children: [
      {
        key: "payment-history",
        label: <NavLink to="/payment-history">Payment History</NavLink>,
      },
    ],
  },
];

const DashboardPage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div className="flex flex-wrap min-h-screen ">
      <div
        style={{
          width: 256,
        }}
        className="bg-gray-800"
      >
        <Button
          type="primary"
          onClick={toggleCollapsed}
          style={{
            marginBottom: 16,
          }}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          items={items}
        />
      </div>
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardPage;
