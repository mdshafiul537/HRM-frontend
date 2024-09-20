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
    label: <NavLink to="/administrator/users">User</NavLink>,
  },

  {
    key: "work-sheet",
    icon: <DesktopOutlined />,
    label: <NavLink to="/administrator/work-sheet">User</NavLink>,
  },

  {
    key: "payment",
    label: "Payment",
    icon: <MailOutlined />,
    children: [
      {
        key: "payment-history",
        label: (
          <NavLink to="/administrator/payment-history">Payment History</NavLink>
        ),
      },
    ],
  },
];

const DashboardMenu = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="py-6 px-2 shadow-2xl dark:bg-gray-900 my-1">
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
        defaultOpenKeys={["users"]}
        mode="inline"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
};

export default DashboardMenu;
