import { renderComponent } from './helpers.js';

export function updateChartPanelLayout() {
  const chartInfoPreview = document.getElementById('chart-info-preview');

  // Загружаем компонент
  if (chartInfoPreview) {
    fetch('/src/components/shared/ChartInfoPreview.html')
      .then(res => res.text())
      .then(html => renderComponent('#chart-info-preview', html));
  }
}
