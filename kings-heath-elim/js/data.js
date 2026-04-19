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
    youtubeChannelId: "KingsHeathElimChurch-dm5ti",
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
      title: "Holy Spirit Course — Week 2",
      series: "Holy Spirit Course",
      speaker: "Video Course",
      date: "20 Apr 2026",
      scripture: "Acts 2:1-4",
      youtubeId: "dQw4w9WgXcQ",
      hasNotes: true,
      notesHref: "pages/sermon-notes.html"
    },
    {
      id: "s2",
      title: "Holy Spirit Course — Week 1",
      series: "Holy Spirit Course",
      speaker: "Video Course",
      date: "13 Apr 2026",
      scripture: "John 14:15-17",
      youtubeId: "dQw4w9WgXcQ",
      hasNotes: true,
      notesHref: "pages/sermon-notes.html"
    },
    {
      id: "s3",
      title: "Faith That Moves Mountains",
      series: "Foundations",
      speaker: "Pastor Claire",
      date: "6 Apr 2026",
      scripture: "Matthew 17:20",
      youtubeId: "dQw4w9WgXcQ",
      hasNotes: false,
      notesHref: null
    },
    {
      id: "s4",
      title: "Rest in a Restless World",
      series: "Foundations",
      speaker: "Pastor Claire",
      date: "30 Mar 2026",
      scripture: "Matthew 11:28-30",
      youtubeId: "dQw4w9WgXcQ",
      hasNotes: true,
      notesHref: "pages/sermon-notes.html"
    },
    {
      id: "s5",
      title: "The Spirit-Filled Life",
      series: "Foundations",
      speaker: "Pastor Jonathan",
      date: "23 Mar 2026",
      scripture: "Acts 2:1-21",
      youtubeId: "dQw4w9WgXcQ",
      hasNotes: true,
      notesHref: "pages/sermon-notes.html"
    },
    {
      id: "s6",
      title: "Called and Chosen",
      series: "Foundations",
      speaker: "Pastor Claire",
      date: "16 Mar 2026",
      scripture: "John 15:16",
      youtubeId: "dQw4w9WgXcQ",
      hasNotes: false,
      notesHref: null
    }
  ],

  /* ---- Worship Set Lists ---- */
  setlists: [
    {
      id: "wl1",
      date: "20",
      month: "Apr",
      year: "2026",
      service: "Morning Service",
      theme: "Walking in the Light",
      songs: [
        { title: "Holy is the Lord",      highlight: true,  artist: "Chris Tomlin",       youtubeId: "hVWBt8bfmCs" },
        { title: "Your Love Never Fails", highlight: false, artist: "Jesus Culture",       youtubeId: "IoezWBPGRAc" },
        { title: "Holy Forever",          highlight: true,  artist: "Chris Tomlin",       youtubeId: "IkHgxKemCRk" },
        { title: "Praise (Be Lifted Up)", highlight: false, artist: "Elevation Worship",  youtubeId: "raFnjGVkHe8" },
        { title: "This is the Air I Breathe", highlight: false, artist: "Michael W. Smith", youtubeId: "GGFeo08LkcY" }
      ]
    },
    {
      id: "wl2",
      date: "13",
      month: "Apr",
      year: "2026",
      service: "Morning Service",
      theme: "The God Who Pursues",
      songs: [
        { title: "Reckless Love",                 highlight: true,  artist: "Cory Asbury",      youtubeId: null },
        { title: "What A Friend We Have In Jesus",highlight: false, artist: "Traditional",       youtubeId: null },
        { title: "Goodness of God",               highlight: true,  artist: "Bethel Music",     youtubeId: null },
        { title: "Yet Not I But Through Christ",  highlight: false, artist: "CityAlight",       youtubeId: null },
        { title: "The Blessing",                  highlight: false, artist: "Kari Jobe",        youtubeId: null }
      ]
    },
    {
      id: "wl3",
      date: "6",
      month: "Apr",
      year: "2026",
      service: "Morning Service",
      theme: "Faith That Moves Mountains",
      songs: [
        { title: "Do It Again",           highlight: true,  artist: "Elevation Worship", youtubeId: null },
        { title: "Cornerstone",           highlight: false, artist: "Hillsong Worship",  youtubeId: null },
        { title: "What A Beautiful Name", highlight: true,  artist: "Hillsong Worship",  youtubeId: null },
        { title: "Chain Breaker",         highlight: false, artist: "Zach Williams",     youtubeId: null },
        { title: "Surrounded",            highlight: false, artist: "Michael W. Smith",  youtubeId: null }
      ]
    },
    {
      id: "wl4",
      date: "30",
      month: "Mar",
      year: "2026",
      service: "Morning Service",
      theme: "Rest in a Restless World",
      songs: [
        { title: "Turn Your Eyes Upon Jesus", highlight: true,  artist: "Traditional",     youtubeId: null },
        { title: "Peace Like a River",        highlight: false, artist: "Traditional",     youtubeId: null },
        { title: "Still",                     highlight: true,  artist: "Hillsong",        youtubeId: null },
        { title: "In Christ Alone",           highlight: false, artist: "Keith Getty",     youtubeId: null }
      ]
    },
    {
      id: "wl5",
      date: "23",
      month: "Mar",
      year: "2026",
      service: "Morning Service",
      theme: "Pentecost Season",
      songs: [
        { title: "Spirit of the Living God", highlight: true,  artist: "Vertical Worship", youtubeId: null },
        { title: "Move",                     highlight: false, artist: "MercyMe",          youtubeId: null },
        { title: "Fire of Your Love",        highlight: false, artist: "Nate Hulfish",     youtubeId: null },
        { title: "Resurrecting",             highlight: false, artist: "Elevation Worship",youtubeId: null },
        { title: "Glorious Day",             highlight: true,  artist: "Passion",          youtubeId: null }
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
      addedDate: "20 Apr 2026"
    },
    {
      id: "ns1",
      title: "Holy Forever",
      artist: "Chris Tomlin",
      youtubeId: "IkHgxKemCRk",
      key: "G",
      tempo: "Slow",
      tags: ["Worship", "Praise"],
      notes: "We're learning this one together — great to listen to at home before Sunday.",
      addedDate: "13 Apr 2026"
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
      addedDate: "6 Apr 2026"
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
      addedDate: "30 Mar 2026"
    }
  ],

  /* ---- Events ---- */
  events: [
    {
      id: "e1",
      day: "21",
      month: "Apr",
      type: "Community",
      title: "Easter Monday Community Lunch",
      time: "12:30pm",
      desc: "Free lunch for all. Everyone welcome."
    },
    {
      id: "e2",
      day: "26",
      month: "Apr",
      type: "Youth",
      title: "Youth Night",
      time: "6:00pm",
      desc: "Games, food and worship for ages 11–18."
    },
    {
      id: "e3",
      day: "3",
      month: "May",
      type: "Women",
      title: "Women's Breakfast",
      time: "9:30am",
      desc: "Monthly gathering for women of all ages."
    },
    {
      id: "e4",
      day: "10",
      month: "May",
      type: "All Ages",
      title: "Church Family Picnic",
      time: "1:00pm",
      desc: "Bring a blanket and some food — let's celebrate together."
    },
    {
      id: "e5",
      day: "17",
      month: "May",
      type: "Prayer",
      title: "Night of Prayer",
      time: "7:30pm",
      desc: "An evening set aside for worship and intercession."
    },
    {
      id: "e6",
      day: "24",
      month: "May",
      type: "Training",
      title: "Worship Team Workshop",
      time: "2:00pm",
      desc: "Open to all musicians and singers. Led by our worship director."
    }
  ]

};
