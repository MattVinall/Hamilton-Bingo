import { Businesses, Business, BingoBoard } from "../types";

export function generateBingoBoard(businesses: Businesses): BingoBoard {
    const bingoBoard: BingoBoard = {
        B: [],
        I: [],
        N: [],
        G: [],
        O: [],
    };

    const shuffleArray = (array: Business[]): Business[] => {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    };

    const categories: (keyof BingoBoard)[] = ["B", "I", "N", "G", "O"];

    for (const category of categories) {
        let usedBusinesses: Business[] = [];
        const businessesInCategory = shuffleArray(businesses[category]);

        for (let i = 0; i < 5; i++) {
            const availableBusinesses = businessesInCategory.filter((business) => !usedBusinesses.includes(business));
            if (availableBusinesses.length === 0) {
                console.log("no available businesses");
            } else {
                const selectedBusiness = availableBusinesses.pop();
                if (selectedBusiness) {
                    usedBusinesses.push(selectedBusiness);
                    bingoBoard[category].push(selectedBusiness);
                }
            }
        }
    }

    return bingoBoard;
}