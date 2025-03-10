import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Info, X, Globe, Award, Lightbulb, Leaf } from 'lucide-react';

const ProductCard = ({
                         brand,
                         category,
                         productName,
                         image,
                         additionalImages = [],
                         description,
                         link,
                         designer = null,
                         releaseYear = null,
                         materials = [],
                         awards = [],
                         sustainability = null,
                         designStory = null,
                         madeIn = null
                     }) => {
    const [showDetails, setShowDetails] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);
    const allImages = [image, ...additionalImages];

    // ESC tuşu için listener
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') {
                setShowDetails(false);
            }
        };

        if (showDetails) {
            window.addEventListener('keydown', handleEsc);
        }

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [showDetails]);

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        },
        hover: {
            y: -8,
            transition: { duration: 0.4 }
        }
    };

    const detailsVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3 }
        },
        exit: {
            opacity: 0,
            y: 20,
            transition: { duration: 0.2 }
        }
    };

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % allImages.length);
    };

    return (
        <motion.article
            initial="hidden"
            animate="visible"
            whileHover={showDetails ? {} : "hover"}
            variants={cardVariants}
            className="group relative"
        >
            {/* Main Card Content */}
            <div
                className="rounded-lg overflow-hidden bg-white"
                onClick={() => allImages.length > 1 && nextImage()}
            >
                <div className="relative overflow-hidden aspect-square bg-gray-50 cursor-pointer">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={currentImage}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            src={allImages[currentImage]}
                            alt={productName}
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                    </AnimatePresence>

                    {/* Image Counter */}
                    {allImages.length > 1 && (
                        <div className="absolute bottom-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
                            {currentImage + 1}/{allImages.length}
                        </div>
                    )}

                    {/* Quick Info Icons */}
                    <div className="absolute top-3 left-3 flex gap-2">
                        {awards.length > 0 && (
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                className="bg-white/90 p-1.5 rounded-full"
                            >
                                <Award className="w-4 h-4 text-gray-700" />
                            </motion.div>
                        )}
                        {sustainability && (
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                className="bg-white/90 p-1.5 rounded-full"
                            >
                                <Leaf className="w-4 h-4 text-green-600" />
                            </motion.div>
                        )}
                        {designStory && (
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                className="bg-white/90 p-1.5 rounded-full"
                            >
                                <Lightbulb className="w-4 h-4 text-gray-700" />
                            </motion.div>
                        )}
                    </div>
                </div>

                <div className="p-4 space-y-2">
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-900">{brand}</span>
                        <span className="text-xs text-gray-500">{category}</span>
                    </div>

                    <h2 className="text-base text-gray-900">{productName}</h2>

                    <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center gap-2">
                            {designer && (
                                <span className="text-sm text-gray-500">
                                    By {designer}
                                </span>
                            )}
                            {madeIn && (
                                <div className="flex items-center gap-1 text-xs text-gray-500">
                                    <Globe className="w-3 h-3" />
                                    {madeIn}
                                </div>
                            )}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => {
                                e.stopPropagation();
                                setShowDetails(!showDetails);
                            }}
                            className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
                            aria-label="Toggle details"
                        >
                            {showDetails ? (
                                <X className="w-4 h-4 text-gray-600" />
                            ) : (
                                <Info className="w-4 h-4 text-gray-600" />
                            )}
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Product Details Overlay */}
            <AnimatePresence>
                {showDetails && (
                    <motion.div
                        variants={detailsVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-lg p-4 overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="space-y-4">
                            <div className="flex justify-end">
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setShowDetails(false)}
                                    className="p-1.5 rounded-full hover:bg-gray-100"
                                    aria-label="Close details"
                                >
                                    <X className="w-4 h-4 text-gray-600" />
                                </motion.button>
                            </div>

                            {description && (
                                <div>
                                    <h3 className="text-sm font-medium text-gray-900 mb-1">About</h3>
                                    <p className="text-sm text-gray-600">{description}</p>
                                </div>
                            )}

                            {materials.length > 0 && (
                                <div>
                                    <h3 className="text-sm font-medium text-gray-900 mb-1">Materials</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {materials.map((material, index) => (
                                            <span
                                                key={index}
                                                className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                                            >
                                                {material}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {awards.length > 0 && (
                                <div>
                                    <h3 className="text-sm font-medium text-gray-900 mb-1">Awards</h3>
                                    <ul className="text-sm text-gray-600 space-y-1">
                                        {awards.map((award, index) => (
                                            <li key={index} className="flex items-center gap-2">
                                                <Award className="w-4 h-4 text-yellow-500" />
                                                {award}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {sustainability && (
                                <div>
                                    <h3 className="text-sm font-medium text-gray-900 mb-1">Sustainability</h3>
                                    <p className="text-sm text-gray-600">{sustainability}</p>
                                </div>
                            )}

                            {designStory && (
                                <div>
                                    <h3 className="text-sm font-medium text-gray-900 mb-1">Design Story</h3>
                                    <p className="text-sm text-gray-600">{designStory}</p>
                                </div>
                            )}

                            <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm text-gray-900 hover:text-gray-600 transition-colors"
                            >
                                Learn More
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.article>
    );
};

ProductCard.propTypes = {
    brand: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    additionalImages: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    link: PropTypes.string.isRequired,
    designer: PropTypes.string,
    releaseYear: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    materials: PropTypes.arrayOf(PropTypes.string),
    awards: PropTypes.arrayOf(PropTypes.string),
    sustainability: PropTypes.string,
    designStory: PropTypes.string,
    madeIn: PropTypes.string
};

export default ProductCard;