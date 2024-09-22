import React from "react";
import {
  Button,
  Card,
  Form,
  Input,
  Select,
  DatePicker,
  InputNumber,
  Row,
  Col,
} from "antd";

const WorkSheetForm = () => {
  return (
    <Card className="w-full shadow-md" title="Work Sheet">
      <Form
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{}}
      >
        <Row>
          <Col span={7}>
            <Form.Item label="Task" name={"task"} className="w-full">
              <Select>
                <Select.Option value="Sales">Sales</Select.Option>
                <Select.Option value="Support">Support</Select.Option>
                <Select.Option value="Content">Content</Select.Option>
                <Select.Option value="Paper-work">Paper-work</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={5}>
            <Form.Item label="Hours" name={"hours"} className="w-full">
              <InputNumber className="w-full" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="DatePicker" name="datePicker">
              <DatePicker />
            </Form.Item>
          </Col>

          <Col span={3}>
            <Form.Item>
              <Button>Add</Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};

export default WorkSheetForm;
