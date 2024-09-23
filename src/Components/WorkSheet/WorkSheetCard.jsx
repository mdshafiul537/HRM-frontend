import React from "react";
import { getStrDate } from "../../utils/helper";

const WorkSheetCard = ({ item, ...props }) => {
  const { _id, userEmail, task, hours, date } = item;
  return (
    <div className="w-full flex flex-col  gap-4 shadow-xl border border-teal-600 p-4 text-base font-medium rounded-xl">
      <p className="text-lg font-semibold">Task: {task}</p>
      <p>Hours: {hours}</p>
      <p>Employee: {userEmail}</p>
      <p>Date: {getStrDate(date)}</p>
    </div>
  );
};

export default WorkSheetCard;
