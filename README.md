# Purest Picks

A simple, minimalistic product showcase website built with modern web development technologies.

## Table of Contents

- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Purest Picks is a sleek and minimalistic website designed to showcase products.

## Technologies Used

- **HTML5**: The latest version of HTML for structuring the web page.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **JavaScript (ES6+)**: The scripting language used for dynamic interactions on the web page.
- **Vite**: A next-generation frontend tooling for development and build process.
- **PostCSS**: A tool for transforming CSS with JavaScript plugins.
- **ESLint**: A tool for identifying and fixing problems in JavaScript code.
- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **NPM**: Node Package Manager, used to manage project dependencies.

## Project Structure

```
minimal-products/
├── node_modules/        # Project dependencies
├── public/              # Static assets
│   └── index.html       # Main HTML file
├── src/                 # Source files
│   ├── assets/          # Images, fonts, etc.
│   ├── components/      # Reusable components
│   ├── pages/           # Page components
│   └── main.js          # Main JavaScript file
├── .eslintrc.cjs        # ESLint configuration
├── .gitignore           # Git ignore file
├── package-lock.json    # Lockfile for npm dependencies
├── package.json         # Project metadata and dependencies
├── postcss.config.js    # PostCSS configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── vite.config.js       # Vite configuration
└── README.md            # Project documentation
```

## Installation

To get a local copy of the project up and running, follow these steps:

1. **Clone the repository**:
    ```sh
    git clone https://github.com/omerdduran/PurestPicks.git
    ```
2. **Navigate to the project directory**:
    ```sh
    cd PurestPicks
    ```
3. **Install dependencies**:
    ```sh
    npm install
    ```

## Usage

To start the development server, run:

```sh
npm run dev
```

This will start the Vite development server and open the project in your default web browser.

To build the project for production, run:

```sh
npm run build
```

This will create an optimized, production-ready build in the `dist` directory.

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.
