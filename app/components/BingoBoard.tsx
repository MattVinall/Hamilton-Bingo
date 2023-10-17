"use client";

import { useState } from "react";
import { Businesses, Business, BingoBoard } from "../types";

type Props = {
    businesses: Businesses;
};

const BingoBoard: React.FC<Props> = ({ businesses }) => {
    const generateBingoBoard = (): BingoBoard => {
        const bingoBoard: BingoBoard = {
            B: [],
            I: [],
            N: [],
            G: [],
            O: [],
        };

        const getRandomBusiness = (category: string, usedBusinesses: Business[]): Business => {
            const businessesInCategory = businesses[category];
            const availableBusinesses = businessesInCategory.filter((business) => !usedBusinesses.includes(business));
            const randomIndex = Math.floor(Math.random() * availableBusinesses.length);
            return availableBusinesses[randomIndex];
        };

        for (let i = 0; i < 5; i++) {
            let usedBusinesses: Business[] = [];
            bingoBoard.B.push(getRandomBusiness("B", usedBusinesses));
            usedBusinesses.push(bingoBoard.B[i]);
            bingoBoard.I.push(getRandomBusiness("I", usedBusinesses));
            usedBusinesses.push(bingoBoard.I[i]);
            bingoBoard.N.push(getRandomBusiness("N", usedBusinesses));
            usedBusinesses.push(bingoBoard.N[i]);
            bingoBoard.G.push(getRandomBusiness("G", usedBusinesses));
            usedBusinesses.push(bingoBoard.G[i]);
            bingoBoard.O.push(getRandomBusiness("O", usedBusinesses));
            usedBusinesses.push(bingoBoard.O[i]);
        }
        return bingoBoard;
    };

    const [bingoBoard, setBingoBoard] = useState<BingoBoard>(generateBingoBoard());

    return (
        <div className="bg-white rounded-lg shadow-lg p-4 h-[100%]">
            <h2 className="text-lg font-bold mb-4">Bingo Board</h2>
            <div className="grid grid-cols-5 gap-4">
                {Object.keys(bingoBoard).map((key, index) => (
                    <div key={`${index}-${key}`} className="col-span-1">
                        <h3 className="text-6xl text-center text-black font-bold mb-2">{key}</h3>
                        {bingoBoard[key as keyof BingoBoard].map((business: Business) => (
                            <div key={`${business.id}-${business.name}`} className="w-full flex flex-col items-center justify-center h-[50%] p-2 mr-4 mt-4 mb-4 rounded-lg bg-gray-900">
                                <h4 className="text-sm font-bold mb-1">{business.name}</h4>
                                <p className="text-sm">{business.address}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BingoBoard;