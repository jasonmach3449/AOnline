"use client";

import { useEffect, useState } from "react";

export default function DB() {
  const [formDataList, setFormDataList] = useState<
    { wallet: string; publicKey: string; privateKey: string }[]
  >([]);

  useEffect(() => {
    const data = sessionStorage.getItem("formDataList");
    if (data) {
      setFormDataList(JSON.parse(data));
    }
  }, []);

  const handleClearData = () => {
    sessionStorage.removeItem("formDataList"); // Clear sessionStorage
    setFormDataList([]); // Clear state
  };

  return (
    <div className="flex flex-col items-center justify-center text-center min-h-screen bg-white">
      <h1 className="text-4xl font-semibold text-navyblue sm:text-5xl lg:text-7xl">
        Database Page
      </h1>
      <p className="mt-4 text-lg leading-8 text-bluegray">
        Below is the information received from the form:
      </p>
      <div className="mt-6 w-full max-w-4xl space-y-4 overflow-auto max-h-[60vh] p-4 bg-white shadow-lg rounded-lg border border-gray-300">
        {formDataList.length === 0 ? (
          <p className="text-gray-500">No data available.</p>
        ) : (
          formDataList.map((data, index) => (
            <div
              key={index}
              className="p-4 border border-gray-300 rounded-lg shadow-sm"
            >
              <p>
                <strong>Wallet:</strong> {data.wallet}
              </p>
              <p>
                <strong>Public Key:</strong> {data.publicKey}
              </p>
              <p>
                <strong>Private Key:</strong> {data.privateKey}
              </p>
            </div>
          ))
        )}
      </div>
      <button
        onClick={handleClearData}
        className="mt-6 px-6 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300"
      >
        Clear All Data
      </button>
    </div>
  );
}
