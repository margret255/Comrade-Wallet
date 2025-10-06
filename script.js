// Example: alert on "Get Started"
document.querySelectorAll('.btn-primary, .btn-green, .btn-purple').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Feature coming soon 🚀');
  });
});
