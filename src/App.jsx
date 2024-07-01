import './style/App.css'
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ProductGrid from "./components/ProductGrid.jsx";
import Card from "./components/Card.jsx";

function App() {
    const items = ["ALL WE", "NEED IS LESS"];
    const products = [
        {
            brand: 'Nothing',
            category: 'Electronics',
            productName: 'Ear (1)',
            image: 'assets/Ear (1) (Optimized).webp',
            price: '149,00',
            link: 'https://us.nothing.tech/products/ear-1?ref=some.wtf',
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
            brand: 'James',
            category: 'Electronics',
            productName: 'The Randolph',
            image: 'assets/The Randolph (Optimized).webp',
            price: '2499',
            link: 'https://thejamesbrand.eu/products/the-randolph?variant=39253544304755',
        },
        {
            brand: 'Gestalten',
            category: 'Electronics',
            productName: 'Soft Electronics',
            image: 'assets/softelectronics (Optimized).webp',
            price: '999',
            link: 'https://gestalten.com/products/soft-electronics?resf=jsgjlgr0jxed',
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
            category: 'Electronics',
            productName: 'Walden Meditation Cushion + Mat Set',
            image: 'assets/Walden Meditation Cushion + Mat Set  (Optimized).webp',
            price: '2499',
            link: 'https://walden.us/products/walden-meditation-cushion-mat-set',
        },
        {
            brand: 'Walden',
            category: 'Electronics',
            productName: 'Ritual Incense Set',
            image: 'assets/Ritual Incense Set  (Optimized).webp',
            price: '999',
            link: 'https://walden.us/products/ritual-incense-set?dt_id=284659%3Bap%3A67553',
        },
        {
            brand: 'Veark',
            category: 'Electronics',
            productName: 'Chef\'s Knife',
            image: 'assets/Chef\'s Knife (Optimized).webp',
            price: '2499',
            link: 'https://veark.com/en-de/collections/all-products/products/veark-tripple-drop-forge-deal-sk15-ck16-ck20?ref=ObPJ8aIA',
        },
        {
            brand: 'Veark',
            category: 'Electronics',
            productName: 'Carving Fork',
            image: 'assets/Veark F13 - Carving Fork (Optimized).webp',
            price: '999',
            link: 'https://veark.com/collections/all-products/products/f13-stainless-steel-carving-fork?ref=ObPJ8aIA',
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
            brand: 'BOOX',
            category: 'Electronics',
            productName: 'Note Air 2',
            image: 'assets/BOOX Note Air2 Series  (Optimized).webp',
            price: '999',
            link: 'https://shop.boox.com/products/noteair2',
        },
        {
            brand: 'Noots',
            category: 'Electronics',
            productName: 'Figo Shelves',
            image: 'assets/figoshelves (Optimized).webp',
            price: '999',
            link: 'https://nootspets.com/products/figo-cat-shelves',
        },
        {
            brand: 'Prepara',
            category: 'Electronics',
            productName: 'Herb Savor',
            image: 'assets/herb-saver (Optimized).webp',
            price: '999',
            link: 'https://www.amazon.com/Prepara-PP01-HS100-Herb-Savor/dp/B000YMOXKC/ref=as_li_ss_tl?keywords=prepara+herb+saver&qid=1560987552&s=gateway&sr=8-3&linkCode=sl1&tag=mediumrare07-20&linkId=82c06d389b4bfb666ef84bb4e72489b1&language=en_US',
        },
        {
            brand: 'Finnish Design Shop',
            category: 'Electronics',
            productName: 'Illusion Hangers',
            image: 'assets/Finnish Design Shop   (Optimized).webp',
            price: '999',
            link: 'https://www.finnishdesignshop.com/en-us/product/illusion-hanger-set-of-3-black',
        },
        {
            brand: 'Apt 2B',
            category: 'Electronics',
            productName: 'Audrina Bookcase',
            image: 'assets/bvgos0y.webp',
            price: '999',
            link: 'https://www.apt2b.com/products/audrina-bookcase?variant=41311612141657',
        },



        // Add more products here
    ];


    return (
        <>
            <Navbar></Navbar>
            <div className="xs:p-5 sm:p-20 2xl:p-60 text-9xl p-60 font-serif xs:text-6xl sm:text-7xl xl:text-8xl">
                {items.map((item, i) => (
                    <Card key={i} text={item} index={i}/>
                ))}
            </div>
            <br></br> <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <div className="App xs:p-5 sm:p-20 2xl:p-60 pt-5">
                <ProductGrid products={products}/>
            </div>
            <Footer></Footer>
        </>
    )
}

export default App
