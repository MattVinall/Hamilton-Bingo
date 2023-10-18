"use client";
import React from "react";
import BingoBoard from "./components/BingoBoard";
import { businesses } from "./constants";
import Navbar from "./components/Navbar";
import { Intro } from "./components/Intro";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Intro />
      <main className="min-h-[120vh] md:min-h-[100vh]">
        <section className="mx-auto px-4 flex flex-col md:flex-row md:space-x-4">
          <div className="flex-1 my-8">
            <BingoBoard businesses={businesses} />
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;