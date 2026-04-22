/* =============================================
   KINGS HEATH ELIM — Shared Components
   ============================================= */

function injectNav(activePage) {
  const isRoot = activePage === 'home-root';
  const prefix = isRoot ? '' : '../';
  const activeKey = activePage === 'home-root' ? 'home' : activePage;

  const html = `
    <nav class="site-nav">
      <div class="nav-inner">
        <a href="${prefix}index.html" class="nav-logo">
          <div class="nav-logo-cross">✝</div>
          <div class="nav-logo-text">
            <span class="nav-logo-name">Kings Heath Elim</span>
            <span class="nav-logo-sub">Church</span>
          </div>
        </a>
        <div class="nav-links" id="nav-links">
          <a href="${prefix}index.html" class="${activeKey === 'home' ? 'active' : ''}">Home</a>
          <div class="nav-dropdown">
            <button class="nav-dropdown-btn ${['watch','sermons'].includes(activeKey) ? 'active' : ''}">Watch <span class="nav-chevron">▾</span></button>
            <div class="nav-dropdown-menu">
              <a href="${prefix}pages/watch.html">▶&nbsp; Live Stream</a>
              <a href="${prefix}pages/sermons.html">📋&nbsp; Sermon Archive</a>
            </div>
          </div>
          <div class="nav-dropdown">
            <button class="nav-dropdown-btn ${['setlists','new-songs'].includes(activeKey) ? 'active' : ''}">Worship <span class="nav-chevron">▾</span></button>
            <div class="nav-dropdown-menu">
              <a href="${prefix}pages/setlists.html">🎵&nbsp; Set List History</a>
              <a href="${prefix}pages/new-songs.html">⭐&nbsp; New Songs</a>
            </div>
          </div>
          <a href="${prefix}pages/events.html" class="${activeKey === 'events' ? 'active' : ''}">Events</a>
          <a href="${prefix}pages/whos-who.html" class="${activeKey === 'whos-who' ? 'active' : ''}">Who's Who</a>
          <div class="nav-dropdown">
            <button class="nav-dropdown-btn ${['about','volunteer'].includes(activeKey) ? 'active' : ''}">About <span class="nav-chevron">▾</span></button>
            <div class="nav-dropdown-menu">
              <a href="${prefix}pages/about.html">🏠&nbsp; About Us</a>
              <a href="${prefix}pages/volunteer.html">🙋&nbsp; Volunteer</a>
            </div>
          </div>
          <div class="nav-dropdown">
            <button class="nav-dropdown-btn ${['contact','support'].includes(activeKey) ? 'active' : ''}">Contact <span class="nav-chevron">▾</span></button>
            <div class="nav-dropdown-menu">
              <a href="${prefix}pages/contact.html">✉️&nbsp; Get in Touch</a>
              <a href="${prefix}pages/support.html">💛&nbsp; Support Us</a>
            </div>
          </div>
        </div>
        <button class="nav-cta" onclick="location.href='${prefix}pages/contact.html'">Plan Your Visit</button>
        <button class="nav-hamburger" id="nav-hamburger" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
      <div class="nav-drawer" id="nav-drawer">
        <a href="${prefix}index.html">Home</a>
        <span class="drawer-group-label">Watch</span>
        <a href="${prefix}pages/watch.html" class="drawer-sub">▶ Live Stream</a>
        <a href="${prefix}pages/sermons.html" class="drawer-sub">📋 Sermon Archive</a>
        <span class="drawer-group-label">Worship</span>
        <a href="${prefix}pages/setlists.html" class="drawer-sub">🎵 Set List History</a>
        <a href="${prefix}pages/new-songs.html" class="drawer-sub">⭐ New Songs</a>
        <a href="${prefix}pages/events.html">Events</a>
        <a href="${prefix}pages/whos-who.html">Who's Who</a>
        <span class="drawer-group-label">About</span>
        <a href="${prefix}pages/about.html" class="drawer-sub">🏠 About Us</a>
        <a href="${prefix}pages/volunteer.html" class="drawer-sub">🙋 Volunteer</a>
        <span class="drawer-group-label">Contact</span>
        <a href="${prefix}pages/contact.html" class="drawer-sub">✉️ Get in Touch</a>
        <a href="${prefix}pages/support.html" class="drawer-sub">💛 Support Us</a>
      </div>
    </nav>
  `;

  const el = document.getElementById('nav-placeholder');
  if (el) el.outerHTML = html;

  const hamburger = document.getElementById('nav-hamburger');
  const drawer = document.getElementById('nav-drawer');
  if (hamburger && drawer) {
    hamburger.addEventListener('click', () => drawer.classList.toggle('open'));
  }

  document.querySelectorAll('.nav-dropdown').forEach(dd => {
    const menu = dd.querySelector('.nav-dropdown-menu');
    let closeTimer;

    dd.addEventListener('mouseenter', () => {
      clearTimeout(closeTimer);
      menu.classList.add('open');
    });
    dd.addEventListener('mouseleave', () => {
      closeTimer = setTimeout(() => menu.classList.remove('open'), 200);
    });
    menu.addEventListener('mouseenter', () => clearTimeout(closeTimer));
    menu.addEventListener('mouseleave', () => {
      closeTimer = setTimeout(() => menu.classList.remove('open'), 200);
    });
    dd.querySelector('.nav-dropdown-btn').addEventListener('click', () => menu.classList.toggle('open'));
  });
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
              <li><a href="${prefix}pages/volunteer.html">Volunteer</a></li>
              <li><a href="${prefix}index.html#times">Service Times</a></li>
              <li><a href="${prefix}pages/contact.html">Plan Your Visit</a></li>
              <li><a href="${prefix}pages/events.html">What's On</a></li>
              <li><a href="${prefix}pages/whos-who.html">Who's Who</a></li>
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
              <li><a href="tel:01214442550">${CHURCH_DATA.church.phone}</a></li>
              <li><a href="${prefix}pages/contact.html">Send a Message</a></li>
              <li><a href="${prefix}pages/support.html">Support Us</a></li>
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
