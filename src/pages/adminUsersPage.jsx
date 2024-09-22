import { Card, Table } from "antd";
import React, { useState } from "react";
import { employeeAdminCols } from "../utils/cols/employeeCols";

const AdminUsersPage = () => {
  const [employees, setPmployees] = useState([]);
  return (
    <>
      <div className="w-full">
        <Card title="Employee">
          <Table dataSource={employees} columns={employeeAdminCols} />
        </Card>
      </div>
    </>
  );
};

export default AdminUsersPage;
