# Simple Counter App

A minimalist counter application built with vanilla JavaScript, featuring persistent storage and a clean, modern UI.

## Features

- ➕ Increment counter
- ➖ Decrement counter (won't go below 0)
- 🔄 Reset functionality
- 💾 Persistent storage using localStorage
- 🎨 Modern UI with hover effects
- 📱 Responsive design

## Live Demo

[View Live Demo]([your-github-pages-url-here](https://hamardikan.github.io/01-event-handler/)]) <!-- Add your GitHub Pages URL when deployed -->

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- Local Storage API

## Getting Started

### Prerequisites

- Any modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/counter-app.git
```

2. Navigate to the project directory:
```bash
cd counter-app
```

3. Open `index.html` in your web browser

Or simply double-click the `index.html` file to open it in your default web browser.

## Project Structure

```
counter-app/
│
├── index.html          # Main HTML file
├── styles.css         # CSS styles and animations
├── script.js         # JavaScript functionality
└── README.md        # Project documentation
```

## How It Works

- The counter starts at 0 (or the last saved value)
- Click "Increment" to increase the count
- Click "Decrement" to decrease the count (minimum value is 0)
- Click "Reset" to set the counter back to 0
- The count persists even after page refresh using localStorage

## Code Highlights

```javascript
// Example of localStorage implementation
let count = parseInt(localStorage.getItem('count')) || 0;

function updateCounter() {
    counterDisplay.textContent = count;
    localStorage.setItem('count', count.toString());
}
```

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by various counter applications
- Built as part of learning DOM manipulation and localStorage
- CSS design inspired by modern UI/UX trends

## Future Enhancements

- [ ] Add animation when counting
- [ ] Add sound effects
- [ ] Dark mode toggle
- [ ] Count history feature
- [ ] Custom increment/decrement values

---
Created with ❤️ by Hamardikan
