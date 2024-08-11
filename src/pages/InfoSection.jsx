import React from 'react';
import Instructions from '../components/Instructions';

const imageData = [
  {
    title: 'InfoSection',
    imageUrl: '/src/assets/—Pngtree—office event calendar plan_5304242.png',
    description: 'This is a 48 Hour Hackathon conducted by Mtech Dept of Sri Sairam Engineering College. They can use AI and other tools to fasten their workflow.',
  },
  {
    title: 'On Spot Domain',
    imageUrl: '/docs/images/blog/image-4.jpg',
    description: 'Participants will be given onspot topics to work for the hackathon, for the domains, webdev, appdev and AI. Any prior work done for the hackathon will not be accepted.',
  },
  {
    title: 'Bring All Peripherals',
    imageUrl: '/docs/images/blog/image-4.jpg',
    description: 'Our college has ethernet connections only, so remember to bring ethernet cable, Chargers, Mouse, Keyboard, and other periperals you might need.',
  },
  {
    title: 'Food and Refreshment',
    imageUrl: '/docs/images/blog/image-4.jpg',
    description: 'Sufficient Refreshment will be provided for the participants. Lunch will be provided. Lunch timing will be 1 hour.',
  },
];

const InfoSection = () => {
  return (
    <div >
      {imageData.map((data, index) => (
        <Instructions
          key={index}
          title={data.title}
          imageUrl={data.imageUrl}
          description={data.description}
        />
      ))}
    </div>
  );
};

export default InfoSection;