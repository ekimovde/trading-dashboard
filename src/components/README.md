# Components

This directory contains all the components used in the trading dashboard application.

## Structure

- `layout/` - Main layout components (Sidebar, Header, ChartPanel, TradePanel)
- `shared/` - Shared components (Tabs, ChartInfoPreview, SummaryInfo, Badge)
- `ui/` - UI components (Button, Link, Input, InputNumber, InputCurrency, Select, Switch, FastButtons, Tabs)
- `helpers.js` - Utility functions for component rendering and management

## Component Guidelines

1. Each component should be in its own directory with the following structure:

   ```
   ComponentName/
   ├── ComponentName.html
   └── ComponentName.js (if needed)
   ```

2. Components should:
   - Be loaded dynamically using fetch
   - Use BEM naming convention for CSS classes
   - Follow semantic HTML structure
   - Be rendered using the renderComponent helper
   - Have scoped SCSS styles

## Best Practices

- Use semantic HTML5 elements
- Follow BEM methodology for CSS
- Keep components modular and self-contained
- Use CSS custom properties for theming
- Implement proper error handling
- Use event delegation where appropriate
- Ensure responsive design
- Maintain accessibility standards
- Use SCSS mixins and functions for reusability
- Keep JavaScript minimal and focused

## Usage Example

```javascript
// components.js
export function updateLayout() {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = `
    <div class="home-page">
      <div id="sidebar"></div>
      <div class="home-page__wrapper">
        <div id="header"></div>
        <main class="home-page__content">
          <div id="chart-panel"></div>
          <div id="trade-panel"></div>
        </main>
      </div>
    </div>
  `;

  // Load components
  fetch('/src/components/layout/Sidebar.html')
    .then(res => res.text())
    .then(html => renderComponent('#sidebar', html));

  fetch('/src/components/layout/Header.html')
    .then(res => res.text())
    .then(html => renderComponent('#header', html));
}
```

```html
<!-- index.html -->
<div class="component">
  <div class="component__element">Content</div>
</div>
```
