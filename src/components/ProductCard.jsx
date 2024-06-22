import { motion } from 'framer-motion';

const ProductCard = ({ brand, category, productName, image, price, link }) => {
    return (
        <motion.div
            className="border rounded-lg p-4 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >

            <img src={image} alt={productName} className="w-full h-3/4 object-cover mb-4"/>
            <div className="p-">
                <div className="text-lg font-light text-gray-700 mb-2">{brand}<span
                    className="text-gray-500 font-light text-sm p-4">{category}</span></div>

            </div>
            <h2 className="text-xl font-semibold mb-1">{productName}
            </h2>


        </motion.div>
    );
};

export default ProductCard;
