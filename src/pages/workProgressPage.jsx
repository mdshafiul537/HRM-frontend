import { Card, Col, Row, Table } from "antd";
import React, { useEffect, useState } from "react";
import WorkSearch from "../Components/Dashboard/WorkSearch";
import {
  workSheetColumns,
  workSheetStatusColumns,
} from "../utils/cols/workSheetColumn";
import SelectLayout from "../Components/Dashboard/SelectLayout";
import { key } from "localforage";
import WorkSheetItems from "../Components/WorkSheet/WorkSheetItems";
import { useLoaderData } from "react-router-dom";
import { isEmptyOrNull, onNotifyError } from "../utils/helper";
import { getWorkSheet, getWorkSheetByQuery } from "../utils/apiAction";

const WorkProgressPage = () => {
  const workSheetResp = useLoaderData();

  const [layoutKey, setLayoutKey] = useState("table");
  const [workSheets, setWorkSheets] = useState([]);
  const onSearchAction = (query) => {
    getWorkSheetByQuery(query)
      .then((resp) => {
        if (!isEmptyOrNull(resp)) {
          if (resp.status) {
            setWorkSheets(resp.response);
          }
        }
      })
      .catch((error) => {
        onNotifyError(error.message);
      });
  };

  useEffect(() => {
    if (!isEmptyOrNull(workSheetResp)) {
      if (workSheetResp.status) {
        setWorkSheets(workSheetResp.response);
      }
    }
  }, [workSheetResp]);

  return (
    <div className="w-full">
      <Row>
        <Col span={24}>
          <Card
            className="shadow-xl"
            title="Progress Work Sheet"
            extra={<WorkSearch onSearch={onSearchAction} />}
          >
            <div className="flex flex-row-reverse">
              <div className="flex flex-row">
                <SelectLayout onChangeLayout={setLayoutKey} type={layoutKey} />
              </div>
            </div>
            {layoutKey === "table" ? (
              <Table
                dataSource={workSheets}
                columns={workSheetStatusColumns()}
                pagination={{ pageSize: 5 }}
              />
            ) : (
              <WorkSheetItems items={workSheets} />
            )}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default WorkProgressPage;
