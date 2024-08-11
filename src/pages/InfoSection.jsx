import React from 'react';
import Container from '../components/Instructions';

const InfoSection = () => {
  const imageData = {
    
    title: 'InfoSection',

    imageUrl: '/docs/images/blog/image-4.jpg',
    subheading: 'About The Event.',
    paragraph: 'This is a 48 Hour Hackathon conducted by Mtech Dept of Sri Sairam Engineering College. They can use AI and other tools to fasten their workflow.',

    imageUrl1: '/docs/images/blog/image-4.jpg',
    subheading1: 'On Spot Domain.',
    paragraph1: 'Participants will be given onspot topics to work for the hackathon, for the domains, webdev, appdev and AI. Any prior work done for the hackathon will not be accepted.',

    imageUrl2: '/docs/images/blog/image-4.jpg',
    subheading2: 'Bring All Peripherals.',
    paragraph2: 'Our college has ethernet connections only, so remember to bring ethernet cable, Chargers, Mouse, Keyboard, and other periperals you might need.',

    imageUrl3: '/docs/images/blog/image-4.jpg',
    subheading3: 'Food and Refreshment.',
    paragraph3: 'Sufficient Refreshment will be provided for the participants. Lunch will be provided. Lunch timing will be 1 hour.',
  };

  return (
    <div>
      <Container imageData={imageData} />
    </div>
  );
};

export default InfoSection;