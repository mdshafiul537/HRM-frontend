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

  const [current, setCurrent] = useState("home");
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
      label: <NavLink to="/administrator">Dashboard</NavLink>,
      key: "administrator",
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
    <Col span={24}>
      <Row>
        <Col span={2}>
          <div>
            {" "}
            <AppstoreAddOutlined />
          </div>
        </Col>
        <Col span={20}>
          <Menu
            className="w-full font-bold dark:bg-gray-900"
            onClick={onMenuClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
            theme={isDark ? "dark" : "light"}
          />
        </Col>
        <Col span={2}>
          <div className="w-full flex h-full items-center">
            <div
              className="text-xl h-8 w-8 rounded-full bg-gray-800 text-white flex flex-col justify-center items-center cursor-pointer "
              onClick={onThemeChange}
            >
              {isDark ? <SunOutlined className="" /> : <MoonOutlined />}
            </div>
          </div>
        </Col>
      </Row>
    </Col>
  );
};

export default HRHeader;
