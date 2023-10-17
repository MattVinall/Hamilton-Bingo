import Image from 'next/image'
import React from 'react';
import BingoCard from './components/BingoCard';
import { Props } from './types';

export default function Home() {

  const BingoBoard = () => {
    return (
      <div className="grid grid-cols-5 gap-4">
        <h1 className='text-white text-5xl'>Hello</h1>
        {/* {businesses.map((category, index) => (
          <BingoCard key={index} businesses={category} />
        ))} */}
      </div>
    );
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <BingoBoard />
      </div>
    </main>
  )
}
