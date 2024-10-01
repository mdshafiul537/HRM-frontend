import { Card, Table } from "antd";
import React, { useEffect, useState } from "react";
import { employeeAdminCols } from "../utils/cols/employeeCols";
import { useLoaderData } from "react-router-dom";
import { isEmptyOrNull } from "../utils/helper";
import useUser from "../hooks/useUser";
import LoadingContent from "../Components/Utils/LoadingContent";

const AdminUsersPage = () => {
  const [respUser, refetch, isLoading] = useUser();
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    if (!isEmptyOrNull(respUser)) {
      if (respUser.status) {
        setEmployees(respUser.response);
      }
    }
  }, [respUser]);

  return (
    <>
      <div className="w-full">
        <Card title="Employee">
          {isLoading ? (
            <LoadingContent />
          ) : (
            <Table dataSource={employees} columns={employeeAdminCols} />
          )}
        </Card>
      </div>
    </>
  );
};

export default AdminUsersPage;
