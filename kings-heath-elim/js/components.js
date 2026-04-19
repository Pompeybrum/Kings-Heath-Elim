/* =============================================
   KINGS HEATH ELIM — Shared Components
   ============================================= */

function injectNav(activePage) {
  const pages = [
    { label: 'Home',       href: '../index.html',              key: 'home' },
    { label: 'Watch',      href: '../pages/watch.html',        key: 'watch' },
    { label: 'Sermons',    href: '../pages/sermons.html',      key: 'sermons' },
    { label: 'Worship',    href: '../pages/setlists.html',     key: 'setlists' },
    { label: 'New Songs',  href: '../pages/new-songs.html',    key: 'new-songs' },
    { label: 'Events',     href: '../pages/events.html',       key: 'events' },
    { label: 'About',      href: '../pages/about.html',        key: 'about' },
    { label: 'Contact',    href: '../pages/contact.html',      key: 'contact' },
  ];

  const isRoot = activePage === 'home-root';
  const prefix = isRoot ? '' : '../';
  const activeKey = activePage === 'home-root' ? 'home' : activePage;

  const rootPages = pages.map(p => ({
    ...p,
    href: isRoot ? p.href.replace('../', '') : p.href
  }));

  const linksHTML = rootPages.map(p => `
    <a href="${p.href}" class="${activeKey === p.key ? 'active' : ''}">${p.label}</a>
  `).join('');

  const logoHref = isRoot ? 'index.html' : '../index.html';

  const html = `
    <nav class="site-nav">
      <div class="nav-inner">
        <a href="${logoHref}" class="nav-logo">
          <div class="nav-logo-cross">✝</div>
          <div class="nav-logo-text">
            <span class="nav-logo-name">Kings Heath Elim</span>
            <span class="nav-logo-sub">Church</span>
          </div>
        </a>
        <div class="nav-links">${linksHTML}</div>
        <button class="nav-cta" onclick="location.href='${isRoot ? 'pages/contact.html' : '../pages/contact.html'}'">Plan Your Visit</button>
        <button class="nav-hamburger" id="nav-hamburger" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
      <div class="nav-drawer" id="nav-drawer">
        ${rootPages.map(p => `<a href="${p.href}">${p.label}</a>`).join('')}
      </div>
    </nav>
  `;

  const el = document.getElementById('nav-placeholder');
  if (el) el.outerHTML = html;
}

function injectFooter(isRoot) {
  const prefix = isRoot ? '' : '../';
  const html = `
    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-top">
          <div>
            <div class="footer-brand-name">
              <div class="footer-brand-cross">✝</div>
              Kings Heath Elim
            </div>
            <p class="footer-tagline">A warm, Spirit-filled church community in the heart of Kings Heath, Birmingham.</p>
            <div class="footer-social">
              <a class="social-btn" href="${CHURCH_DATA.church.youtubeChannel}" target="_blank" rel="noopener" aria-label="YouTube">▶</a>
              <a class="social-btn" href="#" aria-label="Facebook">f</a>
              <a class="social-btn" href="#" aria-label="Instagram">ig</a>
            </div>
          </div>
          <div class="footer-col">
            <h4>Visit Us</h4>
            <ul>
              <li><a href="${prefix}pages/about.html">About the Church</a></li>
              <li><a href="${prefix}index.html#times">Service Times</a></li>
              <li><a href="${prefix}pages/contact.html">Plan Your Visit</a></li>
              <li><a href="${prefix}pages/events.html">Upcoming Events</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Media</h4>
            <ul>
              <li><a href="${prefix}pages/watch.html">Watch Live</a></li>
              <li><a href="${prefix}pages/sermons.html">Sermon Archive</a></li>
              <li><a href="${prefix}pages/setlists.html">Worship Sets</a></li>
              <li><a href="${prefix}pages/new-songs.html">New Worship Songs</a></li>
              <li><a href="${CHURCH_DATA.church.youtubeChannel}" target="_blank">YouTube Channel</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:${CHURCH_DATA.church.email}">${CHURCH_DATA.church.email}</a></li>
              <li><a href="tel:${CHURCH_DATA.church.phone}">${CHURCH_DATA.church.phone}</a></li>
              <li><a href="${prefix}pages/contact.html">Send a Message</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <span class="footer-copy">© 2026 Kings Heath Elim Church. All rights reserved.</span>
          <span class="footer-verse">"For where two or three gather in my name, there am I with them." — Matthew 18:20</span>
        </div>
      </div>
    </footer>
  `;

  const el = document.getElementById('footer-placeholder');
  if (el) el.outerHTML = html;
}
