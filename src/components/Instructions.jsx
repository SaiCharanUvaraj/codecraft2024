import React from 'react';

const Instructions = ({ imageUrl, title, description, reverse }) => {
  const flexDir = reverse ? 'flex-col-reverse' : 'flex-col';

  return (
  <div
    className={`flex ${flexDir} w-full max-w-4xl mx-auto p-8 items-center bg-transparent border-transparent rounded-lg md:grid md:grid-cols-2 md:gap-x-36 md:gap-y-4 md:max-w-xl text-justify`}
  >
    <img
      className="object-cover w-48 h-48 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
      src={imageUrl}
      alt={title}
    />
    <div className="w-48 flex flex-col justify-between p-4 leading-normal">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
    </div>
  </div>
  );
};

export default Instructions;