import React from 'react';

const Instructions = ({ imageUrl, title, description }) => {

  return (
    <div
    className={`flex flex-col md:flex-row w-full max-w-4xl mx-auto p-8 items-center bg-transparent border-transparent rounded-lg md:min-w-full md:h-[65vh] md:py-0`}
  >
    <img
      className="object-contain mx-auto w-full h-48 md:h-56 md:w-56 md:object-cover rounded-t-lg md:rounded-none md:rounded-s-lg"
      src={imageUrl}
      alt={title}
    />
    <div className="flex flex-col justify-between p-4 leading-normal md:w-1/2">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify">
        {description}
      </p>
    </div>
  </div>
  );
};

export default Instructions;