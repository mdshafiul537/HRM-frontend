import { Card, Table } from "antd";
import React, { useEffect, useState } from "react";
import { employeeAdminCols } from "../utils/cols/employeeCols";
import { useLoaderData } from "react-router-dom";
import { isEmptyOrNull } from "../utils/helper";

const AdminUsersPage = () => {
  const respUser = useLoaderData();

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    if (!isEmptyOrNull(respUser)) {
      if (respUser.status) {
        setEmployees(respUser.response);
      }
    }
  }, [respUser]);

  console.log("Reponse employees, respUser, ", respUser);
  console.log("Reponse employees, ", employees);
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
