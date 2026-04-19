# Kings Heath Elim — Church Website

A warm, welcoming church website with live stream embed, sermon archive, worship set lists, events calendar and more.

---

## Project Structure

```
kings-heath-elim/
├── index.html                  ← Homepage
├── css/styles.css              ← All styles
├── js/
│   ├── data.js                 ← ALL content lives here — edit to update the site
│   ├── components.js           ← Shared nav & footer
│   └── main.js                 ← Page rendering
└── pages/
    ├── watch.html              ← Live stream page
    ├── sermons.html            ← Sermon archive
    ├── sermon-notes.html       ← Sermon notes template
    ├── setlists.html           ← Worship set history + song search
    ├── events.html             ← Events calendar
    ├── about.html              ← About the church
    └── contact.html            ← Contact & visit info
```

---

## First Steps — 5 Things to Update

### 1. Connect Your YouTube Live Stream
In `js/data.js`, update:
```js
youtubeChannelId: "UCxxxxxxxxxxxxxxxxxx"  // Your real YouTube Channel ID
youtubeChannel: "https://www.youtube.com/@yourchannel"
```
To find your Channel ID: go to YouTube Studio → Settings → Channel → Advanced Settings.

### 2. Update Church Contact Details
```js
church: {
  address: "Your actual address",
  email: "your@email.com",
  phone: "0121 xxx xxxx",
}
```

### 3. Add Real Sermon Videos
For each sermon in `CHURCH_DATA.sermons`, paste the YouTube video ID (the part after `?v=`):
```js
youtubeId: "dQw4w9WgXcQ"  // ← replace with real video ID
```

### 4. Add Your Worship Sets
Update `CHURCH_DATA.setlists` with real song lists each week after your service.

### 5. Add a Church Photo
In `pages/about.html`, replace the placeholder div with:
```html
<img src="../images/church.jpg" alt="Kings Heath Elim Church" style="width:100%;height:420px;object-fit:cover;border-radius:24px;" />
```

---

## Adding New Content Each Week

### New sermon
Add to the top of `CHURCH_DATA.sermons`:
```js
{
  id: "s7",
  title: "Your Sermon Title",
  series: "Series Name",
  speaker: "Pastor Dave Thompson",
  date: "27 Apr 2026",
  scripture: "John 3:16",
  youtubeId: "YOUR_VIDEO_ID",
  hasNotes: true,
  notesHref: "pages/sermon-notes.html"
}
```

### New worship set
Add to the top of `CHURCH_DATA.setlists`:
```js
{
  id: "wl6",
  date: "27",
  month: "Apr",
  year: "2026",
  service: "Morning Service",
  theme: "Sermon theme here",
  songs: [
    { title: "Song One", highlight: true },
    { title: "Song Two" },
    { title: "Song Three" },
  ]
}
```

---

## Deployment (Free Options)

**Vercel (recommended):** vercel.com → New Project → drag folder → live in 30 seconds.

**GitHub Pages:** Push to GitHub → Settings → Pages → main branch → done.

**Surge:** `npm i -g surge` then `cd kings-heath-elim && surge`

---

*Built with HTML, CSS and vanilla JavaScript. No build step, no dependencies.*
