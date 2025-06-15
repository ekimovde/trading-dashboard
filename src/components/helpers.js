export function renderComponent(selector, html) {
  const element = document.querySelector(selector);

  if (element) {
    element.innerHTML = html;
  }
}
