import React from 'react';
import PropTypes from 'prop-types';
import { ChevronRight } from 'lucide-react';

const MagicUIButton = ({
                           buttonText,
                           buttonColor,
                           glowColor,
                           onClick
                       }) => {
    // Tailwind sınıflarını statik olarak tanımlayalım
    const buttonClasses = `
    flex items-center gap-2 
    bg-gradient-to-r ${buttonColor} to-purple-600 
    text-white font-medium
    py-2 px-4 sm:py-3 sm:px-6 
    rounded-full 
    shadow-lg hover:shadow-xl 
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 
    transition-all duration-300 
    hover:translate-y-[-2px]
    disabled:opacity-50 disabled:cursor-not-allowed
    text-sm sm:text-base
  `;

    return (
        <button
            onClick={onClick}
            className={buttonClasses}
            style={{
                boxShadow: `0 4px 15px ${glowColor}`,
                WebkitTapHighlightColor: 'transparent'
            }}
            type="button"
            aria-label={buttonText}
        >
            <span>{buttonText}</span>
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
    );
};

MagicUIButton.propTypes = {
    buttonText: PropTypes.string,
    buttonColor: PropTypes.string,
    glowColor: PropTypes.string,
    onClick: PropTypes.func
};

MagicUIButton.defaultProps = {
    buttonText: "10 new products added",
    buttonColor: "from-green-400",
    glowColor: "rgba(34, 197, 94, 0.6)",
    onClick: () => {}
};

export default MagicUIButton;