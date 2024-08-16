import React from 'react';
import Instructions from '../components/Instructions';
import domain from '../assets/domain.json';
import food from '../assets/food.json';
import info from '../assets/info.json';
import keyboard from '../assets/keyboard.json';

const imageData = [
  {
    title: 'Hackathon Overview',
    description: 'Join our 24-hour hackathon organized by the M.Tech CSE Department of Sri Sairam Engineering College. Participants can utilize AI and other advanced tools to enhance their productivity and innovation.',
    animationData: info,
    width: 40,
    height: 110
  },
  {
    title: 'Essential Equipments',
    description: 'Ensure to bring all necessary peripherals like ethernet cables, chargers, mouse, keyboard, and any other items you may need.',
    animationData: keyboard,
    width: 30,
    height: 90
  },
  {
    title: 'Challenge Domains',
    description: 'Participants will receive their challenge topics on the day of the event. Domains include Web Development, App Development, Aritificial Intelligence and Blockchain Development. Pre-prepared projects will not be accepted.',
    animationData: domain,
    width: 30,
    height: 80
  },
  {
    title: 'Meals & Refreshments',
    description: 'We’ve got you covered with meals and refreshments throughout the event.',
    animationData: food,
    width: 30,
    height: 80
  },
];


const InfoSection = () => {
  return (
    <div className="flex flex-col mx-auto w-[90%]" id="Instructions">
      <h2 className="font-semibold text-white text-center text-6xl mt-32 font-outfit">Instructions</h2>
      {imageData.map((item, index) => (
        <Instructions
          key={index}
          width={item.width}
          height={item.height}
          animationData={item.animationData}
          title={item.title}
          description={item.description}
          reverse={index % 2 !== 0} 
        />
      ))}
    </div>
  );
};

export default InfoSection;
