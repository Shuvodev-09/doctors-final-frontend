import React from 'react';
import clock from '..//..//..//assets/icons/clock.png';
import location from '..//..//..//assets/icons/location.png';
import phone from '..//..//..//assets/icons/phone.png';
import InfoCard from './InfoCard';

const InfoCards = () => {
  const cardData = [
    {
      id: 1,
      name: 'opening hours',
      description: 'Open 9.00 am to 5.00pm everyday',
      icon: clock,
      bgClass: 'bg-gradient-to-r from-primary to-secondary',
    },
    {
      id: 2,
      name: 'Our Location',
      description: 'Open 9.00 am to 5.00pm everyday',
      icon: location,
      bgClass: 'bg-accent',
    },
    {
      id: 3,
      name: 'Contact Us Now',
      description: 'Open 9.00 am to 5.00pm everyday',
      icon: phone,
      bgClass: 'bg-gradient-to-r from-primary to-secondary',
    },
  ];
  return (
    <div className="container mx-auto">
      <div className="mt-8 mx-4 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {cardData.map(card => (
          <InfoCard key={card.id} card={card}></InfoCard>
        ))}
      </div>
    </div>
  );
};

export default InfoCards;
