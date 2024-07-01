


function Footer() {
    return (
        <div>
            <div className="flex flex-col items-center py-44 grid grid-cols-2 gap-4 px16 xs:grid-cols-1 sm:grid-cols-1 2xl:grid-cols-2">
                <div>
                    <h1 className="text-3xl px-72 font-serif xs:p-5 sm:p-20 2xl:p-60 xs:py-0 sm:py-0">What is <br></br>Minimalism?

                    </h1>
                </div>
                <div>
                    <p className="text-2xl pr-72 font-extralight xs:p-5 sm:p-20 xs:py-0 sm:py-0">Minimalism is defined as a design or style in which
                        the
                        simplest and fewest elements are used to create the maximum effect. Minimalism had its origins
                        in the arts—with the artwork featuring simple lines, only a few colors, and careful placement of
                        those lines and colors.</p>
                </div>
            </div>
            <div className="flex flex-col items-center py-8">
                <div className="w-full border-dashed border-t border-gray-300 mb-4"></div>
                <h1 className="text-8xl p-16 font-serif xs:text-6xl xl:text-8xl sm:text-7xl">
                    Embrace less, <span className="italic">discover</span> more.
                </h1>
            </div>
            <div className="flex items-center py-8 p-16 pb-0 xs:p-5 sm:p-5 2xl:p-16 2xl:pb-0 xs:pb-0 sm:pb-0">
                <a href="https://omerduran.dev" className="p-8 text-lg font-light ">
                    Ömer Duran ⤴
                </a>
            </div>
            <div className="flex items-center py-8 p-16 pt-0 xs:p-5 sm:p-5 2xl:p-16 2xl:pt-0">
                <a href="https://digitalbeacon.co/report/purestpicks-com" className="pt-0 p-8 font-light text-sm text-emerald-700">
                    this web page has been graded A+
                </a>
            </div>
        </div>
    );
}

export default Footer;