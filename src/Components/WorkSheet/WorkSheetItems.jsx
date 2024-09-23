import React from "react";
import WorkSheetCard from "./WorkSheetCard";
import { Empty } from "antd";

const WorkSheetItems = ({ items = [], ...props }) => {
  return (
    <div className="grid grid-cols-12 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-12 gap-6">
      {items?.length > 0 ? (
        items?.map((item) => {
          return (
            <div className="xs:col-span-1 sm:col-span-1 md:col-span-4 lg:col-span-4">
              <WorkSheetCard key={`sheet-${item._id}`} item={item} />
            </div>
          );
        })
      ) : (
        <div className="min-h-40 w-full text-2xl text-center col-span-12">
          <Empty />
        </div>
      )}
    </div>
  );
};

export default WorkSheetItems;
