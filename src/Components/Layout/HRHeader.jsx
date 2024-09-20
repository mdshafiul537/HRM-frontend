import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../Context/ThemeProvider";

import {
  AppstoreAddOutlined,
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  SunOutlined,
  MoonOutlined,
} from "@ant-design/icons";
import { Menu, Col, Row, Layout } from "antd";
const { Header } = Layout;

const HRHeader = () => {
  const { isDark, onThemeChange } = useContext(ThemeContext);

  const [current, setCurrent] = useState("mail");
  const onMenuClick = (e) => {
    setCurrent(e.key);
  };

  const items = [
    {
      label: (
        <NavLink to="/" className="active:text-white ">
          Home
        </NavLink>
      ),
      key: "home",
    },

    {
      label: <NavLink to="/dashboard">Dashboard</NavLink>,
      key: "dashboard",
    },

    {
      label: <NavLink to="/contact-us">Contact Us</NavLink>,
      key: "contact-us",
    },
    {
      key: "Register",
      label: <NavLink to="/register">Register</NavLink>,
    },
    {
      key: "Login",
      label: <NavLink to="/login">Login</NavLink>,
    },
  ];

  return (
    <Header className="w-full bg-slate-700 shadow-md text-white">
      <Col span={24}>
        <Row>
          <Col span={4}>
            <div>
              {" "}
              <AppstoreAddOutlined />
            </div>
          </Col>
          <Col span={20}>
            <Menu
              className="w-full bg-slate-700 text-white font-bold"
              onClick={onMenuClick}
              selectedKeys={[current]}
              mode="horizontal"
              items={items}
            />
          </Col>
        </Row>
      </Col>
    </Header>
  );
};

export default HRHeader;
