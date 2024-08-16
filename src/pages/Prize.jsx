import React, { useState } from 'react';

const PrizePool = () => {

  return (
    <div className="bg-none mt-10 px-6 flex flex-col items-center justify-center pt-40" id="prize">
      <h2 className="text-4xl md:text-6xl text-yellow-400 font-extrabold mb-8 text-center font-outfit">
        Prize Pool of <span className="text-white">₹10,000+</span>
      </h2>

      <div className="grid place-items-center gap-5 md:gap-10 items-center justify-center mt-8">
        {[
          {
            title: 'Early Bird Offer',
            amount: '₹300/team',
            subText: '(Limited to first 20 teams)',
            extraText: 'Hurry! Offer valid for a limited time only.',
          },
          {
            title: 'Registration Fees',
            amount: '₹500/team',
            subText: '(After Early Bird Offer)',
          },
        ].map((offer, index) => (
          <div
            key={index}
            className="grid place-items-center p-4 md:p-6 bg-white/15 backdrop-blur-2xl border-2 border-white/15 rounded-xl shadow-lg text-center transform transition-transform hover:scale-110 cursor-pointer h-[26vh] md:h-[30vh]"
          >
            <p className="text-3xl md:text-5xl text-white font-extrabold mb-2 md:mb-4 tracking-wide font-outfit">
              {offer.title}
            </p>
            <div className="flex flex-col items-center font-outfit">
              <p className="text-3xl md:text-4xl text-yellow-200 font-bold">
                {offer.amount}
              </p>
              <p className="text-lg md:text-2xl text-gray-100 mt-1 font-semibold font-Montserrat">
                {offer.subText}
              </p>
              {offer.extraText && (
                <p className="text-sm md:text-xl text-red-300 mt-1 font-Montserrat">
                  {offer.extraText}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrizePool;
