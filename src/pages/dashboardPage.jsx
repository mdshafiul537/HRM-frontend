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
import DashboardMenu from "../Components/Dashboard/DashboardMenu";

const DashboardPage = () => {
  return (
    <div className="flex flex-wrap min-h-screen ">
      <DashboardMenu />
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardPage;
