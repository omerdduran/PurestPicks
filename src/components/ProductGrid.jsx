import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';

const ProductGrid = ({ products }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
            {products.map((product, index) => (
                <ProductCard
                    key={index}
                    brand={product.brand}
                    category={product.category}
                    productName={product.productName}
                    image={product.image}
                    description={product.description || null}
                    link={product.link}
                    designer={product.designer || null}
                    materials={product.materials || []}
                    awards={product.awards || []}
                    sustainability={product.sustainability || null}
                    designStory={product.designStory || null}
                    madeIn={product.madeIn || null}
                    additionalImages={product.additionalImages || []}
                />
            ))}
        </motion.div>
    );
};

export default ProductGrid;