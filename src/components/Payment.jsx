import React, { useEffect, useState } from "react";
import axios from "axios";
import useShop from "../ShopContext";

function Payment() {
  const { total } = useShop();
  const initialState = {
    zaadService: false,
    evcPlus: false,
    sahal: false,
  };
  const [selectedPayment, setSelectedPayment] = useState(initialState);
  const [updated, setUpdated] = useState(false);
  const [phone, setPhone] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(phone);
    setPhone(" ");
    processPayment();
  };

  const processPayment = async () => {
    try {
      const body = {
        schemaVersion: "1.0",
        requestId: "10111331033",
        timestamp: 1590587436057686,
        channelName: "WEB",
        serviceName: "API_PURCHASE",
        serviceParams: {
          merchantUid: process.env.REACT_APP_MERCHENT_U_ID,
          apiUserId: process.env.REACT_APP_MERCHENT_API_USER_ID,
          apiKey: process.env.REACT_APP_MERCHENT_API_KEY,
          paymentMethod: "mwallet_account",
          payerInfo: {
            accountNo: phone,
          },
          transactionInfo: {
            referenceId: "12334",
            invoiceId: "7896504",
            amount: total,
            currency: "USD",
            description: "React Shopping Cart",
          },
        },
      };
      const data = await axios.post("https://api.waafi.com/asm", body);
      console.log(data);
    } catch (err) {
      console.log(err);
      setPhone(" ");
    }
  };

  useEffect(() => {}, [updated]);
  return (
    <div>
      <h2>Pay With</h2>
      <div className="payment-cards">
        <div
          className={`payment-card ${
            selectedPayment.zaadService && "selected"
          }`}
          onClick={() =>
            setSelectedPayment({ ...initialState, zaadService: true })
          }
        >
          <h3>Zaad Service</h3>
        </div>
        <div
          className={`payment-card ${selectedPayment.evcPlus && "selected"}`}
          onClick={() => setSelectedPayment({ ...initialState, evcPlus: true })}
        >
          <h3>Evc Plus</h3>
        </div>
        <div
          className={`payment-card ${selectedPayment.sahal && "selected"}`}
          onClick={() => setSelectedPayment({ ...initialState, sahal: true })}
        >
          <h3>Sahal </h3>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="252"
          />
          <button className="btn">Proceed</button>
        </form>
      </div>
    </div>
  );
}

export default Payment;
