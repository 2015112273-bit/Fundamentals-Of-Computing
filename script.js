function toggleMenu() {
  document.getElementById('nav-links').classList.toggle('active');
}
function show(id, btn) {
  document.querySelectorAll('main section').forEach(s => s.classList.remove('active'));
  const sel = document.getElementById(id);
  if (sel) sel.classList.add('active');
  document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
}
document.getElementById('footer-year').textContent = new Date().getFullYear();
