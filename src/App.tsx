import React from "react";
import { Background } from "@/components/Background";
import { MainContent } from "@/sections/MainContent";
import { CryptoModal } from "@/components/CryptoModal";

const App = () => {
  // 💳 PAYMENT HANDLER
  const handlePayment = async () => {
    try {
      const res = await fetch("https://lustplayhouse.cloud/pay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: 100, // $1.00 in cents (change this later)
        }),
      });

      const data = await res.json();
      console.log("Payment response:", data);

      alert("Payment request sent!");
    } catch (err) {
      console.error("Payment error:", err);
      alert("Payment failed. Check console.");
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#08080d] text-[#f0e8e0] font-sans antialiased">
      <Background />
      <MainContent />
      <CryptoModal />

      {/* 💳 TEMP PAYMENT BUTTON (you can style/move later) */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handlePayment}
          className="px-5 py-3 bg-white text-black rounded-xl shadow-lg hover:opacity-80 transition"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};
