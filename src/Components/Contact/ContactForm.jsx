/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import React, { useEffect } from "react";

import { onNotify } from "../../utils/helper";
import { Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
// import {
//   isEmptyOrNull,
//   onNotify,
//   onNotifyError,
//   onNotifySuccess,
// } from "../../utils/helper";

const ContactForm = ({ initValues }) => {
  const [form] = Form.useForm();

  const onSubmit = (values) => {
    onNotify("Yor message is sending...");
    getSendContactMessage(values)
      .then((resp) => {
        if (resp.status) {
          onNotifySuccess(resp.message);
        }
      })
      .catch((error) => {
        onNotifyError("Oops. Message send failed. Please try again later.");
      });
  };

  return (
    <React.Fragment>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full flex flex-col my-7">
          <h2 className="text-2xl font-bold my-6">
            We're here to support you along the way
          </h2>

          <Form onFinish={onSubmit} form={form} className="flex flex-col gap-4">
            <div className="grid grid-cols-2 md:grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 gap-5">
              <div className="flex flex-col gap-3">
                <Form.Item name="firstName">
                  <Input placeholder="First Name" />
                </Form.Item>
              </div>
              <div className="flex flex-col gap-3">
                <Form.Item name="lastName">
                  <Input placeholder="Last Name" />
                </Form.Item>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Form.Item
                name="email"
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!",
                  },
                ]}
              >
                <Input placeholder="Email" />
              </Form.Item>
            </div>

            <div className="flex flex-col gap-3">
              <Form.Item name="message">
                <TextArea placeholder="Message" />
              </Form.Item>
            </div>

            <div className="flex flex-col gap-3">
              <div className="w-full">
                <input
                  type="submit"
                  placeholder="Contact"
                  className={`w-full cursor-pointer input input-bordered input-sm input-success bg-green-600 font-bold text-white py-2`}
                />
              </div>
            </div>
          </Form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactForm;