import React, { useState } from "react";
import { Row, Col, Card, Table } from "antd";
import { workSheetColumns } from "../utils/cols/workSheetColumn";
import WorkSheetForm from "../Components/Dashboard/WorkSheetForm";
import { useForm } from "antd/es/form/Form";

const WorkSheetPage = () => {
  const [form] = useForm();
  const [workSheets, setWorkSheets] = useState([]);

  const onSubmitAction = (values) => {
    console.log("On Submit Task ", values);
  };

  const onFailedAction = (error) => {
    console.log("Task Add Error ", error);
  };
  return (
    <>
      <div className="w-full">
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <WorkSheetForm
              initForm={form}
              onFailed={onFailedAction}
              onSubmit={onSubmitAction}
            />
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
