
# RAXIOR - IT Agency Website

This is a standard HTML, CSS, and JavaScript implementation of the RAXIOR IT Agency website, converted from a React-based Lovable project.

## Project Structure

```
converted/
├── css/
│   ├── components.css    # Component-specific styles
│   ├── reset.css         # CSS reset and normalization
│   ├── styles.css        # Main site styles
│   └── variables.css     # CSS variables and theming
├── img/
│   └── logo.png          # Site logo (needs to be added)
├── js/
│   └── main.js           # JavaScript for interactive elements
├── index.html            # Home page
├── services.html         # Services page (to be created)
├── portfolio.html        # Portfolio page (to be created)
├── about.html            # About page (to be created)
└── contact.html          # Contact page (to be created)
```

## Getting Started

1. Download the entire `converted` directory to your local machine
2. Add your logo to the `img` folder (rename to `logo.png` or update references in the HTML/CSS)
3. Open `index.html` in your browser to view the site

## Editing the Site

### Modifying HTML

Edit the HTML files directly to change content or structure. The site uses semantic HTML5 elements for better accessibility and SEO.

### Styling

The styling is organized into multiple CSS files:

- `variables.css` - Modify colors, fonts, and spacing variables here
- `reset.css` - Provides consistent styling across browsers
- `styles.css` - Main site layout and section styling
- `components.css` - Reusable component styles (buttons, cards, etc.)

### JavaScript

The `main.js` file contains all the interactive functionality including:

- Mobile menu toggle
- Service item rotation
- Simple animations

## Adding New Pages

To create additional pages:

1. Copy `index.html` and rename it (e.g., `services.html`)
2. Update the page title and content
3. Ensure navigation links are updated across all pages

## Customization

### Changing Colors

The color scheme is defined in `variables.css` using CSS custom properties. Update the hex values to match your brand colors.

### Typography

The site uses Google Fonts:
- Montserrat for headings
- Inter for body text

To change fonts, update the Google Fonts link in `index.html` and the font family variables in `variables.css`.

## Browser Compatibility

This site is compatible with modern browsers (Chrome, Firefox, Safari, Edge).

## Need More Advanced Features?

This is a static HTML version of the site. If you need more advanced features like:

- Contact form submission
- Dynamic content
- User authentication

You would need to implement a backend solution or use third-party services.
