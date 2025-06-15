import { renderComponent } from './helpers.js';

export function updateTradePanelLayout() {
  const tradePanelTabs = document.getElementById('trade-panel-tabs');
  const tradePanelAction = document.getElementById('trade-panel-action');
  const tradePanelLink = document.getElementById('trade-panel-link');
  const tradePanelSwitch = document.getElementById('trade-panel-switch');
  const tradePanelBadge = document.getElementById('trade-panel-badge');

  const tradePanelSelectOrderType = document.getElementById('trade-panel-select-order-type');
  const tradePanelInputQuantity = document.getElementById('trade-panel-input-quantity');
  const tradePanelSelectTimeInForce = document.getElementById('trade-panel-select-time-in-force');
  const tradePanelInputStopPrice = document.getElementById('trade-panel-input-stop-price');

  const tradePanelSummaryInfo = document.getElementById('trade-panel-summary-info');
  const tradePanelFastButtons = document.getElementById('trade-panel-fast-buttons');

  // Загружаем компоненты
  if (tradePanelTabs) {
    fetch('/src/components/shared/Tabs.html')
      .then(res => res.text())
      .then(html => renderComponent('#trade-panel-tabs', html));
  }

  if (tradePanelAction) {
    fetch('/src/components/ui/Button.html')
      .then(res => res.text())
      .then(html => renderComponent('#trade-panel-action', html));
  }

  if (tradePanelLink) {
    fetch('/src/components/ui/Link.html')
      .then(res => res.text())
      .then(html => renderComponent('#trade-panel-link', html));
  }

  if (tradePanelSwitch) {
    fetch('/src/components/ui/Switch.html')
      .then(res => res.text())
      .then(html => renderComponent('#trade-panel-switch', html));
  }

  if (tradePanelBadge) {
    fetch('/src/components/shared/Badge.html')
      .then(res => res.text())
      .then(html => renderComponent('#trade-panel-badge', html));
  }

  if (tradePanelSelectOrderType) {
    fetch('/src/components/ui/Select.html')
      .then(res => res.text())
      .then(html => renderComponent('#trade-panel-select-order-type', html));
  }

  if (tradePanelInputQuantity) {
    fetch('/src/components/ui/InputNumber.html')
      .then(res => res.text())
      .then(html => renderComponent('#trade-panel-input-quantity', html));
  }

  if (tradePanelSelectTimeInForce) {
    fetch('/src/components/ui/Select.html')
      .then(res => res.text())
      .then(html => renderComponent('#trade-panel-select-time-in-force', html));
  }

  if (tradePanelInputStopPrice) {
    fetch('/src/components/ui/InputCurrency.html')
      .then(res => res.text())
      .then(html => renderComponent('#trade-panel-input-stop-price', html));
  }

  if (tradePanelSummaryInfo) {
    fetch('/src/components/shared/SummaryInfo.html')
      .then(res => res.text())
      .then(html => renderComponent('#trade-panel-summary-info', html));
  }

  if (tradePanelFastButtons) {
    fetch('/src/components/ui/FastButtons.html')
      .then(res => res.text())
      .then(html => renderComponent('#trade-panel-fast-buttons', html));
  }
}
