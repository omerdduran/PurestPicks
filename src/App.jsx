import './style/App.css'
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ProductGrid from "./components/ProductGrid.jsx";
import Card from "./components/Card.jsx";

function App() {
    const items = ["ALL WE", "NEED IS LESS"];
    const products = [
        {
            brand: 'Apple',
            category: 'Electronics',
            productName: 'MacBook Pro',
            image: 'https://i.hizliresim.com/6yhi1gk.jpg',
            price: '2499',
            link: 'https://example.com/macbook-pro',
        },
        {
            brand: 'Samsung',
            category: 'Electronics',
            productName: 'Galaxy S21',
            image: 'https://i.hizliresim.com/6yhi1gk.jpg',
            price: '999',
            link: 'https://example.com/galaxy-s21',
        },
        {
            brand: 'Apple',
            category: 'Electronics',
            productName: 'MacBook Pro',
            image: 'https://i.hizliresim.com/6yhi1gk.jpg',
            price: '2499',
            link: 'https://example.com/macbook-pro',
        },
        {
            brand: 'Samsung',
            category: 'Electronics',
            productName: 'Galaxy S21',
            image: 'https://i.hizliresim.com/6yhi1gk.jpg',
            price: '999',
            link: 'https://example.com/galaxy-s21',
        },
        {
            brand: 'Apple',
            category: 'Electronics',
            productName: 'MacBook Pro',
            image: 'https://i.hizliresim.com/6yhi1gk.jpg',
            price: '2499',
            link: 'https://example.com/macbook-pro',
        },
        {
            brand: 'Samsung',
            category: 'Electronics',
            productName: 'Galaxy S21',
            image: 'https://i.hizliresim.com/6yhi1gk.jpg',
            price: '999',
            link: 'https://example.com/galaxy-s21',
        },
        {
            brand: 'Apple',
            category: 'Electronics',
            productName: 'MacBook Pro',
            image: 'https://i.hizliresim.com/6yhi1gk.jpg',
            price: '2499',
            link: 'https://example.com/macbook-pro',
        },
        {
            brand: 'Samsung',
            category: 'Electronics',
            productName: 'Galaxy S21',
            image: 'https://i.hizliresim.com/6yhi1gk.jpg',
            price: '999',
            link: 'https://example.com/galaxy-s21',
        },
        {
            brand: 'Apple',
            category: 'Electronics',
            productName: 'MacBook Pro',
            image: 'https://i.hizliresim.com/6yhi1gk.jpg',
            price: '2499',
            link: 'https://example.com/macbook-pro',
        },
        {
            brand: 'Samsung',
            category: 'Electronics',
            productName: 'Galaxy S21',
            image: 'https://i.hizliresim.com/6yhi1gk.jpg',
            price: '999',
            link: 'https://example.com/galaxy-s21',
        },


        // Add more products here
    ];


    return (
        <>
            <Navbar></Navbar>
            <div className="text-9xl p-60 font-serif">
                {items.map((item, i) => (
                    <Card key={i} text={item} index={i}/>
                ))}
            </div>
            <br></br> <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <div className="App px-60 pt-5">
                <ProductGrid products={products}/>
            </div>
            <Footer></Footer>
        </>
    )
}

export default App
