import { Card, Col, Row, Table } from "antd";
import React, { useState } from "react";
import { paymentCols } from "../utils/cols/paymentCols";
import { taskCols } from "../utils/cols/taskCols";

const AllTaskPage = () => {
  const [payments, setPayments] = useState([]);
  return (
    <>
      <div className="w-full">
        <Row>
          <Col span={24}>
            <Card title="Complete Task/Work">
              <Table dataSource={payments} columns={taskCols} />
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default AllTaskPage;
