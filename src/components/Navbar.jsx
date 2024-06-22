function Navbar() {

    return (
        <div className="justify-center w-full mx-auto bg-white">
            <div className="flex flex-col w-full my-10 mx-auto  md:items-center md:justify-between md:flex-row  max-w-7xl">
                <div className="flex flex-row items-center justify-between text-black">
                    <a className="text-3xl font-light inline-flex items-center gap-3 text-xl font-bold tracking-tight text-black" href="/">
                        <span>PurestPicks</span>
                    </a>
                </div>
                <nav>
                    <a className="font-light inline-flex items-center justify-center w-full h-8 gap-3 px-5 py-3 text-xs font-medium text-white duration-200 bg-gray-900 rounded-lg md:w-auto hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-black" href="mailto:hi@omerduran.dev?subject=Hi! I wanna submit a product" role="button">
                        Submit Product
                    </a>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;