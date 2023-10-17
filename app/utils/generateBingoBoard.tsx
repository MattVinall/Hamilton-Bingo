import { Businesses, Business, BingoBoard } from "../types";

export function generateBingoBoard(businesses: Businesses): BingoBoard {
    const bingoBoard: BingoBoard = {
        B: [],
        I: [],
        N: [],
        G: [],
        O: [],
    };

    const getRandomBusiness = (category: string, usedBusinesses: Business[]): Business => {
        const businessesInCategory = businesses[category];
        const availableBusinesses = businessesInCategory.filter((business) => {
            const usedCount = usedBusinesses.filter((b) => b.id === business.id).length;
            return usedCount < 5;
        });
        const randomIndex = Math.floor(Math.random() * availableBusinesses.length);
        const selectedBusiness = availableBusinesses[randomIndex];
        usedBusinesses.push(selectedBusiness);
        return selectedBusiness;
    };

    for (let i = 0; i < 5; i++) {
        let usedBusinesses: Business[] = [];
        bingoBoard.B.push(getRandomBusiness("B", usedBusinesses));
        bingoBoard.I.push(getRandomBusiness("I", usedBusinesses));
        bingoBoard.N.push(getRandomBusiness("N", usedBusinesses));
        bingoBoard.G.push(getRandomBusiness("G", usedBusinesses));
        bingoBoard.O.push(getRandomBusiness("O", usedBusinesses));
    }

    return bingoBoard;
}