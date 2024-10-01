import { Card, Table } from "antd";
import React, { useState, useEffect } from "react";
import { employeeCols } from "../utils/cols/employeeCols";
import { isEmptyOrNull } from "../utils/helper";
import useUser from "../hooks/useUser";
import LoadingContent from "../Components/Utils/LoadingContent";

const UsersPage = () => {
  const [respUser, refetch, isLoading] = useUser();

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    if (!isEmptyOrNull(respUser)) {
      if (respUser.status) {
        setEmployees(respUser.response);
      }
    }
  }, [respUser]);

  console.log("Users ", employees);
  return (
    <>
      <div className="w-full">
        <Card title="Employee">
          {isLoading ? (
            <LoadingContent />
          ) : (
            <Table dataSource={employees} columns={employeeCols} />
          )}
        </Card>
      </div>
    </>
  );
};

export default UsersPage;
