import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Mail } from 'lucide-react';

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Scroll handler
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`w-full fixed top-0 z-50 transition-all duration-300 ${
                isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-white'
            }`}
        >
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-row w-full py-2 mx-auto items-center justify-between xs:px-5 sm:px-20 2xl:px-40">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center text-black"
                    >
                        <a className="font-light tracking-tight text-black text-xl" href="/">
                            <span>PurestPicks</span>
                        </a>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {/* Submit Button */}
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="font-light inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                            href="mailto:hi@omerduran.dev?subject=Hi! I wanna submit a product"
                            role="button"
                        >
                            <Mail className="w-4 h-4" />
                            Submit Product
                        </motion.a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </motion.button>
                </div>

                {/* Mobile Menu */}
                <motion.div
                    initial={false}
                    animate={isMobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                    className="md:hidden overflow-hidden bg-white border-t"
                >
                    <div className="px-5 space-y-4">
                        <a
                            className="block font-light text-center w-full px-5 py-2.5 text-sm text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors duration-300"
                            href="mailto:hi@omerduran.dev?subject=Hi! I wanna submit a product"
                            role="button"
                        >
                            Submit Product
                        </a>
                    </div>
                </motion.div>
            </div>
        </motion.header>
    );
}

export default Navbar;