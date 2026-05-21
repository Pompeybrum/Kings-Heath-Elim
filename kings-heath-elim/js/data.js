/* =============================================
   KINGS HEATH ELIM — Site Data
   Edit this file to update all content
   ============================================= */

const CHURCH_DATA = {

  /* ---- Church Info ---- */
  church: {
    name: "Kings Heath Elim",
    tagline: "A church for everyone in the heart of Kings Heath",
    address: "159 Allen's Croft Road, Kings Heath, Birmingham, B14 6RP",
    addressLine1: "159 Allen's Croft Road",
    addressLine2: "Kings Heath, Birmingham, B14 6RP",
    email: "clairekhelim@gmail.com",
    phone: "0121 444 2550",
    youtubeChannel: "https://www.youtube.com/@KingsHeathElimChurch-dm5ti",
    youtubeChannelId: "UC5w7vYFMhoDL4iO5igWysVw",
    churchPhoto: "../images/church.jpg"
  },

  /* ---- Service Times ---- */
  services: [
    {
      icon: "☀️",
      name: "Sunday Morning",
      time: "10:30am",
      desc: "Our main weekly gathering. Worship, prayer and teaching for all ages."
    },
    {
      icon: "👶",
      name: "Kids & Youth",
      time: "Sun 10:30am",
      desc: "Fun, age-appropriate groups running alongside the morning service."
    }
  ],

  /* ---- Sermons ---- */
  sermons: [
    {
      id: "s1",
      title: "Holy Spirit Course — Week 6",
      series: "Holy Spirit Course",
      speaker: "Video Course",
      date: "17 May 2026",
      scripture: "Galatians 5:22-23",
      verseImage: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=600&q=80",
      youtubeId: null,
      hasNotes: false,
      notesHref: null
    },
    {
      id: "s2",
      title: "Holy Spirit Course — Week 5",
      series: "Holy Spirit Course",
      speaker: "Video Course",
      date: "10 May 2026",
      scripture: "1 Corinthians 12:4-11",
      verseImage: "https://images.unsplash.com/photo-1532153955177-f59af40d6472?w=600&q=80",
      youtubeId: null,
      hasNotes: false,
      notesHref: null
    },
    {
      id: "s3",
      title: "Holy Spirit Course — Week 4",
      series: "Holy Spirit Course",
      speaker: "Video Course",
      date: "4 May 2026",
      scripture: "Romans 8:26-27",
      verseImage: "https://images.unsplash.com/photo-1476611338391-6f395a0ebc7b?w=600&q=80",
      youtubeId: null,
      hasNotes: false,
      notesHref: null
    }
  ],

  /* ---- Worship Set Lists ---- */
  setlists: [
    {
      id: "wl1",
      date: "17",
      month: "May",
      year: "2026",
      service: "Morning Service",
      theme: "Holy Spirit Course Week 6",
      songs: [
        { title: "Praise",                         highlight: true,  artist: "Elevation Worship",    youtubeId: "raFnjGVkHe8" },
        { title: "Great Things (Hero of Heaven)",  highlight: false, artist: "Citipointe Worship",   youtubeId: "A4NnuKVCv0Q" },
        { title: "When I Look Into Your Holiness", highlight: true,  artist: "Wayne & Cathy Perrin", youtubeId: "VJvRhmfVUNE" },
        { title: "Your Presence is Heaven",        highlight: false, artist: "Israel Houghton",      youtubeId: "jxJsDIhs9MU" },
        { title: "Trust in God",                   highlight: false, artist: "Elevation Worship",    youtubeId: "QS04WbSnxok" }
      ]
    },
    {
      id: "wl2",
      date: "10",
      month: "May",
      year: "2026",
      service: "Morning Service",
      theme: "Holy Spirit Course Week 5",
      songs: [
        { title: "My Life is in You",    highlight: true,  artist: "Daniel Gardner",            youtubeId: "DL_wL7h5Xy8" },
        { title: "Great Are You Lord",   highlight: false, artist: "All Sons & Daughters",       youtubeId: "2qUOHjnDIFs" },
        { title: "Gratitude",            highlight: true,  artist: "Benjamin William Hastings",  youtubeId: "mE9UzNn2J5o" },
        { title: "Praise (Be Lifted Up)",highlight: false, artist: "Elevation Worship",          youtubeId: "raFnjGVkHe8" },
        { title: "Sovereign Over Us",    highlight: false, artist: "Aaron Keyes",                youtubeId: "VPkMbhydU9I" }
      ]
    },
    {
      id: "wl3",
      date: "4",
      month: "May",
      year: "2026",
      service: "Morning Service",
      theme: "Holy Spirit Course Week 4",
      songs: [
        { title: "Praise",                highlight: true,  artist: "Elevation Worship",     youtubeId: "raFnjGVkHe8" },
        { title: "Graves into Gardens",   highlight: false, artist: "Elevation Worship",     youtubeId: "KwX1f2gYKZ4" },
        { title: "Here I Am to Worship",  highlight: true,  artist: "Tim Hughes",            youtubeId: "b_KNvkk2G-Y" },
        { title: "Build My Life",         highlight: false, artist: "Pat Barrett",           youtubeId: "Z32HiCoFzlU" },
        { title: "In Christ Alone",       highlight: false, artist: "Keith & Kristyn Getty", youtubeId: "mshz89vfK3Q" }
      ]
    },
    {
      id: "wl4",
      date: "26",
      month: "Apr",
      year: "2026",
      service: "Morning Service",
      theme: "Holy Spirit Course Week 3",
      songs: [
        { title: "Bless God",              highlight: true,  artist: "Brandon Lake",       youtubeId: "zSW5g5KsN7s" },
        { title: "His Mercy is More",      highlight: false, artist: "Matt Boswell",       youtubeId: "hxOApooUSFI" },
        { title: "How Great is Our God",   highlight: true,  artist: "Chris Tomlin",       youtubeId: "b_KNvkk2G-Y" },
        { title: "How Great Thou Art",     highlight: false, artist: "Classic Hymn",       youtubeId: "kSfTnv9NvV8" },
        { title: "Trust in God",           highlight: false, artist: "Elevation Worship",  youtubeId: "QS04WbSnxok" }
      ]
    },
    {
      id: "wl5",
      date: "10",
      month: "May",
      year: "2026",
      service: "Morning Service",
      theme: "Holy Spirit Course Week 2",
      songs: [
        { title: "Holy is the Lord",          highlight: true,  artist: "Chris Tomlin",     youtubeId: "hVWBt8bfmCs" },
        { title: "Your Love Never Fails",     highlight: false, artist: "Jesus Culture",    youtubeId: "IoezWBPGRAc" },
        { title: "Holy Forever",              highlight: true,  artist: "Chris Tomlin",     youtubeId: "IkHgxKemCRk" },
        { title: "Praise (Be Lifted Up)",     highlight: false, artist: "Elevation Worship",youtubeId: "raFnjGVkHe8" },
        { title: "This is the Air I Breathe", highlight: false, artist: "Michael W. Smith", youtubeId: "GGFeo08LkcY" }
      ]
    }
  ],

  /* ---- New Worship Songs (for learning at home) ---- */
  newSongs: [
    {
      id: "ns0",
      title: "Trust in God",
      artist: "Elevation Worship ft. Chris Brown",
      youtubeId: "QS04WbSnxok",
      key: "A",
      tempo: "Mid-tempo",
      tags: ["Worship", "Contemporary"],
      notes: "Our newest song — we're learning this together right now. Listen through the week and come ready to sing on Sunday!",
      addedDate: "26 Apr 2026"
    },
    {
      id: "ns1",
      title: "Holy Forever",
      artist: "Chris Tomlin",
      youtubeId: "IkHgxKemCRk",
      key: "G",
      tempo: "Slow",
      tags: ["Worship", "Praise"],
      notes: "A beautiful song of adoration — listen along at home to get familiar with the melody.",
      addedDate: "19 Apr 2026"
    },
    {
      id: "ns2",
      title: "Praise (Be Lifted Up)",
      artist: "Elevation Worship",
      youtubeId: "raFnjGVkHe8",
      key: "A",
      tempo: "Mid-tempo",
      tags: ["Praise", "Contemporary"],
      notes: "Powerful declaration song. The chorus is very singable once you know it.",
      addedDate: "5 Apr 2026"
    },
    {
      id: "ns3",
      title: "Your Love Never Fails",
      artist: "Jesus Culture",
      youtubeId: "IoezWBPGRAc",
      key: "D",
      tempo: "Mid-tempo",
      tags: ["Worship", "Devotional"],
      notes: "A beautiful reminder of God's faithfulness — already a firm favourite.",
      addedDate: "19 Apr 2026"
    }
  ],

  /* ---- Weekly Regular Events (term time only unless stated) ---- */
  weeklyEvents: [
    {
      id: "we0",
      day: "Tue",
      time: "10:00am (at church) & 8:00pm (Google Meet)",
      type: "Course",
      title: "Life Worth Living",
      desc: "A 10-week course exploring what makes life truly worth living. In-person at church or join online. Running until late June.",
      icon: "✨"
    },
    {
      id: "we1",
      day: "Tue",
      time: "9:00am",
      type: "Community",
      title: "Food Bank Breakfast",
      desc: "2nd Tuesday of each month (3rd Tuesday in May). No session in August. Free breakfast — everyone welcome.",
      icon: "🍳"
    },
    {
      id: "we2",
      day: "Wed",
      time: "9:30 – 11:00am",
      type: "Families",
      title: "Rainbow Stay & Play",
      desc: "A fun drop-in for babies, toddlers and their parents or carers. Come for play, chat and a cuppa! Term time only.",
      icon: "🌈"
    },
    {
      id: "we3",
      day: "Wed",
      time: "6:00 – 7:00pm",
      type: "Children",
      title: "JK's Kids Club",
      desc: "A brilliant weekly club for children with games, crafts and stories. Term time only.",
      icon: "⭐"
    },
    {
      id: "we4",
      day: "Thu",
      time: "10:00 – 11:00am",
      type: "Prayer",
      title: "Prayer Meeting",
      desc: "Join us to pray together for our church, community and the world. All welcome — including school holidays.",
      icon: "🙏"
    },
    {
      id: "we5",
      day: "Fri",
      time: "7:30 – 9:30pm",
      type: "Youth",
      title: "Youth Club",
      desc: "A great space for young people to hang out, have fun and build friendships. Term time only.",
      icon: "🎮"
    }
  ],

  /* ---- One-off Events ---- */
  events: [
    {
      id: "e1",
      day: "29",
      month: "Apr",
      type: "Course",
      title: "Life Worth Living — Week 6 (morning) / Week 7 (evening)",
      time: "10:00am at church (Wk 6)  ·  8:00pm on Google Meet (Wk 7)",
      desc: "This week's Life Worth Living sessions — join us in person in the morning or online in the evening."
    },
    {
      id: "e2",
      day: "7",
      month: "Jun",
      type: "Guest Speaker",
      title: "Marty Davison — Elim International Missions",
      time: "10:30am",
      desc: "We're delighted to welcome Marty Davison, Elim's International Missions Director, to preach on Sunday morning."
    },
    {
      id: "e3",
      day: "20",
      month: "Sep",
      type: "Guest Speaker",
      title: "Paul Hudson — Elim Regional Leader",
      time: "10:30am",
      desc: "A special Sunday morning as we welcome Paul Hudson, Elim Regional Leader, to Kings Heath Elim."
    }
  ]

};
