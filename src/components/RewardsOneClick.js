import React, { useState, useEffect } from 'react';
import { useLocation } from '@reach/router';
import { GiftCardSentToEmail, GiftCardNotEnoughBalance, GiftCardTxIdNotFound } from './Modal';


const RewardsOneClick = () => {
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
      processReward(txId, value, type)
        .then(data => {
          setResult(data);
          setSuccessModalOpen(true);
        })
        .catch(error => {
          console.error('ERROR', error);
          setFailureModalOpen(true);
        });
    }
  }, [queryParams]);

  const processReward = async (txId, value, type) => {
    try {
      const url = `${process.env.GATSBY_API_URL}app/rewards/gcow/easy`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({ campaignRewardTxId: txId, productName: type, value: value }),
      });

      if (response.status === 400) {
        setFailureModalOpen(true);
      } else if (response.status === 422) {
        setLowBalanceModalOpen(true);
      }

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setSuccessModalOpen(true);
      console.log("Data received:", data);
      return data;
    } catch (error) {
      console.error("Fetch error:", error);
      setFailureModalOpen(true);
      throw error;
    }
  };

  const handleCloseModal = () => {
    setSuccessModalOpen(false);
    setFailureModalOpen(false);
    setLowBalanceModalOpen(false);
  };

  return (
    <>
      <GiftCardSentToEmail
        isOpen={isSuccessModalOpen}
        organizationName={result?.organizationName}
        onClose={handleCloseModal}
        urlRedirect={result?.preferences?.urlRedirect}
      />
      <GiftCardTxIdNotFound
        isOpen={isFailureModalOpen}
        onClose={handleCloseModal}
      />
      <GiftCardNotEnoughBalance
        isOpen={isLowBalanceModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default RewardsOneClick;
