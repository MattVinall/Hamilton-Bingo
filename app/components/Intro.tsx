export const Intro = () => {

    const handleJumpToBingo = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        const bingoBoard = document.getElementById('bingoBoard');
        if (bingoBoard) {
            bingoBoard.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <section id="intro" className="xl:min-h-[85vh] flex flex-col justify-center items-center">
            <div className="container px-4 md:mx-auto mt-8">
                <h2 className="text-black text-center lg:text-left font-bold text-2xl md:text-4xl mb-4 lg:w-[70%] md:mx-auto">Welcome to Hamilton BINGO!</h2>
                <p className="text-black font-medium text-medium lg:w-[70%] md:mx-auto">
                    To celebrate Hamilton Day, I wanted to give Hamiltonians and visitors a way to find their next
                    favourite coffee place, attraction, lunch spot, shop or restaurant/bar! Hamilton is full of many
                    wonderful, unique places to visit and I want you to explore and enjoy the city as much as I have
                    since moving here two years ago.
                </p>
                <p className="text-black font-medium text-medium lg:w-[70%] md:mx-auto mt-8">
                    The premise is simple: check out your Hamilton BINGO card below and try to visit any of the
                    squares! Take a photo at each square you visit from November 1st to November 14th and tag
                    @andrewdemarzo on Instagram to enter into a contest. Each unique Hamilton BINGO card
                    submission earns you 1 entry into a draw for a $150 gift card to your choice of one of the
                    businesses on your Hamilton BINGO card. If you score a horizontal, vertical, or diagonal line you
                    receive an extra 2 entries, for a total of 3 entries. In addition to the main prize, there will also
                    be 5 runner-up prizes to win $20 gift cards to your choice of business on your Hamilton BINGO
                    card.
                </p>
                <p className="text-black font-medium text-medium lg:w-[70%] md:mx-auto mt-8">
                    Andrew De Marzo is a real estate agent in Hamilton. While not born in Hamilton, Andrew and
                    his wife chose Hamilton as the place to start their family and call home. Andrew loves exploring
                    the city and selling people on Hamilton as a whole.
                </p>
                <p className="text-black font-medium text-medium lg:w-[70%] md:mx-auto mt-8">Judy Marsales Real Estate Ltd., Brokerage opened its doors in 1988 and has carved a special
                    niche as one of the areas few independently owned and operated real estate firms. Headed by
                    Judy Marsales, the brokerage services Hamilton, as well as Ancaster, Burlington, Dundas,
                    Waterdown, Flamborough, Stoney Creek and surrounding areas.
                </p>
            </div>
            <div className="hidden md:flex md:flex-col my-6 md:my-12 text-center">
                <a href="#bingoBoard" onClick={handleJumpToBingo} className="mt-8 text-white font-bold py-4 px-6 rounded-full">Jump to Bingo</a>
            </div>
        </section>
    );
}