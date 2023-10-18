"use client";
import React from "react";
import BingoBoard from "./components/BingoBoard";
import { businesses } from "./constants";

const Home: React.FC = () => {
  return (
    <main>
      <section className="container mx-auto px-4 flex flex-col md:flex-row md:space-x-4">
        <div className="flex-1 my-8">
          <BingoBoard businesses={businesses} />
        </div>
      </section>
    </main>
  );
};

export default Home;