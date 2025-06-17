document.getElementById('date').innerText = new Date().toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
});
