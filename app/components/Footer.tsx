const Footer = () => {
    return (
        <footer className="border border-t-4 border-black 4px py-8">
            <div className="container mx-auto flex justify-between">
                <p className="text-black font-bold">&copy; {new Date().getFullYear()} - All rights reserved</p>
                <p className="text-black font-bold">Developed by: <a className="link" target="_blank" href="https://mattvinall.dev">Matt Vinall</a></p>
            </div>
        </footer>
    )
}

export default Footer;