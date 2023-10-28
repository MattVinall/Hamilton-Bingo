const Footer = () => {
    return (
        <footer className="border border-t-4 border-black 4px">
            <div className="mx-4 md:container md:mx-auto text-center md:text-left flex flex-col md:flex-row items-center md:justify-between my-4">
                <div className="text-black font-bold my-4">
                    <p>Presented by Andrew De Marzo, REALTOR®</p>
                    <p><a className="link" href="tel:2899366316">289-936-6316</a></p>
                    <p><a className="link" href="mailto:demarzo@judymarsales.com">demarzo@judymarsales.com</a></p>
                    <p><a className="link" target="_blank" href="https://www.instagram.com/andrewdemarzo/">@andrewdemarzo</a></p>
                </div>
                <div className="text-black font-bold my-4 ">
                    <p>Judy Marsales Real Estate Ltd., Brokerage</p>
                    <p><a className="link" href="tel:9055223300">905-522-3300</a></p>
                    <p><a className="link" href="mailto:info@judymarsales.com">info@judymarsales.com</a></p>
                    <p><a className="link" target="_blank" href="https://www.instagram.com/judymarsalesrealestate/">@judymarsalesrealestate</a></p>
                </div>
                <div className="py-8 text-center">
                    <p className="text-black font-bold my-4">Developed by <a className="link" href="https://mattvinall.dev" target="_blank" rel="noopener">Matt Vinall</a></p>
                    <p className="text-center text-black font-bold mt-4">&copy; {new Date().getFullYear()} - All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;