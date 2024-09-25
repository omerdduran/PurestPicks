import PropTypes from 'prop-types';

const MagicUIButton = ({
                           buttonText = "10 new products added",
                           gradientFrom = "from-pink-500",
                           gradientTo = "to-purple-600",
                           iconSize = 4,
                           onClick,
                       }) => {
    return (
        <div className="relative">
            <button
                onClick={onClick}
                aria-label={buttonText}
                className={`flex items-center space-x-2 bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-full shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-300 ease-in-out transform hover:-translate-y-1`}
                style={{
                    boxShadow: '0 4px 15px rgba(255, 0, 255, 0.6)', // Glow effect
                }}
            >
                <span className="text-sm sm:text-base">{buttonText}</span>
                <svg
                    className={`w-${iconSize} h-${iconSize} sm:w-${iconSize + 1} sm:h-${iconSize + 1}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >
                    <title>Arrow Icon</title>
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            </button>
        </div>
    );
};

MagicUIButton.propTypes = {
    buttonText: PropTypes.string,
    gradientFrom: PropTypes.string,
    gradientTo: PropTypes.string,
    iconSize: PropTypes.number,
    onClick: PropTypes.func,
};

MagicUIButton.defaultProps = {
    buttonText: "10 new products added",
    gradientFrom: "from-pink-500",
    gradientTo: "to-purple-600",
    iconSize: 4,
    onClick: null,
};

export default MagicUIButton;
