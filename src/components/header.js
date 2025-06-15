import { renderComponent } from './helpers.js';

export function updateHeaderLayout() {
  const headerSearch = document.getElementById('header-search');
  if (!headerSearch) return;

  // Загружаем компонент
  fetch('/src/components/ui/Input.html')
    .then(res => res.text())
    .then(html => renderComponent('#header-search', html));
}
