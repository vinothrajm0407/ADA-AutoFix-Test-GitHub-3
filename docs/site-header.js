// Shared site header, loaded by about.html, services.html and contact.html.
// Test fixture for "Fix at the source": the menu button below has no
// accessible name, so the same violation shows up on every page that loads
// this file — and one fix here fixes all of them.
document.currentScript.insertAdjacentHTML('beforebegin', `
<nav class="site-nav">
  <a href="index.html">Acme Team Hub</a>
  <button class="menu-toggle"><svg width="18" height="18" aria-hidden="true"><rect y="3" width="18" height="2"></rect><rect y="8" width="18" height="2"></rect><rect y="13" width="18" height="2"></rect></svg></button>
</nav>`);
