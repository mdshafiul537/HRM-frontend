import { Card, Table } from "antd";
import React, { useState, useEffect } from "react";
import { employeeCols } from "../utils/cols/employeeCols";
import { useLoaderData } from "react-router-dom";
import { isEmptyOrNull } from "../utils/helper";

const UsersPage = () => {
  const respUser = useLoaderData();

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    if (!isEmptyOrNull(respUser)) {
      if (respUser.status) {
        setEmployees(respUser.response);
      }
    }
  }, [respUser]);

  console.log("Users ", employees)
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
