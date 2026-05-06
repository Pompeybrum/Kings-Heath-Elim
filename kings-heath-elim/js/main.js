/* =============================================
   KINGS HEATH ELIM — Main JavaScript
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Mobile nav ---- */
  const hamburger = document.getElementById('nav-hamburger');
  const drawer    = document.getElementById('nav-drawer');
  if (hamburger && drawer) {
    hamburger.addEventListener('click', () => drawer.classList.toggle('open'));
  }

  /* ---- Service Times ---- */
  function buildTimes() {
    const grid = document.getElementById('times-grid');
    if (!grid) return;
    grid.innerHTML = CHURCH_DATA.services.map(s => `
      <div class="time-card">
        <div class="time-card-icon">${s.icon}</div>
        <div class="time-card-name">${s.name}</div>
        <div class="time-card-time">${s.time}</div>
        <div class="time-card-desc">${s.desc}</div>
      </div>
    `).join('');
  }

  /* ---- Sermons ---- */
  function buildSermons(limit) {
    const grid = document.getElementById('sermons-grid');
    if (!grid) return;
    const list = limit ? CHURCH_DATA.sermons.slice(0, limit) : CHURCH_DATA.sermons;
    grid.innerHTML = list.map(s => `
      <div class="sermon-card">
        <div class="sermon-card-thumb" style="${s.verseImage ? `background-image:url('${s.verseImage}'); background-size:cover; background-position:center;` : ''}">
          ${s.verseImage ? '<div style="position:absolute;inset:0;background:rgba(28,43,58,0.45);border-radius:0;"></div>' : ''}
          <a href="https://www.youtube.com/watch?v=${s.youtubeId}" target="_blank" rel="noopener" aria-label="Watch ${s.title}" style="position:relative;z-index:1;">
            <div class="sermon-play-btn">▶</div>
          </a>
          ${s.verseImage ? `<div style="position:absolute;bottom:12px;left:12px;right:12px;z-index:1;font-size:11px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.9);font-style:italic;">${s.scripture}</div>` : ''}
        </div>
        <div class="sermon-card-body">
          <div class="sermon-series">${s.series}</div>
          <div class="sermon-title">${s.title}</div>
          <div class="sermon-meta">
            <span>${s.speaker}</span>
            <span>${s.date}</span>
            ${!s.verseImage ? `<span>${s.scripture}</span>` : ''}
          </div>
          ${s.hasNotes ? `<a href="${s.notesHref}" class="sermon-notes-link">📄 Sermon notes →</a>` : ''}
        </div>
      </div>
    `).join('');
  }

  /* ---- Set Lists ---- */
  let setlistFilter = 'all';

  function buildSetlists(filter) {
    const container = document.getElementById('setlists-container');
    if (!container) return;
    const list = filter === 'all'
      ? CHURCH_DATA.setlists
      : CHURCH_DATA.setlists.filter(s => s.month === filter);

    if (list.length === 0) {
      container.innerHTML = '<p style="color:var(--text-muted); padding:16px 0;">No sets found for this month.</p>';
      return;
    }

    container.innerHTML = list.map(sl => `
      <div class="setlist-card">
        <div class="setlist-header">
          <div class="setlist-date-badge">
            <div class="setlist-date-day">${sl.date}</div>
            <div class="setlist-date-month">${sl.month} ${sl.year}</div>
          </div>
          <div class="setlist-info">
            <h4>${sl.service}</h4>
            <p>${sl.theme}</p>
          </div>
        </div>
        <div class="setlist-songs">
          ${sl.songs.map(song => song.youtubeId
            ? `<a href="https://www.youtube.com/watch?v=${song.youtubeId}" target="_blank" rel="noopener"
                 class="song-chip ${song.highlight ? 'highlight' : ''}"
                 title="${song.artist}" style="text-decoration:none;">
                 ▶ ${song.title}
               </a>`
            : `<span class="song-chip ${song.highlight ? 'highlight' : ''}" title="${song.artist || ''}">${song.title}</span>`
          ).join('')}
        </div>
      </div>
    `).join('');
  }

  function setupSetlistFilters() {
    document.querySelectorAll('.setlist-filter').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.setlist-filter').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        buildSetlists(btn.dataset.month);
      });
    });
  }

  /* ---- Events ---- */
  function buildEvents(limit) {
    const grid = document.getElementById('events-grid');
    if (!grid) return;
    const list = limit ? CHURCH_DATA.events.slice(0, limit) : CHURCH_DATA.events;
    grid.innerHTML = list.map(e => `
      <div class="event-card">
        <div class="event-date-col">
          <div class="event-date-num">${e.day}</div>
          <div class="event-date-mon">${e.month}</div>
        </div>
        <div class="event-body">
          <div class="event-type">${e.type}</div>
          <div class="event-title">${e.title}</div>
          <div class="event-detail">${e.time} · ${e.desc}</div>
        </div>
      </div>
    `).join('');
  }

  /* ---- Live Stream embed ---- */
  function buildStream() {
    const container = document.getElementById('stream-container');
    if (!container) return;
    // Embeds the church's YouTube channel live stream
    container.innerHTML = `
      <div class="stream-embed">
        <iframe
          src="https://www.youtube.com/embed/live_stream?channel=${CHURCH_DATA.church.youtubeChannelId}&autoplay=0&rel=0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          title="Kings Heath Elim Live Stream">
        </iframe>
      </div>
      <div class="stream-meta">
        <span class="stream-badge stream-badge-live">Live Sundays 10:30am</span>
        <a href="${CHURCH_DATA.church.youtubeChannel}" target="_blank" rel="noopener" class="stream-badge stream-badge-upcoming" style="text-decoration:none;">▶ Visit our YouTube Channel</a>
      </div>
    `;
  }

  /* ---- Contact form ---- */
  function setupContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      if (btn) {
        btn.textContent = 'Message sent! ✓';
        btn.disabled = true;
        setTimeout(() => { btn.textContent = 'Send Message'; btn.disabled = false; }, 4000);
      }
    });
  }

  /* ---- Run ---- */
  buildTimes();
  buildSermons(3);
  buildSetlists('all');
  setupSetlistFilters();
  buildEvents(3);
  buildStream();
  setupContactForm();

});
