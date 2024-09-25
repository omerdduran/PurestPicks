
function Navbar() {
    return (
        <div className="w-full mx-auto bg-white">
            <div className="flex flex-row w-full my-10 mx-auto items-center justify-between xs:px-5 sm:px-20 2xl:px-40">
                <div className="flex items-center text-black">
                    <a className="font-light tracking-tight text-black" href="/">
                        <span>PurestPicks</span>
                    </a>
                </div>
                <nav className="flex items-center">
                    <a className="font-light inline-flex items-center justify-center w-full h-8 gap-3 px-5 py-3 text-xs text-white duration-200 bg-gray-900 rounded-lg md:w-auto hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-black"
                       href="mailto:hi@omerduran.dev?subject=Hi! I wanna submit a product" role="button">
                        Submit Product
                    </a>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;