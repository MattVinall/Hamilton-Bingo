import Image from 'next/image';
import Logo from '@/public/logos/Buy-Sell-lockup.png';
import Logo2 from "@/public/logos/logo-Judy-Marsales-lg.png";

function Navbar() {
    return (
        <header className='bg-cream my-6 border-black border-b-4 md:min-h-[15vh]'>
            <nav className='container mx-auto flex flex-col md:flex-row justify-around lg:justify-between items-center mb-6'>
                <div className="flex flex-col">
                    <Image src={Logo} alt="Logo" width={150} height={100} />

                    <Image className="my-4" src={Logo2} alt="Logo" width={150} height={100} />
                </div>
                <div className='flex flex-col'>
                    <h1 className="text-black font-extrabold text-5xl bingo-title">
                        Hamilton Bingo
                    </h1>
                    <p className="font-medium text-black text-center md:text-left">Andrew De Marzo, REALTOR®</p>
                    <p className="font-medium text-black text-center md:text-left">@andrewdemarzo</p>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
