/* Build navigation once DOM is ready */
document.addEventListener('DOMContentLoaded', () => {
  const nav   = document.getElementById('nav');
  const heads = document.querySelectorAll('h2[id]'); // ← change selector if needed

  heads.forEach(h => {
    const li = document.createElement('li');
    const a  = document.createElement('a');
    a.href   = '#' + h.id;
    a.textContent = h.textContent;
    li.appendChild(a);
    nav.appendChild(li);
  });

  /* open / close sidebar */
  const sidebar = document.getElementById('sidebar');
  document.getElementById('toggle').addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });

  /* optional: close sidebar after picking a link (remove if you want it to stay open) */
  nav.addEventListener('click', e => {
    if (e.target.tagName === 'A') sidebar.classList.remove('open');
  });
});