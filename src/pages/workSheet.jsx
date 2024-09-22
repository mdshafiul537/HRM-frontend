import React, { useState } from "react";
import { Row, Col, Card, Table } from "antd";
import { workSheetColumns } from "../utils/cols/workSheetColumn";
import WorkSheetForm from "../Components/Dashboard/WorkSheetForm";

const WorkSheetPage = () => {
  const [workSheets, setWorkSheets] = useState([]);
  return (
    <>
      <div className="w-full">
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <WorkSheetForm />
          </Col>
          <Col span={24}>
            <Card className="shadow-2xl" title="All Work Sheet">
              <Table dataSource={workSheets} columns={workSheetColumns()} />
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default WorkSheetPage;
