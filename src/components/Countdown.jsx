import React from 'react';
import Countdown from 'react-countdown';

const CountdownToSeptember = () => {
  const date = new Date('2024-09-01T00:00:00');

  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center space-x-8 mb-8">
          <div className="bg-black border-2 border-white rounded-lg p-4 text-center w-15">
            <span className="text-1xl text-white">Days</span>
            <span className="text-3xl text-white block">{days}</span>
          </div>
          <div className="bg-black border-2 border-white rounded-lg p-4 text-center w-15">
            <span className="text-1xl text-white">Hours</span>
            <span className="text-3xl text-white block">{hours}</span>
          </div>
          <div className="bg-black border-2 border-white rounded-lg p-4 text-center w-15">
            <span className="text-1xl text-white">Minutes</span>
            <span className="text-3xl text-white block">{minutes}</span>
          </div>
          <div className="bg-black border-2 border-white rounded-lg p-4 text-center w-15">
            <span className="text-1xl text-white">Seconds</span>
            <span className="text-3xl text-white block">{seconds}</span>
          </div>
        </div>
        <button
          className="bg-black hover:bg-gray-700 transition duration-500 ease-in-out text-white font-bold text-3xl py-4 px-12 rounded-lg mt-8 shadow-lg hover:shadow-none hover:-translate-y-1 hover:drop-shadow border-2 border-white"
          style={{
            '--tw-drop-shadow': '0 4px 0 rgba(255, 255, 255, 0.5)',
          }}
        >
          Register Now!
        </button>
      </div>
    );
  };

  return (
    <Countdown date={date} renderer={renderer} />
  );
};

export default CountdownToSeptember;