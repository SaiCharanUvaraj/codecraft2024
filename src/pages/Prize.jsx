import React, { useState } from 'react';

const PrizePool = () => {
  const [showPrizes, setShowPrizes] = useState(false);

  return (
    <div className="bg-none py-12 px-6 flex flex-col items-center justify-center pt-24" id="prize">
      <h2 className="text-6xl text-yellow-400 font-extrabold mb-8 text-center">
        Prize Pool of <span className="text-white">₹15,000</span>
      </h2>

      <button 
        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-8 rounded-full mb-8 transform transition-transform hover:scale-105"
        onClick={() => setShowPrizes(!showPrizes)}
      >
        {showPrizes ? 'Hide Prizes' : 'View Prizes'}
      </button>

      {showPrizes && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
          {/* 1st Prize */}
          <div className="animate-gradient bg-gradient-to-r from-[#C22435] via-[#C22435] to-[#EF7A1C] p-6 rounded-xl shadow-lg transform transition-transform hover:scale-105 duration-500">
            <h3 className="text-4xl text-white font-bold mb-4 text-center">1st Prize</h3>
            <p className="text-5xl text-white text-center font-extrabold">₹6,000</p>
          </div>

          {/* 2nd Prize */}
          <div className="animate-gradient bg-gradient-to-r from-[#C22435] via-[#C22435] to-[#EF7A1C] p-6 rounded-xl shadow-lg transform transition-transform hover:scale-105 duration-500">
            <h3 className="text-4xl text-white font-bold mb-4 text-center">2nd Prize</h3>
            <p className="text-5xl text-white text-center font-extrabold">₹4,000</p>
          </div>

          {/* 3rd Prize */}
          <div className="animate-gradient bg-gradient-to-r from-[#C22435] via-[#C22435] to-[#EF7A1C] p-6 rounded-xl shadow-lg transform transition-transform hover:scale-105 duration-500">
            <h3 className="text-4xl text-white font-bold mb-4 text-center">3rd Prize</h3>
            <p className="text-5xl text-white text-center font-extrabold">₹2,000</p>
          </div>

          {/* Domain-wise Prizes */}
          <div className="animate-gradient bg-gradient-to-r from-[#C22435] via-[#C22435] to-[#EF7A1C] p-6 rounded-xl shadow-lg transform transition-transform hover:scale-105 duration-500">
            <h3 className="text-4xl text-white font-bold mb-4 text-center">Domain Winners</h3>
            <p className="text-5xl text-white text-center font-extrabold">₹1,000 each</p>
            <p className="text-lg text-gray-200 text-center mt-2">Total 3 Domains</p>
          </div>
        </div>
      )}

      <div className='flex flex-col md:flex gap-10 items-center'>
        {/* Early Bird Offer Section */}
        <div className="flex flex-col items-center mt-8 p-6 bg-white/15 backdrop-blur-xl border-2 border-white/15 rounded-xl shadow-lg text-center transform transition-transform hover:scale-110 h-[32vh] md:h-[30vh] cursor-pointer">
          <p className="text-5xl text-white font-extrabold mb-4 tracking-wide">
            Early Bird Offer
          </p>
        
          <div className="flex flex-col items-center">
            <p className="text-4xl text-yellow-200 font-bold">
              ₹300/team
            </p>
            <p className="text-2xl text-gray-100 mt-1 font-semibold">(Limited to first 20 teams)</p>
            <p className="text-xl text-red-300 mt-1">Hurry! Offer valid for a limited time only.</p>
          </div>
        </div>
        {/* Standard Registration Fee Section */}
        <div className="flex flex-col items-center mt-8 p-6 bg-white/15 backdrop-blur-xl border-2 border-white/15 rounded-xl shadow-lg text-center transform transition-transform hover:scale-110 h-[30vh] cursor-pointer ">
          <p className="text-5xl text-white font-extrabold mb-4 tracking-wide">
            Registration Fees
          </p>
        
          <div className="flex flex-col items-center">
            <p className="text-4xl text-yellow-200 font-bold">
              ₹500/team
            </p>
            <p className="text-2xl text-gray-100 mt-1 font-semibold">(After Early Bird Offer)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrizePool;
