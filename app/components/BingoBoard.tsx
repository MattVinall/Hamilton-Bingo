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


    const handlePrint = () => {
        const bingoBoardElement = document.getElementById("bingoBoard");
        const intro = document.getElementById("intro");
        const nav = document.getElementsByTagName("nav")[0];

        if (bingoBoardElement && intro && nav) {
            const clonedBingoBoardElement = bingoBoardElement.cloneNode(true) as HTMLElement;

            clonedBingoBoardElement.style.position = "absolute";
            clonedBingoBoardElement.style.top = "-9999px";
            clonedBingoBoardElement.style.left = "-9999px";


            document.body.appendChild(clonedBingoBoardElement);


            window.print();

            document.body.removeChild(clonedBingoBoardElement);
        }
    };


    return (
        <>
            <div id="bingoBoard" className="rounded-lg p-4 xl-min-h-[180vh] 2xl:min-h-[105vh]">
                <div className="grid grid-cols-5 gap-4">
                    {Object.keys(bingoBoard).map((key, index) => (
                        <div key={key + index} className="col-span-1">
                            <h3 className="text-6xl text-center text-black font-bold mb-2">{key}</h3>
                            {bingoBoard[key as keyof BingoBoard].map((business: Business) => (
                                <div key={`${key}-${business.id}`} className="card w-full flex flex-col items-center justify-center h-[40%] p-2 mr-4 mt-4 mb-4 rounded-md bg-navy">
                                    <h4 className="text-lg text-center font-bold mb-3">{business.name}</h4>
                                    <p className="text-center">{business.address}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div id="print" className="text-center">
                <button onClick={handlePrint} className="mt-12 ml-4 bg-navy text-white rounded-lg py-4 px-12 hover:background-[#AB804D]">Print</button>
            </div>
        </>
    );
};

export default memo(BingoBoard);