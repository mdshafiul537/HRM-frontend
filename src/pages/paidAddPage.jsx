import { Card, Col, Row, Table } from "antd";
import React, { useEffect, useState } from "react";

import useAxiosSecure from "../hooks/useAxiosSecure";
import { useParams } from "react-router-dom";
import LoadingContent from "../Components/Utils/LoadingContent";
import PaymentCard from "../Components/Payment/PaymentCard";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import EmployeeCard from "../Components/Employee/EmployeeCard";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);

const PaidAddPage = () => {
  const params = useParams();

  const [isLoading, setIsLoading] = useState(true);

  const [clientSecret, setClientSecret] = useState("");
  const [employee, setEmployee] = useState(undefined);

  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure
      .post(`/payments/create-intent`, {
        id: params?.id,
        date: new Date(),
      })
      .then((resp) => {
        if (resp.data) {
          if (resp.data.status) {
            setClientSecret(resp.data?.response?.key);
            setEmployee(resp.data?.response?.employee);
          }
        }
      })
      .catch((error) => {
        console.log("create-intent Error, ", error);
      });
  }, []);

  useEffect(() => {
    console.log("clientSecret, ", clientSecret);
    if (!clientSecret) {
      setIsLoading(false);
    }
  }, [clientSecret]);

  const appearance = {
    theme: "stripe",
  };
  // Enable the skeleton loader UI for optimal loading.
  const loader = "auto";

  if (isLoading) {
    return <LoadingContent />;
  }
  console.log("Key ", clientSecret);
  console.log("employee ", employee);
  return (
    <>
      <div className="w-full">
        <Row gutter={[20, 20]}>
          <Col span={10}>
            <EmployeeCard employee={employee} />
          </Col>
          <Col span={14}>
            {clientSecret && (
              <Elements
                options={{ clientSecret, appearance, loader }}
                stripe={stripePromise}
              >
                <PaymentCard clientSecret={clientSecret} />
              </Elements>
            )}
          </Col>
        </Row>
      </div>
    </>
  );
};

export default PaidAddPage;
