import { getStrDate } from "../helper";

export const workSheetColumns = () => {
  return [
    {
      title: "Task",
      dataIndex: "task",
      key: "task",
    },
    {
      title: "Hours",
      dataIndex: "hours",
      key: "hours",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (date) => {
        return getStrDate(date);
      },
    },
  ];
};

export const workSheetStatusColumns = () => {
  return [
    {
      title: "Employee",
      dataIndex: "userEmail",
      key: "userEmail",
    },
    {
      title: "Task",
      dataIndex: "task",
      key: "task",
    },
    {
      title: "Hours",
      dataIndex: "hours",
      key: "hours",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (date) => {
        return getStrDate(date);
      },
    },
    {
      title: "Status",
      dataIndex: "cheked ",
      key: "cheked",
      render: (status) => {
        return status ? (
          <div className="text-center  font-bold bg-green-700 px-2 py-1 rounded-lg">
            Cheked
          </div>
        ) : (
          <div className="text-center text-gray-200 font-bold bg-red-400 px-2 py-1 rounded-lg">
            Pending
          </div>
        );
      },
    },
  ];
};
