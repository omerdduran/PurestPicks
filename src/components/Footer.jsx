


function Footer() {
    return (
        <div>
            <div className="flex flex-col items-center py-44 grid grid-cols-2 gap-4 px16 ">
                <div>
                    <h1 className="text-3xl px-72 font-serif ">What is <br></br>Minimalism?

                    </h1>
                </div>
                <div>
                    <br></br><br></br><br></br><br></br>
                    <p className="text-2xl pr-72 font-extralight">Minimalism is defined as a design or style in which
                        the
                        simplest and fewest elements are used to create the maximum effect. Minimalism had its origins
                        in the arts—with the artwork featuring simple lines, only a few colors, and careful placement of
                        those lines and colors.</p>
                </div>
            </div>
            <div className="flex flex-col items-center py-8">
                <div className="w-full border-dashed border-t border-gray-300 mb-4"></div>
                <h1 className="text-8xl p-16 font-serif ">
                    Embrace less, <span className="italic">discover</span> more.
                </h1>
            </div>
            <div className="flex items-center py-8 p-16 pb-0">
                <a href="https://omerduran.dev" className="p-8 text-lg font-light ">
                    Ömer Duran ⤴
                </a>
            </div>
            <div className="flex items-center py-8 p-16 pt-0">
                <a href="https://digitalbeacon.co/report/purest-picks-vercel-app" className="pt-0 p-8 font-light text-sm text-emerald-700">
                    this web page has been graded A+
                </a>
            </div>
        </div>
    );
}

export default Footer;