export function createChart() {
  const script = document.createElement('script');
  script.src =
    'https://cdn.jsdelivr.net/npm/lightweight-charts@4.1.1/dist/lightweight-charts.standalone.production.js';
  script.async = true;

  script.onload = () => {
    const chartContainer = document.getElementById('candle-chart');
    const chart = window.LightweightCharts.createChart(chartContainer, {
      layout: {
        background: { color: '#000000' },
        textColor: '#d1d5db',
      },
      grid: {
        vertLines: { color: '#2d3748' },
        horzLines: { color: '#2d3748' },
      },
      width: chartContainer.clientWidth,
      height: 250,
      crosshair: { mode: window.LightweightCharts.CrosshairMode.Normal },
      rightPriceScale: { borderColor: '#374151' },
      timeScale: { borderColor: '#374151', timeVisible: true },
    });

    const candleSeries = chart.addCandlestickSeries({
      upColor: '#22c55e',
      downColor: '#ef4444',
      wickUpColor: '#22c55e',
      wickDownColor: '#ef4444',
    });

    candleSeries.setData([
      { time: '2023-01-04', open: 408, high: 417, low: 400, close: 403 },
      { time: '2023-01-05', open: 401, high: 411, low: 396, close: 410 },
      { time: '2023-01-06', open: 412, high: 423, low: 401, close: 414 },
      { time: '2023-01-07', open: 417, high: 422, low: 410, close: 418 },
      { time: '2023-01-08', open: 418, high: 430, low: 406, close: 412 },
      { time: '2023-01-09', open: 411, high: 417, low: 402, close: 416 },
      { time: '2023-01-10', open: 418, high: 429, low: 407, close: 409 },
      { time: '2023-01-11', open: 412, high: 426, low: 403, close: 419 },
      { time: '2023-01-12', open: 418, high: 423, low: 406, close: 406 },
      { time: '2023-01-13', open: 409, high: 419, low: 399, close: 412 },
      { time: '2023-01-14', open: 413, high: 419, low: 402, close: 410 },
    ]);

    window.addEventListener('resize', () => {
      chart.resize(chartContainer.clientWidth, 250);
    });
  };

  document.body.appendChild(script);
}
