import React from 'react';
import Countdown from 'react-countdown';

const CountdownToSeptember = () => {
  const date = new Date('2024-09-01T00:00:00');

  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="flex flex-col justify-center items-center">
        <div className="bg-[#5F85DB] rounded-lg p-4 text-center">
          <div className="flex justify-center text-4xl font-bold text-white space-x-8">
            <span className="flex flex-col items-center gap-4">
              <span className="text-2xl">Days</span>
              <span className="text-5xl">{days}</span>
            </span>
            <span className="flex flex-col items-center gap-4">
              <span className="text-2xl">Hours</span>
              <span className="text-5xl">{hours}</span>
            </span>
            <span className="flex flex-col items-center gap-4">
              <span className="text-2xl">Minutes</span>
              <span className="text-5xl">{minutes}</span>
            </span>
            <span className="flex flex-col items-center gap-4">
              <span className="text-2xl">Seconds</span>
              <span className="text-5xl">{seconds}</span>
            </span>
          </div>
        </div>
        <button
          className="bg-[#31363F] hover:bg-[#2f3640] transition duration-500 ease-in-out text-white font-bold text-3xl py-4 px-8 rounded-lg mt-8 shadow-lg hover:shadow-none hover:-translate-y-1 hover:drop-shadow"
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