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
      title: "Sunday Preach",
      series: "Sunday Preaching",
      speaker: "Pastor Claire",
      date: "21 Jun 2026",
      scripture: "",
      verseImage: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=600&q=80",
      youtubeId: null,
      hasNotes: false,
      notesHref: null
    },
    {
      id: "s2",
      title: "Sunday Preach",
      series: "Sunday Preaching",
      speaker: "Pastor Claire",
      date: "14 Jun 2026",
      scripture: "",
      verseImage: "https://images.unsplash.com/photo-1532153955177-f59af40d6472?w=600&q=80",
      youtubeId: null,
      hasNotes: false,
      notesHref: null
    },
    {
      id: "s3",
      title: "Guest Preach",
      series: "Guest Preaching",
      speaker: "Marty Davison — Elim International Missions",
      date: "7 Jun 2026",
      scripture: "",
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
      date: "21",
      month: "Jun",
      year: "2026",
      service: "Morning Service",
      theme: "Sunday Morning Worship",
      songs: [
        { title: "Lion and the Lamb",    highlight: true,  artist: "Bethel Music / Leeland", youtubeId: "C9ujBoud26k" },
        { title: "Who You Say I Am",     highlight: false, artist: "Hillsong Worship",        youtubeId: "lKw6uqtGFfo" },
        { title: "O Praise the Name",    highlight: true,  artist: "Hillsong Worship",        youtubeId: "7o-mfbvTshw" },
        { title: "My Jesus My Savior",   highlight: false, artist: "Darlene Zschech",         youtubeId: "KVkdfQMSayc" },
        { title: "Nothing Else",         highlight: false, artist: "Cody Carnes",             youtubeId: "RG5kF-a42Cc" }
      ]
    },
    {
      id: "wl2",
      date: "14",
      month: "Jun",
      year: "2026",
      service: "Morning Service",
      theme: "Sunday Morning Worship",
      songs: []
    },
    {
      id: "wl3",
      date: "7",
      month: "Jun",
      year: "2026",
      service: "Morning Service",
      theme: "Marty Davison — Guest Speaker",
      songs: [
        { title: "Praise",                highlight: true,  artist: "Elevation Worship", youtubeId: "raFnjGVkHe8" },
        { title: "This is Amazing Grace", highlight: false, artist: "Phil Wickham",      youtubeId: "XFRjr_x-yxU" },
        { title: "Do it Again",           highlight: false, artist: "Elevation Worship", youtubeId: "ZOBIPb-6PTc" }
      ]
    },
    {
      id: "wl4",
      date: "31",
      month: "May",
      year: "2026",
      service: "Morning Service",
      theme: "Holy Spirit Course — Final Session",
      songs: [
        { title: "Forever God is Faithful",      highlight: true,  artist: "Kari Jobe",           youtubeId: "huFra1mnIVE" },
        { title: "Great Are You Lord",            highlight: false, artist: "All Sons & Daughters", youtubeId: "2qUOHjnDIFs" },
        { title: "Gratitude",                     highlight: true,  artist: "Benjamin W. Hastings", youtubeId: "mE9UzNn2J5o" },
        { title: "Good Good Father",              highlight: false, artist: "Chris Tomlin",         youtubeId: "qlsQrycKKsY" },
        { title: "Great is the Lord Most Worthy", highlight: false, artist: "Michael W. Smith",     youtubeId: "YVL0aka7Bho" }
      ]
    },
    {
      id: "wl5",
      date: "24",
      month: "May",
      year: "2026",
      service: "Morning Service",
      theme: "The Unexhausted Blast",
      songs: [
        { title: "Trading My Sorrows",    highlight: true,  artist: "Darrell Evans",        youtubeId: "P4t7HXcJsD4" },
        { title: "Your Love Never Fails", highlight: false, artist: "Jesus Culture",         youtubeId: "IoezWBPGRAc" },
        { title: "Gratitude",             highlight: true,  artist: "Benjamin W. Hastings",  youtubeId: "mE9UzNn2J5o" },
        { title: "Holy Forever",          highlight: false, artist: "Chris Tomlin",          youtubeId: "IkHgxKemCRk" },
        { title: "Alpha and Omega",       highlight: false, artist: "Israel & New Breed",    youtubeId: "EfPJ4j5P5X8" }
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
