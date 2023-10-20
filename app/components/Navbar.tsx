import Image from 'next/image';
import Logo from '@/public/logos/Buy-Sell-lockup.png';

function Navbar() {
    return (
        <header className='bg-cream my-6 border-black border-b-4 md:min-h-[15vh]'>
            <nav className='container mx-auto flex flex-col justify-between items-center mb-6'>
                <Image src={Logo} alt="Logo" width={150} height={100} />
                <div className='flex flex-col'>
                    <h1 className="text-black font-extrabold text-5xl">
                        Hamilton Bingo
                    </h1>
                    <p className="font-medium text-black text-center md:text-left">Andrew De Marzo, REALTOR®</p>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
