import React from 'react'

function Info() {
  return (
    <div className="mx-auto max-w-2xl lg:max-w-7xl bg-blue-500 rounded-3xl mb-32">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 lg:grid-cols-2 xl:gap-x-8">
            {/* COLUMN-1 */}
            <div>
              <div className="float-left p-20 relative">
                <p className="text-4xl md:text-2xl font-semibold mb-3 text-white">
                  
                </p>
                {/* <h3 className="text-4xl md:text-5xl font-semibold mb-3 text-white flex items-center">
                  <img
                    src="./assets/logo/usdc.png"
                    alt=""
                    className="w-8 h-8 mr-2"
                  />
                  0.0000
                </h3> */}
                {/* <p className="text-4xl md:text-2xl font-semibold mb-3 text-white">
                  $0.00
                </p> */}
              </div>
            </div>

            {/* COLUMN-2 */}
            <div className="p-10 flex flex-col justify-center items-start">
              <h3 className="text-3xl md:text-5xl font-semibold mb-4 text-white">
                Thank you!
              </h3>
              <p className="text-4xl md:text-2xl font-semibold mb-3 text-white">
              سوف نرسل لك إيصال معاملة XE-Token
                </p>
              <div className="flex items-center">
                {/* <button
                  className="text-blue text-lg font-medium py-4 px-10 transition duration-150 ease-in-out leafbutton bg-lightblue hover:text-white hover:bg-blue"
                  
                >
                  Connect Wallet
                </button> */}
              </div>
            </div>
          </div>  
        </div> 
  )
}

export default Info