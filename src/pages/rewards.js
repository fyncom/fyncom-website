import React, { useEffect, useState } from "react";
import { useLocation, Router } from "@reach/router";
import { GiftCardSentToEmail, GiftCardNotEnoughBalance, GiftCardTxIdNotFound } from "../components/Modal"
import Header from "../components/header";
import Footer from "../components/footer";

const RewardsPage = () => {
  // Modal states should be individual and independent, not toggles
  const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);
  const [isFailureModalOpen, setFailureModalOpen] = useState(false);
  const [isLowBalanceModalOpen, setLowBalanceModalOpen] = useState(false);
  const [result, setResult] = useState(null);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  useEffect(() => {
    const txId = queryParams.get('txId');
    const value = queryParams.get('value');
    const type = queryParams.get('type');

    if (txId) {
      processReward(txId, value, type).then(data => {
        setResult(data);
        setSuccessModalOpen(true); // Open the success modal on data receipt
      }).catch(error => {
        console.error('ERROR', error);
        // Handle error based on the custom error message property or status
        setFailureModalOpen(true); // If you need a general failure modal
      });
    }
  }, [queryParams]);

  const processReward = (txId, value, type) => {
    let url = `${process.env.GATSBY_API_URL}/v2/app/rewards/gcow/easy`;
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
        // Modal logic should not be inside fetch, handle modals outside
        if(res.status === 400) {
          setFailureModalOpen(true);
        } else if(res.status === 422) {
          setLowBalanceModalOpen(true);
        }
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        setSuccessModalOpen(true); // On success
        console.log("Data received:", data);
        return data;
      })
      .catch(error => {
        console.error("Fetch error:", error);
        setFailureModalOpen(true); // On fetch error
        throw error;
      });
  };

  // Close modals by setting their respective states to false
  const handleCloseModal = () => {
    setSuccessModalOpen(false);
    setFailureModalOpen(false);
    setLowBalanceModalOpen(false);
  };

  return (
    <div>
      <Header/>
      <h1>Rewards Page</h1>
      {/* Render your page contents and modals based on state here */}
      <GiftCardSentToEmail isOpen={isSuccessModalOpen} organizationName={result?.organizationName} onClose={handleCloseModal} urlRedirect={result?.preferences?.urlRedirect} />
      <GiftCardTxIdNotFound isOpen={isFailureModalOpen} onClose={handleCloseModal} />
      <GiftCardNotEnoughBalance isOpen={isLowBalanceModalOpen} onClose={handleCloseModal} />
      <Footer/>
    </div>
  );
};

export default RewardsPage;
