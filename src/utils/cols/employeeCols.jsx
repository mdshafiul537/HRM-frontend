import { FileDoneOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

export const employeeCols = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },

  {
    title: "Verified",
    dataIndex: "verified",
    key: "verified",
  },
  {
    title: "Bank Account",
    dataIndex: "bank_account_no",
    key: "bank_account_no",
  },
  {
    title: "Salary",
    dataIndex: "salary",
    key: "salary",
  },
  {
    title: "Pay",
    dataIndex: "pay",
    key: "pay",
  },
  {
    title: "Details",
    dataIndex: "_id",
    key: "_id",
    render: (id) => {
      return (
        <span>
          <NavLink
            className="text-xl"
            to={`/administrator/employee-list/details/${id}`}
          >
            <FileDoneOutlined />
          </NavLink>
        </span>
      );
    },
  },
];

export const employeeAdminCols = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Designation",
    dataIndex: "designation",
    key: "designation",
  },
  {
    title: "Make HR",
    dataIndex: "Make HR",
    key: "Make HR",
  },

  {
    title: "fire",
    dataIndex: "fire",
    key: "fire",
  },

  {
    title: "Details",
    dataIndex: "_id",
    key: "_id",
    render: (id) => {
      return (
        <span>
          <NavLink
            className="text-xl"
            to={`/administrator/employee-list/details/${id}`}
          >
            <FileDoneOutlined />
          </NavLink>
        </span>
      );
    },
  },
];
