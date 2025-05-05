function handleResizing(e) {
  e.target.style.height = 'inherit';
  const computed = window.getComputedStyle(e.target);
  const height = e.target.scrollHeight
               - parseInt(computed.getPropertyValue('padding-top'), 10)
               - parseInt(computed.getPropertyValue('padding-bottom'), 10)
  e.target.style.height = `${height}px`;
};
document.querySelectorAll('input, textarea').forEach(el => {
  el.addEventListener('input', handleResizing);
});