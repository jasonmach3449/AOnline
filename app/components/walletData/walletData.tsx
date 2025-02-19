import React from 'react'

export default function walletData() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
    {/* Collateral Assets Section */}
    <div className="bg-gray-700 p-6 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Collateral Asset</h2>
      <div className="space-y-4">
        {[
          { name: "Chainlink", symbol: "LINK" },
          { name: "Coinbase Wrapped BTC", symbol: "cbBTC" },
          { name: "Compound", symbol: "COMP" },
          { name: "Ether", symbol: "ETH" },
          { name: "Lido Wrapped Staked ETH", symbol: "wstETH" },
          { name: "Uniswap", symbol: "UNI" },
        ].map((asset) => (
          <div className="flex items-center justify-between" key={asset.symbol}>
            <div className="flex items-center space-x-2">
              <img
                src="/path/to/asset-icon.png" // Replace with your asset icons
                alt={`${asset.name} icon`}
                className="w-8 h-8"
              />
              <div>
                <p className="font-medium">{asset.name}</p>
                <p className="text-sm text-gray-400">{asset.symbol}</p>
              </div>
            </div>
            <div className="text-sm text-gray-300">0.0000</div>
          </div>
        ))}
      </div>
    </div>

    {/* Wallet Balance Section */}
    <div className="bg-gray-700 p-6 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">USDC Wallet Balance</h2>
      <div className="text-4xl font-semibold mb-3 flex items-center">
        <img
          src="/path/to/usdc-icon.png"
          alt="USDC Icon"
          className="w-8 h-8 mr-2"
        />
        0.0000
      </div>
      <hr className="border-gray-600 my-4" />
      <div className="flex justify-between text-sm">
        <p>Net Borrow APR</p>
        <p>9.71%</p>
      </div>
      <div className="flex justify-between text-sm">
        <p>Net Supply APR</p>
        <p>9.00%</p>
      </div>
    </div>

    {/* Position Summary Section */}
    <div className="bg-gray-700 p-6 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Position Summary</h2>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <p>Collateral Value</p>
          <p>0.0000 USDC</p>
        </div>
        <div className="flex justify-between">
          <p>Liquidation Point</p>
          <p>0.0000 USDC</p>
        </div>
        <div className="flex justify-between">
          <p>Borrow Capacity</p>
          <p>0.0000 USDC</p>
        </div>
        <div className="flex justify-between">
          <p>Available to Borrow</p>
          <p>0.0000 USDC</p>
        </div>
      </div>
    </div>
  </div>
</div>


  )
}
