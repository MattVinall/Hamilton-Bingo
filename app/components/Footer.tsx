const Footer = () => {
    return (
        <footer className="border border-t-4 border-black 4px py-8">
            <div className="mx-4 md:container md:mx-auto flex flex-col md:flex-row items-center md:justify-between">
                <p className="text-black font-bold">&copy; {new Date().getFullYear()} - All rights reserved</p>
                <p className="text-black font-bold mt-4">Developed by: <a className="link" target="_blank" href="https://mattvinall.dev">Matt Vinall</a></p>
            </div>
        </footer>
    )
}

export default Footer;