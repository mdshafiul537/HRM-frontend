import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStrDate, isEmptyOrNull } from "../utils/helper";
import {
  CheckSquareOutlined,
  CloseSquareOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";
import { Card } from "antd";
import EsModal from "../Components/Utils/EsModal";
import { UpdateUserForm } from "../Components/Dashboard/UpdateUserForm";
import { useForm } from "antd/es/form/Form";

const AdminUserPage = ({ ...props }) => {
  const respUser = useLoaderData();

  const [user, setUser] = useState({});
  const [isUpdateModal, setIsUpdateModal] = useState(false);

  const [form] = useForm();

  useEffect(() => {
    if (!isEmptyOrNull(respUser)) {
      if (respUser.status) {
        setUser(respUser.response);
      }
    }
  }, [respUser]);

  const onEditUser = () => {
    setIsUpdateModal(true);
  };

  const onEmpolyeeUpdateAction = (values) => {
    console.log("onEmpolyeeUpdateAction ", values);
  };
  const {
    _id,
    name,
    email,
    verifiedEmail,
    autId,
    role,
    picture,
    verified,
    designation,
    create,
  } = user;
  return (
    <>
      <EsModal
        isOpen={isUpdateModal}
        title="User Update"
        onCancel={setIsUpdateModal}
      >
        <UpdateUserForm
          onSubmit={onEmpolyeeUpdateAction}
          initForm={form}
          initValues={user}
        />
      </EsModal>
      <div className="w-full">
        <Card title="Empolyee Details" className="box-border">
          <div className="grid grid-cols-12 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-12">
            <div className="col-span-8 xs:col-span-1 sm:col-span-1 md:col-span-8 grid grid-cols-1 gap-5">
              <h2>Name: {name}</h2>
              <h2>Role: {role}</h2>
              <h2>Designation: {designation}</h2>
              <h2>
                Email: {email} | Verified{" "}
                {verifiedEmail ? (
                  <span className="text-green-700">
                    <CheckSquareOutlined />
                  </span>
                ) : (
                  <span className="text-red-600">
                    {" "}
                    <CloseSquareOutlined />
                  </span>
                )}
              </h2>
              <div className="text-xl">
                Verified{" "}
                <span className={verified ? "text-green-700" : "text-red-600"}>
                  <SafetyCertificateOutlined />
                </span>
              </div>
              <div>Create In: {getStrDate(create)}</div>
              <div className="">
                <button
                  className="bg-green-600 px-6 py-1 text-xl text-white dark:bg-green-900 rounded-md"
                  onClick={onEditUser}
                >
                  <i className="fa-regular fa-pen-to-square"></i>&nbsp;Edit
                </button>
              </div>
            </div>
            <div className="col-span-4 md:col-span-4 xs:col-span-1 sm:col-span-1 xs:order-first sm:order-first md:order-none">
              <div className="w-40 h-40 shadow border flex flex-col justify-center items-center">
                <img
                  src={!isEmptyOrNull(picture) ? picture : "/images/user.png"}
                  alt={name}
                  title={name}
                />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default AdminUserPage;
