document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const reserveForm = document.querySelector('#reserve-form');
  if (reserveForm) {
    reserveForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const data = new FormData(reserveForm);
      const subject = `New RIP Studio inquiry — ${data.get('business')}`;
      const body = [
        `Business: ${data.get('business')}`,
        `Contact: ${data.get('name')}`,
        `E-mail: ${data.get('email')}`,
        `Phone: ${data.get('phone') || 'n/a'}`,
        `Looking for: ${data.get('need')}`,
        '',
        data.get('message')
      ].join('\n');
      window.location.href = `mailto:mikewkennedy@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }
});
