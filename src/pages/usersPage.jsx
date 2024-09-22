import { Card, Table } from "antd";
import React, { useState } from "react";
import { employeeCols } from "../utils/cols/employeeCols";

const UsersPage = () => {
  const [employees, setPmployees] = useState([]);
  return (
    <>
      <div className="w-full">
        <Card title="Employee">
          <Table dataSource={employees} columns={employeeCols} />
        </Card>
      </div>
    </>
  );
};

export default UsersPage;
