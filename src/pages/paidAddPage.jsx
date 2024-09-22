import { Card, Col, Row, Table } from "antd";
import React, { useState } from "react";
import { paymentCols } from "../utils/cols/paymentCols";
import TaskAddForm from "../Components/Dashboard/TaskAddForm";
import { useForm } from "antd/es/form/Form";

const PaidAddPage = () => {
  const [form] = useForm();

  const [payments, setPayments] = useState([]);

  const onSubmitAction = (values) => {
    console.log("TaskAddPage onSubmitAction, ", values);
  };

  const onFailedAction = (values) => {
    console.log("TaskAddPage onFailedAction, ", values);
  };
  return (
    <>
      <div className="w-full">
        <Row>
          <Col span={24}>
            <Card title="Add Task/Work">
              <TaskAddForm
                initForm={form}
                name="Add"
                onAction={onSubmitAction}
                onFailedAction={onFailedAction}
              />
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default PaidAddPage;
