import React, { useEffect, useState } from "react";
import { useLocation } from "@reach/router";
import {GiftCardSentToEmail, GiftCardNotEnoughBalance, GiftCardTxIdNotFound} from "../components/Modal"

const RewardsPage = () => {
  const [isSuccessModalOpen, setSuccessModalOpen] = useState(false)
  const [isFailureModalOpen, setFailureModalOpen] = useState(false)
  const [isLowBalanceModalOpen, setLowBalanceModalOpen] = useState(false)
  const [result, setResult] = useState(null);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  useEffect(() => {
    const txId = queryParams.get('txId');
    const value = queryParams.get('value');
    const type = queryParams.get('type');
    console.log(`URL txId is ${txId}, URL value is ${value}, URL type is ${type}`);

    if (txId) {
      processReward(txId, value, type).then(data => {
        setResult(data);
        // Handle opening of modal based on result here
      }).catch(error => {
        console.error('ERROR', error);
        // Handle opening of error modal here
        // consider adding general error modal here....

      });
    }
  }, [queryParams]);

  const processReward = (txId, value, type) => {
    let newUrl = `${process.env.GATSBY_API_URL}app/rewards/gcow/easy`
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    });

    return fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        "campaignRewardTxId": txId,
        "productName": type,
        "value": value
      })
    })
      .then(res => {
        if (!res.ok) {
          if (res.status === 400) {
            {isFailureModalOpen && <GiftCardTxIdNotFound onClose={toggleModal} />}
          } else if (res.status === 422) {
            {isLowBalanceModalOpen && <GiftCardNotEnoughBalance onClose={toggleModal} />}
          }
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        {isSuccessModalOpen && <GiftCardSentToEmail organizationName={data.organizationName} onClose={toggleModal} />}
        console.log("Data received:", data);
        return data;
      })
      .catch(error => {
        // Your error handling logic goes here
        console.error("Fetch error:", error);
        throw error;
      });
  };

  return (
    <div>
      <h1>Rewards Page</h1>
      {/* Render your page contents and modals based on state here */}
      {result && <Modal result={result} />}
    </div>
  );
};

export default RewardsPage;
