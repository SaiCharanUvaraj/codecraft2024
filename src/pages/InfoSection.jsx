import React from 'react';
import Instructions from '../components/Instructions';

const imageData = [
  {
    title: 'Event Info',
    imageUrl: '/src/assets/—Pngtree—office event calendar plan_5304242.png',
    description: 'This is a 48 Hour Hackathon conducted by Mtech Dept of Sri Sairam Engineering College. They can use AI and other tools to fasten their workflow.',
  },
  {
    title: 'On Spot Domain',
    imageUrl: '/src/assets/idea.png',
    description: 'Participants will be given onspot topics to work for the hackathon, for the domains, webdev, appdev and AI. Any prior work done for the hackathon will not be accepted.',
  },
  {
    title: 'Bring All Peripherals',
    imageUrl: '/src/assets/mouse.png',
    description: 'Our college has ethernet connections only, so remember to bring ethernet cable, Chargers, Mouse, Keyboard, and other periperals you might need.',
  },
  {
    title: 'Food and Refreshment',
    imageUrl: '/src/assets/lunch.png',
    description: 'Sufficient Refreshment will be provided for the participants. Lunch will be provided. Lunch timing will be 1 hour.',
  },
];

const InfoSection = () => {
  return (
    <div className="flex flex-col justify-center items-center mx-auto mt-32 mb-8">
      <h2 className="text-3xl font-bold mb-4 text-white text-center">Instructions</h2>
      {imageData.map((data) => (
        <Instructions
          key={data.title}
          title={data.title}
          imageUrl={data.imageUrl}
          description={data.description}
        />
      ))}
    </div>
  );
};

export default InfoSection;