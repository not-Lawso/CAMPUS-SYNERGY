const toggleButton = document.getElementById('theme-toggle');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  
  // Save the theme preference in localStorage
  const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
});

// Load the theme preference from localStorage
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
  }
});
