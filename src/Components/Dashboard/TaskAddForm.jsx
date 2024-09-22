import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";

const TaskAddForm = ({
  onAction,
  name,
  initValues,
  onFailedAction,
  isUpdate = false,
  ...props
}) => {
  return (
    <Form
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      layout="horizontal"
      initialValues={initValues}
      name={name}
      onFinish={onAction}
      onFinishFailed={onFailedAction}
    >
      <Form.Item
        label="Title"
        name={"title"}
        className="w-full"
        rules={[{ require: true, message: "Please input your work title!" }]}
      >
        <Input className="w-full" placeholder="Task Title" />
      </Form.Item>

      <Form.Item
        label="Category"
        name={"category"}
        className="w-full"
        rules={[{ require: true, message: "Please select one category" }]}
      >
        <Select>
          <Select.Option value="Sales">Sales</Select.Option>
          <Select.Option value="Support">Support</Select.Option>
          <Select.Option value="Content">Content</Select.Option>
          <Select.Option value="Paper-work">Paper-work</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item label="Description" name={"description"} className="w-full">
        <TextArea placeholder="" />
      </Form.Item>

      <Form.Item
        label="Start In"
        name={"startDate"}
        rules={[{ require: true, message: "Please, Enter work Start Date" }]}
      >
        <DatePicker disabled={isUpdate} placeholder="Start" />
      </Form.Item>

      <Form.Item
        label="Complete"
        name="completeDate"
        rules={[{ require: true, message: "Please, Enter work Complete Date" }]}
      >
        <DatePicker disabled={!isUpdate} />
      </Form.Item>

      <Form.Item
        label="Due Date"
        name="dueDate"
        rules={[{ require: true, message: "Please, Enter work Due Date" }]}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item label="Employee" name={"employee"} className="w-full">
        <Input className="w-full" placeholder="Employee" />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button
          htmlType="submit"
          className="h-9 bg-green-600 text-lg font-semibold dark:bg-green-700 text-white"
        >
          {isUpdate ? "Update" : "Add"}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default TaskAddForm;
