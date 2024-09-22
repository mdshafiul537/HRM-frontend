import React, { useState } from "react";
import {
  FileUnknownOutlined,
  FileAddOutlined,
  ReconciliationOutlined,
  FileDoneOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";

import { Outlet, NavLink } from "react-router-dom";

import { Button, Menu } from "antd";

const items = [
  {
    key: "work-sheet",
    icon: <FileDoneOutlined />,
    label: <span>Work</span>,
    children: [
      {
        key: "list-add",

        icon: <i className="fa-solid fa-list-check"></i>,
        label: <NavLink to="/administrator/work-sheet">Work Sheet</NavLink>,
      },
      {
        key: "progress",
        icon: <FileUnknownOutlined />,
        label: <NavLink to="/administrator/progress">Progress</NavLink>,
      },
      {
        key: "tasks",
        icon: <FileDoneOutlined />,
        label: <NavLink to="/administrator/tasks">Complete</NavLink>,
      },
    ],
  },

  {
    key: "payment",
    label: "Payment",
    icon: <i className="fa-solid fa-file-invoice-dollar"></i>,
    children: [
      {
        key: "payment-history",

        icon: <i className="fa-solid fa-list-check"></i>,
        label: (
          <NavLink to="/administrator/payment-history">Payment History</NavLink>
        ),
      },
    ],
  },

  {
    key: "user",
    icon: <i className="fa-solid fa-user-tie"></i>,
    label: "User",
    children: [
      {
        key: "employees",
        icon: <i className="fa-solid fa-users"></i>,
        label: <NavLink to="/administrator/employee-list">Employees</NavLink>,
      },
      {
        key: "all-employee",
        icon: <i className="fa-solid fa-users"></i>,
        label: (
          <NavLink to="/administrator/all-employee-list">All Employee</NavLink>
        ),
      },
    ],
  },
  {
    key: "Task",
    icon: <i className="fa-solid fa-cubes-stacked"></i>,
    label: <span>Task</span>,
    children: [
      {
        key: "task-add",

        icon: <i className="fa-solid fa-file-pen"></i>,
        label: <NavLink to="/administrator/tasks-add">Add</NavLink>,
      },

      {
        key: "tasks",
        icon: <i className="fa-solid fa-list"></i>,
        label: <NavLink to="/administrator/tasks">All Task</NavLink>,
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
    <div className="py-6 px-2 text-2xl font-semibold w-full">
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
