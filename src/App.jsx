import { useState } from 'react';
import { Tab } from '@headlessui/react';
import clsx from 'clsx';
import './style/App.css';
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ProductGrid from "./components/ProductGrid.jsx";
import Card from "./components/Card.jsx";
import MagicUIButton from "./components/MagicUIButton.jsx";

function App() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const items = ["ALL WE", "NEED IS LESS"];
    const categories = ['All Products', 'Electronics', 'Home & Kitchen', 'Accessories', 'Outdoor & Furniture', 'Books & Pet Supplies'];

    const handleClick = () => {
        console.log("Button clicked!");
    };

    const products = [
        {
            brand: 'Fellow',
            category: 'Home',
            productName: 'Clyde Electric Kettle',
            image: 'assets/product-3.webp',
            price: '999',
            link: 'https://www.finnishdesignshop.com/en-us/product/illusion-hanger-set-of-3-black',
        },
        {
            brand: 'Noots',
            category: 'Pet Supplies',
            productName: 'Figo Shelves',
            image: 'assets/figoshelves (Optimized).webp',
            price: '999',
            link: 'https://nootspets.com/products/figo-cat-shelves',
        },
        {
            brand: 'James',
            category: 'Accessories',
            productName: 'The Randolph',
            image: 'assets/The Randolph (Optimized).webp',
            price: '2499',
            link: 'https://thejamesbrand.eu/products/the-randolph?variant=39253544304755',
        },
        {
            brand: 'Apple',
            category: 'Electronics',
            productName: 'AirPods Max',
            image: 'assets/AirPods Max (Optimized).webp',
            price: '579',
            link: 'https://www.apple.com/shop/buy-airpods/airpods-max',
        },
        {
            brand: 'Veark',
            category: 'Kitchen',
            productName: 'Chef\'s Knife',
            image: 'assets/Chef\'s Knife (Optimized).webp',
            price: '2499',
            link: 'https://veark.com/en-de/collections/all-products/products/veark-tripple-drop-forge-deal-sk15-ck16-ck20?ref=ObPJ8aIA',
        },
        {
            brand: 'Transparent',
            category: 'Electronics',
            productName: 'Small Transparent Speaker',
            image: 'assets/Transparent Speaker (Optimized).webp',
            price: '2499',
            link: 'https://transpa.rent/de/small-transparent-speaker-metal',
        },
        {
            brand: 'Walden',
            category: 'Home',
            productName: 'Walden Meditation Cushion + Mat Set',
            image: 'assets/waldenmeditate.jpeg',
            price: '2499',
            link: 'https://walden.us/products/walden-meditation-cushion-mat-set',
        },
        {
            brand: 'BOOX',
            category: 'Electronics',
            productName: 'Note Air 2',
            image: 'assets/BOOX Note Air2 Series  (Optimized).webp',
            price: '999',
            link: 'https://shop.boox.com/products/noteair2',
        },
        {
            brand: 'Solo Stove',
            category: 'Outdoor',
            productName: 'Ranger 2.0',
            image: 'assets/product-2.webp',
            price: '999',
            link: 'https://www.solostove.com/en-de/p/solo-stove-ranger',
        },
        {
            brand: 'Finnish Design Shop',
            category: 'Home',
            productName: 'Illusion Hangers',
            image: 'assets/Finnish Design Shop   (Optimized).webp',
            price: '999',
            link: 'https://www.finnishdesignshop.com/en-us/product/illusion-hanger-set-of-3-black',
        },
        {
            brand: 'Veark',
            category: 'Kitchen',
            productName: 'Carving Fork',
            image: 'assets/Veark F13 - Carving Fork (Optimized).webp',
            price: '999',
            link: 'https://veark.com/collections/all-products/products/f13-stainless-steel-carving-fork?ref=ObPJ8aIA',
        },
        {
            brand: 'Walden',
            category: 'Home',
            productName: 'Ritual Incense Set',
            image: 'assets/Ritual Incense Set  (Optimized).webp',
            price: '999',
            link: 'https://walden.us/products/ritual-incense-set?dt_id=284659%3Bap%3A67553',
        },
        {
            brand: 'The Light Phone',
            category: 'Electronics',
            productName: 'Light Phone III',
            image: 'assets/Light Phone III  (Optimized).webp',
            price: '999',
            link: 'https://www.thelightphone.com',
        },
        {
            brand: 'Prepara',
            category: 'Kitchen',
            productName: 'Herb Savor',
            image: 'assets/herb-saver (Optimized).webp',
            price: '999',
            link: 'https://www.amazon.com/Prepara-PP01-HS100-Herb-Savor/dp/B000YMOXKC/ref=as_li_ss_tl?keywords=prepara+herb+saver&qid=1560987552&s=gateway&sr=8-3&linkCode=sl1&tag=mediumrare07-20&linkId=82c06d389b4bfb666ef84bb4e72489b1&language=en_US',
        },
        {
            brand: 'Punkt.',
            category: 'Electronics',
            productName: 'MP02',
            image: 'assets/product.webp',
            price: '999',
            link: 'https://www.punkt.ch/en/products/mp02-4g-mobile-phone/',
        },
        {
            brand: 'Nothing',
            category: 'Electronics',
            productName: 'Ear (1)',
            image: 'assets/Ear (1) (Optimized).webp',
            price: '149,00',
            link: 'https://us.nothing.tech/products/ear-1?ref=some.wtf',
        },
        {
            brand: 'Gestalten',
            category: 'Books',
            productName: 'Soft Electronics',
            image: 'assets/softelectronics (Optimized).webp',
            price: '999',
            link: 'https://gestalten.com/products/soft-electronics?resf=jsgjlgr0jxed',
        },
        {
            brand: 'Apt 2B',
            category: 'Furniture',
            productName: 'Audrina Bookcase',
            image: 'assets/bvgos0y.webp',
            price: '999',
            link: 'https://www.apt2b.com/products/audrina-bookcase?variant=41311612141657',
        },
    ];


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
        <>
            <Navbar />
            <div className="flex justify-center">
                <MagicUIButton
                    buttonText="10 new products added"
                    buttonColor="from-green-400"
                    glowColor="rgba(34, 197, 94, 0.6)"
                    iconSize={5}
                    onClick={handleClick}
                />
            </div>
            <div className="w-full py-32 xs:px-5 sm:px-20 2xl:px-40 font-serif xs:text-6xl sm:text-7xl xl:text-8xl">
                {items.map((item, i) => (
                    <Card key={i} text={item} index={i} />
                ))}
            </div>
            <div className="App xs:p-5 sm:p-20 2xl:p-60 pt-5">
                <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
                    <Tab.List className="flex justify-center space-x-2 sm:space-x-6 flex-wrap mb-16">
                        {categories.map((category) => (
                            <Tab
                                key={category}
                                className={({ selected }) => clsx(
                                    'px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-300 ease-in-out',
                                    'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400',
                                    selected
                                        ? 'bg-gray-900 text-white shadow-lg transform scale-105'
                                        : 'text-gray-500 hover:bg-gray-200 hover:text-gray-900'
                                )}
                            >
                                {category}
                            </Tab>
                        ))}
                    </Tab.List>
                    <Tab.Panels>
                        {categories.map((category, idx) => (
                            <Tab.Panel key={idx}>
                                <ProductGrid products={filteredProducts(category)} />
                            </Tab.Panel>
                        ))}
                    </Tab.Panels>
                </Tab.Group>
            </div>
            <Footer />
        </>
    );
}

export default App;
