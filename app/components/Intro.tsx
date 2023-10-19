export const Intro = () => {

    const handleJumpToBingo = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        const bingoBoard = document.getElementById('bingoBoard');
        if (bingoBoard) {
            bingoBoard.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="intro" className="h-[85vh] flex flex-col justify-center items-center">
            <iframe className="mb-12" width="560" height="315" src="https://www.youtube.com/embed/y6120QOlsfU?si=A7g3AQfFnQgylwyr" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen loading="lazy"></iframe>
            <div className="container mx-auto ">
                <p className="text-black font-medium text-medium md:w-[80%] md:mx-auto">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat rem assumenda vero quibusdam illum voluptatum iste harum sequi a modi dignissimos nulla temporibus dolore cumque, velit tempora? Libero, rerum perspiciatis cumque, porro voluptate dicta sint esse perferendis ipsa similique aliquam laudantium fuga nemo, in optio enim fugiat? Tempore quos rerum odit porro beatae magnam dolorem soluta reiciendis quia nulla optio debitis illum, non sed totam at dolore cumque eos libero distinctio adipisci maxime accusantium atque?
                </p>
                <p className="text-black font-medium text-medium md:w-[80%] md:mx-auto mt-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat rem assumenda vero quibusdam illum voluptatum iste harum sequi a modi dignissimos nulla temporibus dolore cumque, velit tempora? Libero, rerum perspiciatis cumque, porro voluptate dicta sint esse perferendis ipsa similique aliquam laudantium fuga nemo, in optio enim fugiat? Tempore quos rerum odit porro beatae magnam dolorem soluta reiciendis quia nulla optio debitis illum, non sed totam at dolore cumque eos libero distinctio adipisci maxime accusantium atque?
                </p>
                <div className="container mx-auto my-12 text-center">
                    <a href="#bingoBoard" onClick={handleJumpToBingo} className="mt-8 bg-black text-white font-bold py-4 px-6 rounded-full">Jump to Bingo</a>
                </div>
            </div>
        </section>
    );
}