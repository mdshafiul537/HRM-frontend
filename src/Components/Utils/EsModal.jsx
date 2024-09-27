import { Modal } from "antd";
import React from "react";

const EsModal = ({ title, isOpen, onCancel, children, ...props }) => {
  return (
    <>
      <Modal
        title={title}
        centered
        open={isOpen}
        onCancel={() => onCancel(false)}
        width={`90%`}
        footer={""}
      >
        {children}
      </Modal>
    </>
  );
};

export default EsModal;
