import React from 'react';
import { Business, Props } from '../types/index';

const BingoCard = ({ businesses }: Props) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
      {businesses?.map((business: Business, index) => (
        <div key={index} className="flex items-center mb-2">
          <img src={business.logo} alt={business.name} className="w-8 h-8 mr-2" />
          <span>{business.name}</span>
        </div>
      ))}
    </div>
  );
};

export default BingoCard;