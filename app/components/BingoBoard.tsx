import { useState, useEffect, useCallback, memo } from "react";
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

    const initializeBingoBoard = useCallback(() => {
        const newBingoBoard = generateBingoBoard(businesses);
        setBingoBoard(newBingoBoard);
    }, [businesses]);

    useEffect(() => {
        initializeBingoBoard();
    }, [initializeBingoBoard]);

    const handleRefresh = () => {
        window.location.reload();
    };


    return (
        <>
            <div id="bingoBoard" className="md:rounded-lg p-2 md:p-4 min-h-[105vh] sm:min-h-[105vh] md:min-h-[100vh] xl:min-h-[90vh]! 2xl:min-h-[90vh]">
                <p className="font-bold text-md mx-4 text-center mb-4 text-black">Presented by Andrew De Marzo, REALTOR®</p>
                <div className="grid grid-cols-5 gap-1">
                    {Object.keys(bingoBoard).map((key, index) => (
                        <div key={key + index} className="col-span-1">
                            <h3 className="text-5xl md:text-7xl text-center text-black font-bold mb-2">{key}</h3>
                            {bingoBoard[key as keyof BingoBoard].map((business: Business) => (
                                <div key={`${key}-${business.id}`} className="card w-full flex flex-col items-center justify-center h-[25%] md:h-[40%] px-2 md:px-2 text-xs my-2 md:my:4 bg-navy">
                                    <h4 className="text-xs md:text-sm lg:text-lg text-center font-bold mb-3 text-white">{business.name}</h4>
                                    <p className="text-center text-xs md:text-base lg:text-lg text-white">{business.address}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div className="text-center">
                <button onClick={handleRefresh} className="mt-12 bg-navy text-white rounded-lg py-4 px-12 hover:background-[#AB804D]">Refresh</button>
            </div>
        </>
    );
};

export default memo(BingoBoard);