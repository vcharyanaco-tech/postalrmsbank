document.addEventListener('DOMContentLoaded', () => {
  const mobileToggle = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('.nav');
  if (mobileToggle && nav) {
    mobileToggle.addEventListener('click', () => nav.classList.toggle('open'));
  }

  const currentPage = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  document.querySelectorAll('.form-container form').forEach(form => {
    form.addEventListener('submit', e => {
      let valid = true;
      form.querySelectorAll('input[required], select[required]').forEach(input => {
        const group = input.closest('.form-group');
        if (!input.value.trim()) {
          valid = false;
          if (group) group.classList.add('has-error');
        } else {
          if (group) group.classList.remove('has-error');
        }
      });

      if (!valid) {
        e.preventDefault();
        const firstError = form.querySelector('.has-error input, .has-error select');
        if (firstError) firstError.focus();
      }
    });
  });

  document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', () => {
      const group = input.closest('.form-group');
      if (group && group.classList.contains('has-error') && input.value.trim()) {
        group.classList.remove('has-error');
      }
    });
  });
});
