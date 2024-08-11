import React from 'react';

const Instructions = (props) => {
  return (
    
    <div
    className="flex flex-col items-center bg-transparent border-transparent rounded-lg md:grid md:grid-cols-2 md:gap-x-4 md:gap-y-4 md:max-w-xl max-w-md mx-auto p-4 mt-10 text-justify"
    >
      <img
        className="object-cover w-48 h-48 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src={props.imageUrl}
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {props.description}
        </p>
      </div>
    </div>

    
    
  );
};

export default Instructions;