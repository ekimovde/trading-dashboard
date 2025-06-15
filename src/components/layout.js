import { updateLayout } from './components.js';
import { updateHeaderLayout } from './header.js';
import { updateTradePanelLayout } from './tradePanel.js';
import { updateChartPanelLayout } from './chartPanel.js';
import { createChart } from './chart.js';

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
  updateLayout();

  const timerId = setTimeout(() => {
    updateHeaderLayout();
    updateTradePanelLayout();
    updateChartPanelLayout();
    createChart();

    clearTimeout(timerId);
  }, 100);
});

// Отслеживание изменений
if (import.meta.hot) {
  import.meta.hot.accept(mod => {
    updateLayout();
  });
}
