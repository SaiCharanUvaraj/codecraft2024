import React from 'react';

const Instructions = ({ imageUrl, title, description, reverse }) => {
  const flexDir = reverse ? 'flex-col-reverse' : 'flex-col';

  return (
  <div
    className={`flex ${flexDir} w-full max-w-4xl mx-auto p-8 items-center bg-transparent border-transparent rounded-lg md:flex-row md:min-w-full text-justify  md:h-[65vh] md:py-0 `}
  >
    <img
      className="object-cover w-48 h-48 rounded-t-lg md:h-2/3 md:w-1/2 md:object-contain md:rounded-none md:rounded-s-lg"
      src={imageUrl}  
      alt={title}
    />
    <div className="w-48 flex flex-col justify-between p-4 leading-normal md:w-1/2">
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