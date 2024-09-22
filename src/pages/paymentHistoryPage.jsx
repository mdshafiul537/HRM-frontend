import { Card, Col, Row, Table } from "antd";
import React, { useState } from "react";
import { paymentCols } from "../utils/cols/paymentCols";

const PaymentHistoryPage = () => {
  const [payments, setPayments] = useState([]);
  return (
    <>
      <div className="w-full">
        <Row>
          <Col span={24}>
            <Card title="Payment History">
              <Table dataSource={payments} columns={paymentCols} />
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default PaymentHistoryPage;
