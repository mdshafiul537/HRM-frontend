import React, { useEffect, useState } from "react";
import { Row, Col, Card, Table } from "antd";
import { workSheetColumns } from "../utils/cols/workSheetColumn";
import WorkSheetForm from "../Components/WorkSheet/WorkSheetForm";
import { useForm } from "antd/es/form/Form";
import SelectLayout from "../Components/Dashboard/SelectLayout";
import WorkSheetItems from "../Components/WorkSheet/WorkSheetItems";
import { useLoaderData } from "react-router-dom";
import { isEmptyOrNull, onNotifyError, onNotifySuccess } from "../utils/helper";
import { addWorkSheetItem, getWorkSheet } from "../utils/apiAction";
import LoadingContent from "../Components/Utils/LoadingContent";

const WorkSheetPage = () => {
  const taskResp = useLoaderData();

  const [form] = useForm();
  const [workSheets, setWorkSheets] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [layoutKey, setLayoutKey] = useState("table");
  const [isDataIsLoading, setIsDataIsLoading] = useState(true);

  useEffect(() => {
    loadWorkSheet();
  }, []);

  useEffect(() => {
    console.log("WorkSheet task Resp, ", taskResp);

    if (!isEmptyOrNull(taskResp)) {
      if (taskResp.status) {
        setTasks(taskResp.response);
      }
    }
  }, [taskResp]);

  const onSubmitAction = (values) => {
    values.userEmail = "shafiul2014bd@gmail.com";
    addWorkSheetItem(values)
      .then((resp) => {
        if (!isEmptyOrNull(resp)) {
          if (resp.status) {
            onNotifySuccess("Record added to worksheet");
            loadWorkSheet();
          }
        }
      })
      .catch((err) => {
        onNotifyError(err.message);
      });
  };

  const loadWorkSheet = () => {
    setIsDataIsLoading(true);
    getWorkSheet().then((resp) => {
      if (!isEmptyOrNull(resp)) {
        if (resp.status) {
          setIsDataIsLoading(false);
          setWorkSheets(resp.response);
        }
      }
    });
  };

  const onFailedAction = (error) => {
    console.log("Task Add Error ", error);
  };

  const onChangeLayout = (key) => {
    console.log("Selected Layout ", layoutKey, " Key ", key);
    if (layoutKey !== key) {
      setLayoutKey(key);
    }
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
              tasks={tasks}
            />
          </Col>
          <Col span={24}>
            <Card
              className="shadow-2xl"
              title="All Work Sheet"
              extra={
                <SelectLayout
                  onChangeLayout={onChangeLayout}
                  type={layoutKey}
                />
              }
            >
              {layoutKey === "grid" ? (
                <>
                  {isDataIsLoading ? (
                    <LoadingContent />
                  ) : (
                    <WorkSheetItems items={workSheets} />
                  )}
                </>
              ) : (
                <>
                  {isDataIsLoading ? (
                    <LoadingContent />
                  ) : (
                    <Table
                      className="odd-table"
                      dataSource={workSheets}
                      columns={workSheetColumns()}
                      pagination={{ pageSize: 5 }}
                    />
                  )}
                </>
              )}
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default WorkSheetPage;
