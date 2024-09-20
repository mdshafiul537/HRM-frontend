import React from "react";
import { Outlet } from "react-router-dom";

import HRHeader from "./HRHeader";
import { Breadcrumb, Layout } from "antd";
import HRFooter from "./HRFooter";
const { Content } = Layout;
const Root = () => {
  return (
    <Layout>
      <HRHeader />
      <Content className="min-h-screen">
        <Outlet></Outlet>
      </Content>
      <HRFooter />
    </Layout>
  );
};

export default Root;
