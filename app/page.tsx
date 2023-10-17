"use client";
import React from "react";
import BingoBoard from "./components/BingoBoard";
import { businesses } from "./constants";

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:space-x-4">
        <div className="flex-1">
          <BingoBoard businesses={businesses} />
        </div>
      </div>
    </div>
  );
};

export default Home;