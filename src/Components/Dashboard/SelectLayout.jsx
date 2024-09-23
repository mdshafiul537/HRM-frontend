import React from "react";
import { AppstoreOutlined, BorderBottomOutlined } from "@ant-design/icons";

const SelectLayout = ({ onChangeLayout, type = "table", ...props }) => {
  return (
    <React.Fragment>
      <div className="flex flex-row gap-2 text-xl font-medium">
        <span
          className={`p-2 cursor-pointer ${
            type === "grid" ? " text-teal-500" : ""
          }`}
          onClick={() => {
            onChangeLayout("grid");
          }}
        >
          <i className="fa-solid fa-grip"></i>
        </span>
        <span
          className={`p-2 cursor-pointer ${
            type === "table" ? "text-teal-500 " : ""
          }`}
          onClick={() => {
            onChangeLayout("table");
          }}
        >
          <i className="fa-solid fa-table"></i>
        </span>
      </div>
    </React.Fragment>
  );
};

export default SelectLayout;
