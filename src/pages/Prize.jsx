import React from 'react';

const PrizePool = () => {
  return (
    <div className="bg-transparent flex flex-col items-center justify-center">
      <div
        className="bg-cover bg-center h-48 w-96 rounded-lg bg-no-repeat"
        style={{
          backgroundImage: 'url("https://cdn5.vectorstock.com/i/1000x1000/11/24/trophy-wealth-prize-money-on-sport-winner-podium-vector-12231124.jpg")',
        }}
      />
      <p className="text-white font-bold text-5xl mt-8">PRIZE POOL of Rs 15000!!</p>
    </div>
  );
};

export default PrizePool;