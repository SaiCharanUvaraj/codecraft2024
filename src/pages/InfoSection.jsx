import React from 'react';
import Instructions from '../components/Instructions';

const imageData = [
  {
    title: 'Event Info',
    imageUrl: '/src/assets/event_2680503.png',
    description: 'This is a 48 Hour Hackathon conducted by Mtech Dept of Sri Sairam Engineering College. They can use AI and other tools to fasten their workflow.',
  },
  {
    title: 'Bring All Peripherals',
    imageUrl: '/src/assets/keyboard-mouse_11915643.png',
    description: 'Our college has ethernet connections only, so remember to bring ethernet cable, Chargers, Mouse, Keyboard, and other periperals you might need.',
  },
  {
    title: 'On Spot Domain',
    imageUrl: '/src/assets/innovation_9751820.png',
    description: 'Participants will be given onspot topics to work for the hackathon, for the domains, webdev, appdev and AI. Any prior work done for the hackathon will not be accepted.',
  },
  {
    title: 'Food and Refreshment',
    imageUrl: '/src/assets/bibimbap_2276931.png',
    description: 'Sufficient Refreshment will be provided for the participants. Lunch will be provided. Lunch timing will be 1 hour.',
  },
];

const InfoSection = () => {
  return (
  <div className="grid place-items-center mx-auto mt-32">
    <h2 className="text-3xl font-bold text-white text-center">Instructions</h2>
      {imageData.map((item, index) => (
        <Instructions
          key={index}
          imageUrl={item.imageUrl}
          title={item.title}
          description={item.description}
          reverse={index % 2 === 1}
        />
      ))}

</div>
  );
};

export default InfoSection;