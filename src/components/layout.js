import { updateLayout } from './components.js';
import { updateHeaderLayout } from './header.js';
import { updateTradePanelLayout } from './tradePanel.js';

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
  updateLayout();

  const timerId = setTimeout(() => {
    updateHeaderLayout();
    updateTradePanelLayout();

    clearTimeout(timerId);
  }, 100);
});

// Отслеживание изменений
if (import.meta.hot) {
  import.meta.hot.accept(mod => {
    console.log('HMR update');
    updateLayout();
  });
}
