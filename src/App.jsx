import { useState, lazy, Suspense } from 'react';
import { Tab } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import products from "@/lib/utils.js";

// Lazy load components
const Navbar = lazy(() => import("./components/Navbar.jsx"));
const Footer = lazy(() => import("./components/Footer.jsx"));
const ProductGrid = lazy(() => import("./components/ProductGrid.jsx"));
const Card = lazy(() => import("./components/Card.jsx"));
const MagicUIButton = lazy(() => import("./components/MagicUIButton.jsx"));

// Loading fallback component
const ComponentLoader = () => (
    <div className="flex items-center justify-center p-4 h-full">
        <div className="animate-pulse bg-gray-200 rounded-md w-full h-full"></div>
    </div>
);

function App() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const items = ["ALL WE", "NEED IS LESS"];
    const categories = ['All Products', 'Electronics', 'Home & Kitchen', 'Accessories', 'Outdoor & Furniture', 'Books & Pet Supplies'];

    // Animate variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    const filteredProducts = (category) => {
        if (category === 'All Products') {
            return products;
        }
        if (category === 'Home & Kitchen') {
            return products.filter(p => ['Home', 'Kitchen'].includes(p.category));
        }
        if (category === 'Outdoor & Furniture') {
            return products.filter(p => ['Outdoor', 'Furniture'].includes(p.category));
        }
        if (category === 'Books & Pet Supplies') {
            return products.filter(p => ['Books', 'Pet Supplies'].includes(p.category));
        }
        return products.filter(p => p.category === category);
    };

    return (
        <div className="min-h-screen bg-white">
            <Suspense fallback={<ComponentLoader />}>
                <Navbar/>
            </Suspense>

            {/* Hero Section */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="py-16 sm:py-24"
                >
                    {/* New Products Button */}
                    <motion.div
                        variants={itemVariants}
                        className="flex justify-center mb-12"
                    >
                        <Suspense fallback={<ComponentLoader />}>
                            <MagicUIButton
                                buttonText="8 new products added"
                                buttonColor="from-green-400"
                                glowColor="rgba(34, 197, 94, 0.6)"
                                iconSize={1}
                                onClick={() => console.log("New products clicked")}
                            />
                        </Suspense>
                    </motion.div>
                    <br></br> <br></br> <br></br> <br></br> <br></br>

                    {/* Hero Text */}
                    <motion.div
                        variants={itemVariants}
                        className="w-full font-serif xs:text-6xl sm:text-7xl xl:text-8xl space-y-4"
                    >
                        {items.map((item, i) => (
                            <Suspense key={i} fallback={<ComponentLoader />}>
                                <Card text={item} index={i}/>
                            </Suspense>
                        ))}
                    </motion.div>
                </motion.div>
            </section>
            <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>

            {/* Products Section */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
                    {/* Categories */}
                    <Tab.List className="flex justify-center space-x-2 sm:space-x-6 flex-wrap mb-16">
                        {categories.map((category) => (
                            <Tab
                                key={category}
                                className={({selected}) => clsx(
                                    'px-4 py-2 text-xs sm:text-sm font-medium rounded-full',
                                    'transition-all duration-300 ease-in-out',
                                    'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400',
                                    'disabled:opacity-50',
                                    selected
                                        ? 'bg-gray-900 text-white shadow-lg transform scale-105'
                                        : 'text-gray-500 hover:bg-gray-200 hover:text-gray-900'
                                )}
                            >
                                {category}
                            </Tab>
                        ))}
                    </Tab.List>

                    {/* Product Grid */}
                    <Tab.Panels>
                        <AnimatePresence mode="wait">
                            {categories.map((category, idx) => (
                                <Tab.Panel
                                    key={idx}
                                    className="focus:outline-none"
                                >
                                    <motion.div
                                        initial={{opacity: 0, y: 20}}
                                        animate={{opacity: 1, y: 0}}
                                        exit={{opacity: 0, y: -20}}
                                        transition={{duration: 0.3}}
                                    >
                                        <Suspense fallback={<ComponentLoader />}>
                                            <ProductGrid products={filteredProducts(category)}/>
                                        </Suspense>
                                    </motion.div>
                                </Tab.Panel>
                            ))}
                        </AnimatePresence>
                    </Tab.Panels>
                </Tab.Group>
            </section>

            <Suspense fallback={<ComponentLoader />}>
                <Footer/>
            </Suspense>
        </div>
    );
}

export default App;