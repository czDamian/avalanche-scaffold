"use client";
// this file shows you a simple method of writing data from the blockchain / making a simple token transfer

import { useState } from "react";
import { useWriteContract } from "wagmi";
import { tokenAbi } from "./tokenAbi";
import { parseEther } from "viem";

const WriteData = () => {
  const [recipient, setRecipient] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const {
    data: hash,
    isPending,
    writeContract,
    error,
  } = useWriteContract();


  const handleTransfer = () => {
    if (!recipient) return;
    console.log("receipient", recipient);

    writeContract({
      address: tokenAbi.address,
      abi: tokenAbi.abi,
      functionName: "transfer",
      args: [recipient, parseEther('1')], // 1 token since most tokens have 18 decimals. parseEther converts 1 to 1^18
    });

    setSubmitted(true);
  };

  return (
    <div className="shadow-lg bg-neutral-800 rounded-2xl p-8">
      <h1>Enter address to send the token to</h1>
      <input
        type="text"
        placeholder="0x..."
        value={recipient}
        className="border w-full max-w-3xl border-gray-200 my-2 px-2 py-1 rounded-md outline-none"
        onChange={(e) => setRecipient(e.target.value)}
      />
      <br />
      <button className="bg-black cursor-pointer rounded-xl px-4 py-1.5 mt-2" onClick={handleTransfer} disabled={isPending || !recipient}>
        {isPending ? "Sending..." : "Send Token"}
      </button>

      {submitted && (
        <div className="text-sm">
          {hash ? (
            <div>
              ✅ <strong>Transaction Hash:</strong>
              <a
                href={`https://testnet.snowtrace.io/tx/${hash}`}
                target="_blank"
                className="underline my-2"
              >
                {hash}
              </a>
            </div>
          ) : error ? (
            <div>❌ Error: {error.message}</div>
          ) : (
            <div>⏳ Waiting for confirmation...</div>
          )}
        </div>
      )}
    </div>
  );
};

export default WriteData;
