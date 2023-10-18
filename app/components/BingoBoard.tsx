import { useState, useEffect } from "react";
import { Businesses, Business, BingoBoard } from "../types";
import { generateBingoBoard } from "../utils/generateBingoBoard";

type Props = {
    businesses: Businesses;
};

const BingoBoard: React.FC<Props> = ({ businesses }) => {
    const [bingoBoard, setBingoBoard] = useState<BingoBoard>({
        B: [],
        I: [],
        N: [],
        G: [],
        O: [],
    });

    useEffect(() => {
        const initializeBingoBoard = () => {
            const newBingoBoard = generateBingoBoard(businesses);
            setBingoBoard(newBingoBoard);
        };
        initializeBingoBoard();
    }, [businesses]);

    return (
        <div className="rounded-lg p-4">
            <div className="grid grid-cols-5 gap-4">
                {Object.keys(bingoBoard).map((key, index) => (
                    <div key={key + index} className="col-span-1">
                        <h3 className="text-6xl text-center text-black font-bold mb-2">{key}</h3>
                        {bingoBoard[key as keyof BingoBoard]
                            .map((business: Business) => (
                                <div key={`${key}-${business.id}`} className="w-full flex flex-col items-center justify-center h-[50%] p-2 mr-4 mt-4 mb-4 rounded-md bg-navy">
                                    <h4 className="text-lg  text-center font-bold mb-1">{business.name}</h4>
                                    <p className="text-">{business.address}</p>
                                </div>
                            ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BingoBoard;