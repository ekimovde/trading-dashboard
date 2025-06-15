# Assets Directory

This directory contains all static assets and styling configurations for the project.

## Structure

```
assets/
├── fonts/         # Custom fonts
├── images/        # Images and icons
├── styles/        # Global styles
│   ├── _mixins.scss    # SCSS mixins
│   ├── _variables.scss # Global variables
│   ├── _breakpoints.scss # Media query breakpoints
│   └── main.scss       # Main stylesheet
└── README.md
```

## Setup

### Fonts

1. Place your font files in the `fonts/` directory
2. Add font declarations in `styles/_variables.scss`:

```scss
@font-face {
  font-family: 'YourFont';
  src:
    url('../fonts/YourFont.woff2') format('woff2'),
    url('../fonts/YourFont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
```

### Mixins

Common mixins are available in `styles/_mixins.scss`:

```scss
// Flexbox
@mixin flex($direction: row, $justify: flex-start, $align: stretch) {
  display: flex;
  flex-direction: $direction;
  justify-content: $justify;
  align-items: $align;
}

// Media queries
@mixin respond-to($breakpoint) {
  @if map-has-key($breakpoints, $breakpoint) {
    @media #{map-get($breakpoints, $breakpoint)} {
      @content;
    }
  }
}
```

### Breakpoints

Configure breakpoints in `styles/_breakpoints.scss`:

```scss
$breakpoints: (
  'mobile': '(max-width: 767px)',
  'tablet': '(min-width: 768px) and (max-width: 1023px)',
  'desktop': '(min-width: 1024px)',
  'large': '(min-width: 1440px)',
);
```

Usage:

```scss
.element {
  width: 100%;

  @include respond-to('tablet') {
    width: 50%;
  }

  @include respond-to('desktop') {
    width: 33.33%;
  }
}
```

## Best Practices

1. Use mixins for repetitive patterns
2. Keep breakpoints consistent across the project
3. Optimize images before adding them to the project
4. Use relative paths for assets
5. Follow BEM naming convention for CSS classes
