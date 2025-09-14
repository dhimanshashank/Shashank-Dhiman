# Shashank Portfolio - Frontend

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## Features

- ⚡ **Vite** - Lightning fast build tool
- ⚛️ **React 18** - Latest React features
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🌙 **Dark Mode** - Toggle between light and dark themes
- 📱 **Responsive Design** - Works on all devices
- 🚀 **Modern UI** - Beautiful and intuitive interface
- ⚡ **Fast Performance** - Optimized for speed

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Navigate to the frontend directory:
   ```bash
   cd Frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
Frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Technologies Used

- **React** - JavaScript library for building user interfaces
- **Vite** - Next generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS post-processor
- **ESLint** - Code linting

## Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom primary colors
      }
    }
  }
}
```

### Components
All components are located in the `src/components/` directory and can be easily modified to match your needs.

## Deployment

To build the project for production:

```bash
npm run build
```

The built files will be in the `dist` directory, ready to be deployed to any static hosting service.

## License

This project is open source and available under the [MIT License](LICENSE).
