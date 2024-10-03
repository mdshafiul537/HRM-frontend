import {
  CardElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { isEmptyOrNull } from "../../utils/helper";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Spin } from "antd";

const PaymentCard = ({ ...props }) => {
  const params = useParams();

  const stripe = useStripe();
  const elements = useElements();

  const axiosSecure = useAxiosSecure();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [clientSecret, setClientSecret] = useState("");
  const [employee, setEmployee] = useState(undefined);

  const handleError = (error) => {
    console.log("error, ", error);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    // Trigger form validation and wallet collection
    const { error: submitError } = await elements.submit();
    if (submitError) {
      //   handleError(submitError);
      console.log("submitError ", submitError);
      return;
    }

    const respIntent = await axiosSecure.post(`/payments/create-intent`, {
      id: params?.id,
      date: new Date(),
    });

    if (!isEmptyOrNull(respIntent.data)) {
      setClientSecret(respIntent.data?.response?.key);
      setEmployee(respIntent.data?.response?.employee);
    }

    // Use the clientSecret and Elements instance to confirm the setup
    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      clientSecret: respIntent.data?.response?.key,
      confirmParams: {
        return_url: `http://localhost:5173/administrator/payments/paid-complete`,
      },
      // Uncomment below if you only want redirect for redirect-based payments
      redirect: "if_required",
    });

    if (error) {
      handleError(error);
    }

    if (paymentIntent) {
      setIsLoading(false);
      console.log("paymentIntent ", paymentIntent);
    }
    return;
  };

  const paymentElementOptions = {
    layout: "tabs",
  };

  return (
    <>
      <form
        id="payment-form"
        onSubmit={handleSubmit}
        className="flex flex-col gap-5"
      >
        <PaymentElement id="payment-element" options={paymentElementOptions} />
        <button
          disabled={isLoading || !stripe || !elements}
          id="submit"
          className="self-start h-8"
        >
          <div
            id="button-text"
            className="  text-white flex flex-row justify-center items-center"
          >
            {isLoading ? (
              <div className="spinner " id="spinner">
                <Spin size="small" />
              </div>
            ) : (
              <span className="font-medium h-full w-28 bg-teal-700 hover:bg-teal-900  shadow-md py-1 px-4">
                Pay now
              </span>
            )}
          </div>
        </button>
        {/* Show any error or success messages */}
        {message && <div id="payment-message">{message}</div>}
      </form>
    </>
  );
};

export default PaymentCard;
