import { motion } from 'framer-motion';
import ProductCard from './ProductCard';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const ProductGrid = ({ products }) => {
    return (
        <motion.div
            className="container mx-auto px-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((product, index) => (
                    <ProductCard
                        key={index}
                        brand={product.brand}
                        category={product.category}
                        productName={product.productName}
                        image={product.image}
                        price={product.price}
                        link={product.link}
                    />
                ))}
            </div>
        </motion.div>
    );
};

export default ProductGrid;
