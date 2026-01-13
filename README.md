# Portfolio Website

A professional, dark-themed portfolio website showcasing full-stack development projects and technical skills.

## Features

- **Modern Dark Theme**: Clean, professional design with a dark color scheme
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Smooth Animations**: Scroll-triggered animations using Intersection Observer API
- **Interactive Navigation**: Smooth scrolling with active section highlighting
- **Project Showcase**: Detailed project cards with technologies and features
- **Contact Form**: Functional contact form with validation
- **Performance Optimized**: Vanilla JavaScript, no build tools, fast loading

## Technologies Used

- HTML5
- CSS3 (with CSS Variables)
- Vanilla JavaScript (ES6+)
- GitHub Pages (deployment)

## Project Structure

```
portfolio/
├── index.html              # Main HTML file
├── css/
│   ├── style.css          # Main stylesheet with dark theme
│   └── animations.css     # Animation keyframes
├── js/
│   ├── main.js            # Project data and form handling
│   ├── navigation.js      # Navigation and smooth scrolling
│   └── animations.js      # Scroll animations
├── assets/
│   ├── images/           # Project images
│   └── icons/            # SVG icons
├── README.md             # This file
└── .gitignore           # Git ignore file
```

## Projects Showcased

1. **Taller Mecánico** - Automotive repair shop management system
2. **Portfolio Iker** - Modern portfolio website
3. **Fitness App** - Full-stack fitness tracking application
4. **Facturas** - Invoice management system

## Setup

1. Clone the repository:
```bash
git clone https://github.com/beerandbytes/portfolio.git
cd portfolio
```

2. Open `index.html` in your browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server
```

3. Visit `http://localhost:8000` in your browser

## Deployment

This portfolio is deployed on GitHub Pages:

1. Push code to the `main` branch
2. Go to repository Settings → Pages
3. Select `main` branch and `/ (root)` folder
4. Site will be live at: `https://beerandbytes.github.io/portfolio/`

## Customization

### Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --bg-primary: #0a0a0a;
    --accent-primary: #3b82f6;
    /* ... */
}
```

### Projects
Edit the `projects` array in `js/main.js` to add or modify projects.

### Content
Edit `index.html` to update personal information, about section, and other content.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contact

- **GitHub**: [beerandbytes](https://github.com/beerandbytes)
- **Email**: [Your Email]

---

Built with ❤️ by Ousama Merrakchi
