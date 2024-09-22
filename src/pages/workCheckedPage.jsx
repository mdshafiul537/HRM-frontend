import { Card, Col, Row, Table } from "antd";
import React from "react";
import WorkSearch from "../Components/Dashboard/WorkSearch";
import { workSheetColumns } from "../utils/cols/workSheetColumn";

const WorkCheckedPage = () => {
  const onSearchAction = (query) => {
    console.log("One Search Action ", query);
  };

  return (
    <div className="w-full">
      <Row>
        <Col span={24}>
          <Card
            className="shadow-2xl"
            title="Cheked Work Sheet"
            extra={<WorkSearch onSearch={onSearchAction} />}
          >
            <Table dataSource={[]} columns={workSheetColumns()} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default WorkCheckedPage;
