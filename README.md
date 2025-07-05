# Tailwind CSS Styles Conversion

This project contains the converted Tailwind CSS styles from your original SCSS file. All styles have been converted to use Tailwind's utility classes and component system.

## Files Overview

- **`tailwind-styles.css`** - Main Tailwind CSS file with all converted styles
- **`tailwind.config.js`** - Tailwind configuration file with custom theme extensions
- **`colors.css`** - CSS custom properties for colors and theme support

## Setup Instructions

### 1. Install Tailwind CSS

```bash
npm install -D tailwindcss
npx tailwindcss init
```

### 2. Replace your tailwind.config.js with the provided configuration

### 3. Import the CSS files in your main CSS file

```css
/* Import in your main CSS file */
@import './colors.css';
@import './tailwind-styles.css';
```

### 4. Add to your HTML

```html
<link rel="stylesheet" href="path/to/your/compiled-tailwind.css">
```

## Usage Examples

### Layout Components

```html
<!-- Wrapper -->
<div class="wrapper">
  <main>
    <!-- Your main content -->
  </main>
</div>

<!-- Page container -->
<div class="page">
  <div class="header__container">
    <!-- Page content -->
  </div>
</div>
```

### Typography

```html
<!-- Headings -->
<h1 class="title-1">Main Title</h1>
<h2 class="title-2">Section Title</h2>
<h3 class="title-3">Subsection Title</h3>
<h4 class="title-4">Minor Title</h4>

<!-- Text variants -->
<p class="text-light">Light text content</p>
<p class="text-bold">Bold text content</p>
<p class="text-muted">Muted text content</p>
<p class="text-price">$99.99</p>
```

### Buttons

```html
<!-- Default button -->
<button class="button button_default button_md">Default Button</button>

<!-- Button variants -->
<button class="button button_reverse button_lg">Reverse Button</button>
<button class="button button_transparent button_sm">Transparent Button</button>
<button class="button button_ghost button_md">Ghost Button</button>
<button class="button button_light button_full-size">Light Button</button>

<!-- Button with icon -->
<button class="button button_default button_md">
  <span class="button__icon">
    <!-- Your icon here -->
  </span>
  Button with Icon
</button>

<!-- Disabled button -->
<button class="button button_default button_md _disabled" disabled>
  Disabled Button
</button>
```

### Forms

```html
<!-- Input -->
<input type="text" class="input" placeholder="Enter text">

<!-- Form group -->
<div class="group">
  <input type="email" class="input" placeholder="Email">
  <input type="password" class="input" placeholder="Password">
</div>

<!-- Checkbox -->
<div class="checkbox">
  <label class="checkbox__label">
    <input type="checkbox" class="checkbox__index">
    Checkbox label
  </label>
</div>

<!-- Select -->
<div class="select-container">
  <select class="rating-select">
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>
</div>
```

### Utility Classes

```html
<!-- Hidden element -->
<div class="_hidden">This element is hidden</div>

<!-- Error text -->
<p class="error">Error message</p>

<!-- Title block -->
<div class="title-block">
  <h2>Section Title</h2>
  <button class="button button_default button_sm">Action</button>
</div>

<!-- Image background -->
<div class="ibg" style="background-image: url('image.jpg');">
  <img src="image.jpg" alt="Background image">
</div>
```

## Custom Color Variables

The styles use CSS custom properties for theming. You can customize these in `colors.css`:

```css
:root {
  --color-background: #ffffff;
  --color-text: #212529;
  --color-primary: #007bff;
  --color-accent: #28a745;
  /* ... other colors */
}
```

## Theme Support

### Manual Theme Switching

Add theme classes to your body or root element:

```html
<body class="theme-light">
  <!-- Light theme -->
</body>

<body class="theme-dark">
  <!-- Dark theme -->
</body>
```

### Automatic Dark Mode

The styles automatically support system dark mode preferences through CSS media queries.

## Responsive Design

The styles include responsive breakpoints:

- **Mobile**: Default styles
- **Tablet**: `md:` prefix (1024px and up)
- **Desktop**: `lg:` prefix (1024px and up)
- **Mobile Landscape**: `mobile-landscape:` prefix (768px and up)

## Custom Utilities

### Adaptive Spacing

```html
<!-- Elements with adaptive margins -->
<section class="adaptive-margin-top adaptive-margin-bottom">
  <!-- Content -->
</section>

<!-- Buttons with adaptive padding -->
<button class="button adaptive-padding-lg">Large Button</button>
<button class="button adaptive-padding-md">Medium Button</button>
```

## Font Requirements

Make sure to include the required fonts in your project:

```html
<!-- Add to your HTML head -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

For Gilroy font, you'll need to include it from your assets or font service.

## Notes

- All original functionality has been preserved
- The styles maintain the same visual appearance as the original SCSS
- CSS custom properties are used for theming and consistency
- Responsive design patterns are maintained using Tailwind's responsive utilities
- The configuration supports both light and dark themes

## Migration Tips

1. Replace your SCSS imports with the new CSS imports
2. Update your HTML classes to use the new Tailwind component classes
3. Configure your build process to compile Tailwind CSS
4. Test all components to ensure visual consistency
5. Customize colors in `colors.css` to match your brand colors