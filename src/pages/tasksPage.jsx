import { Card, Col, Row, Table } from "antd";
import React, { useState } from "react";
import { taskCols } from "../utils/cols/taskCols";

const TaskPage = () => {
  const [payments, setPayments] = useState([]);
  return (
    <>
      <div className="w-full">
        <Row>
          <Col span={24}>
            <Card title="Payment History">
              <Table dataSource={payments} columns={taskCols} />
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default TaskPage;
