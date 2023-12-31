"use client";
import React from "react";
import BingoBoard from "./components/BingoBoard";
import { businesses } from "./constants";
import Navbar from "./components/Navbar";
import { Intro } from "./components/Intro";
import Footer from "./components/Footer";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Intro />
      <main className="min-h-[85vh] md:min-h-[90vh] xl:min-h-[180vh] 2xl:min-h-screen">
        <section className="mx-auto md:px-4 flex flex-col md:flex-row md:space-x-4">
          <div className="bingo-board-container flex-1 my-8">
            <BingoBoard businesses={businesses} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;