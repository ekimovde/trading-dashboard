import { renderComponent } from './helpers.js';

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

  // Загружаем компоненты
  fetch('/src/components/layout/Sidebar.html')
    .then(res => res.text())
    .then(html => renderComponent('#sidebar', html));

  fetch('/src/components/layout/Header.html')
    .then(res => res.text())
    .then(html => renderComponent('#header', html));

  fetch('/src/components/layout/ChartPanel.html')
    .then(res => res.text())
    .then(html => renderComponent('#chart-panel', html));

  fetch('/src/components/layout/TradePanel.html')
    .then(res => res.text())
    .then(html => renderComponent('#trade-panel', html));
}
