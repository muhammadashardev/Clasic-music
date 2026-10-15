export const navLinks = [
  { id: 'home', label: 'HOME', href: '#home', active: true },
  { id: 'events', label: 'EVENTS', href: '#events' },
  { id: 'about', label: 'ABOUT US', href: '#about' },
  { id: 'world', label: 'WORLD OF MUSIC', href: '#world' },
  { id: 'orchestra', label: 'ORCHESTRA', href: '#orchestra' },
  { id: 'news', label: 'NEWS', href: '#news' },
  { id: 'contact', label: 'CONTACT', href: '#contact' },
];

export const upcomingEvents = [
  {
    id: 1,
    tag: 'UPCOMING EVENT',
    title: "Beethoven's Symphony No. 7",
    date: '24 MAY 2024',
    time: '19:30 CET',
    location: 'CITY CONCERT HALL',
    venue: 'Main Grand Auditorium — Tier 1',
    conductor: 'Maestro Alexander Vance',
    price: '$85 – $240',
    seatsLeft: 34,
    image: '/images/concert_hall_thumb.jpg',
    description:
      "Celebrated as the 'Apotheosis of the Dance' by Wagner, Beethoven's Seventh Symphony radiates visceral rhythm, celebratory fire, and the iconic Allegretto.",
  },
  {
    id: 2,
    tag: 'UPCOMING EVENT',
    title: 'Mozart: Requiem in D Minor',
    date: '12 JUN 2024',
    time: '20:00 CET',
    location: 'ROYAL PHILHARMONIC HALL',
    venue: 'Symphony Hall — Stalls & Balcony',
    conductor: 'Elena Rostova',
    price: '$95 – $280',
    seatsLeft: 18,
    image: '/images/concert_hall_thumb.jpg',
    description:
      'A masterpiece of celestial transcendence, dramatic choral depth, and eternal serenity composed in the haunting final twilight of Mozart’s life.',
  },
  {
    id: 3,
    tag: 'UPCOMING EVENT',
    title: 'Tchaikovsky: Swan Lake & Symphony 5',
    date: '28 JUL 2024',
    time: '19:00 CET',
    location: 'OPÉRA GARNIER AUDITORIUM',
    venue: 'Golden Tier Parquet',
    conductor: 'Julian Montgomery',
    price: '$110 – $320',
    seatsLeft: 22,
    image: '/images/concert_hall_thumb.jpg',
    description:
      'Passionate Russian romanticism filled with opulent string melodies, brass fanfares, and the poetic waltzes of the immortal Swan Lake.',
  },
  {
    id: 4,
    tag: 'UPCOMING EVENT',
    title: 'Vivaldi: The Four Seasons Recomposed',
    date: '15 AUG 2024',
    time: '19:30 CET',
    location: 'VIENNA MUSIKVEREIN',
    venue: 'Golden Hall Chamber',
    conductor: 'Maestro Alexander Vance',
    price: '$75 – $210',
    seatsLeft: 41,
    image: '/images/concert_hall_thumb.jpg',
    description:
      'Nature unleashed through razor-sharp baroque violin virtuosity, summer storm tempests, and frozen winter pizzicato harmonies.',
  },
  {
    id: 5,
    tag: 'UPCOMING EVENT',
    title: 'Chopin & Rachmaninoff Piano Concertos',
    date: '04 SEP 2024',
    time: '20:00 CET',
    location: 'CONCERTGEBOUW AMSTERDAM',
    venue: 'Acoustic Center Stage',
    conductor: 'Sarah Chen-Brahms',
    price: '$120 – $350',
    seatsLeft: 12,
    image: '/images/concert_hall_thumb.jpg',
    description:
      'Sweeping emotional grandeur and transcendent piano fireworks featuring an international gold-medal virtuoso on a handcrafted Steinway D-274.',
  },
];

export const heroQuote = {
  quote: 'Music is the divine way to tell beautiful, poetic things to the heart.',
  author: 'PABLO CASALS',
  role: 'Cellist & Conductor',
};

export const orchestraStory = {
  badge: 'ESTABLISHED 1892',
  title: 'A Legacy of Sonic Splendor',
  subtitle: 'Over 130 Years of Classical Distinction',
  paragraphs: [
    'Founded in the cultural heart of Europe, The Grand Symphony has preserved the highest traditions of acoustic mastery, interpreting the sacred manuscripts of classical giants with fiery precision and emotional depth.',
    'Under the baton of Maestro Alexander Vance, the orchestra brings together 110 of the world’s most accomplished instrumentalists, performing in legendary concert halls across Vienna, Paris, London, and New York.',
  ],
  stats: [
    { label: 'Master Musicians', value: '110+' },
    { label: 'Historic Seasons', value: '132' },
    { label: 'Grammy Laureates', value: '18' },
    { label: 'Concert Venues', value: '45+' },
  ],
};

export const trailerInfo = {
  title: 'The Grand Symphony: 2024–2025 Season Experience',
  conductor: 'Maestro Alexander Vance',
  hall: 'Grand Concert Hall, Royal Opera',
  runtime: '3 min 45 sec',
  repertoire: ["Beethoven's 7th", 'Brahms 1st', 'Debussy La Mer'],
};

export const legacySectionData = {
  eyebrow: 'OUR MUSICAL LEGACY',
  titleLine1: 'A Tradition of Excellence.',
  titleLine2: 'A Future of Harmony.',
  paragraph:
    'We bring people together through the timeless power of classical music. From beloved masterpieces to inspiring contemporary compositions, our organization celebrates artistic expression, nurtures musical talent, and creates meaningful cultural experiences for every generation.',
  mission: 'Our mission is to make exceptional music an enduring part of our community.',
  badge: {
    est: 'EST.',
    line1: 'IN MUSICAL',
    line2: 'EXCELLENCE',
  },
  pillars: [
    {
      id: 'heritage',
      label: 'HERITAGE',
      title: 'Centuries of Acoustic Purity',
      desc: 'Preserving the sacred manuscripts, tempo markings, and emotional truth of classical masters since 1892.',
      highlight: '132 Historic Seasons',
    },
    {
      id: 'artistry',
      label: 'ARTISTRY',
      title: 'Virtuosity Without Compromise',
      desc: '110 master instrumentalists interpreting legendary scores on rare historical Italian violins and concert grands.',
      highlight: '18 Grammy Laureates',
    },
    {
      id: 'community',
      label: 'COMMUNITY',
      title: 'Inspiring Every Generation',
      desc: 'Providing free youth academies, open rehearsals, and civic symphonies to cultivate the listeners of tomorrow.',
      highlight: '65,000+ Annual Guests',
    },
  ],
};

export const performancesSectionData = {
  eyebrow: 'UPCOMING PERFORMANCES',
  titleLine1: 'Moments Worth',
  titleLine2: 'Listening To',
  subtitle:
    'Join us for an exceptional season of live performances, featuring celebrated compositions and the extraordinary talents of our musicians.',
  performances: [
    {
      id: 'p1',
      number: '01',
      title: 'An Evening of Mozart',
      date: 'November 14, 2026',
      venue: 'Grand Concert Hall',
      experience: 'The timeless brilliance of Mozart.',
      image: '/images/concert_hall_thumb.jpg',
      conductor: 'Maestro Alexander Vance',
      price: '$95 – $260',
      repertoire: 'Piano Concerto No. 21, Symphony No. 40 in G Minor, The Magic Flute Overture',
    },
    {
      id: 'p2',
      number: '02',
      title: 'Strings of Romance',
      date: 'November 28, 2026',
      venue: 'The Royal Theatre',
      experience: 'An intimate celebration of string music.',
      image: '/images/strings_of_romance.jpg',
      conductor: 'Elena Rostova',
      price: '$80 – $220',
      repertoire: 'Tchaikovsky Serenade for Strings, Barber Adagio, Mendelssohn Octet',
    },
    {
      id: 'p3',
      number: '03',
      title: 'Symphony of Light',
      date: 'December 12, 2026',
      venue: 'City Arts Auditorium',
      experience: 'Powerful orchestral works in a captivating setting.',
      image: '/images/symphony_of_light.jpg',
      conductor: 'Julian Montgomery',
      price: '$110 – $310',
      repertoire: 'Beethoven Symphony No. 9, Scriabin Poem of Ecstasy, Ravel Boléro',
    },
    {
      id: 'p4',
      number: '04',
      title: 'Baroque Winter Solstice',
      date: 'December 21, 2026',
      venue: 'Golden Chamber Cathedral',
      experience: 'Candlelit concertos and sacred choral grandeur.',
      image: '/images/concert_hall_thumb.jpg',
      conductor: 'Maestro Alexander Vance',
      price: '$85 – $240',
      repertoire: 'Vivaldi Winter, Bach Brandenburg Concerto No. 3, Handel Messiah Excerpts',
    },
    {
      id: 'p5',
      number: '05',
      title: 'Rachmaninoff & Russian Masters',
      date: 'January 09, 2027',
      venue: 'Philharmonic Great Hall',
      experience: 'Sweeping piano fireworks and soaring brass fanfares.',
      image: '/images/symphony_of_light.jpg',
      conductor: 'Sarah Chen-Brahms',
      price: '$120 – $340',
      repertoire: 'Piano Concerto No. 2, Symphonic Dances, Rimsky-Korsakov Scheherazade',
    },
  ],
};

export const featuredPerformanceData = {
  eyebrow: 'FEATURED PERFORMANCE',
  titleLine1: 'A PERFORMANCE TO',
  titleLine2: 'REMEMBER',
  subtitle: 'The Beauty of Live Classical Music',
  paragraphs: [
    'Every note tells a story. Every performance creates a moment that stays with you long after the final applause.',
    'Discover selected performances, musical highlights, and the artistry that defines our organization.',
  ],
  featuredMain: {
    title: "Beethoven's Symphony No. 9 'Choral'",
    conductor: 'Maestro Alexander Vance',
    hall: 'Grand Concert Hall, Golden Tier',
    duration: '1 hr 12 min',
    image: '/orchestra-bg.jpg',
    sideImage: '/violinist-raw.jpg',
  },
  galleryCards: [
    {
      id: 'g1',
      category: 'LIVE CONCERTS',
      title: 'Orchestral Masterpieces',
      image: '/violinist-raw.jpg',
      desc: 'Sweeping symphonic works performed by 110 world-class musicians.',
      instrument: 'Violin & Strings Section',
      pieces: 'Brahms Symphony 1, Sibelius Violin Concerto',
      frequency: 440.0,
    },
    {
      id: 'g2',
      category: 'HIGHLIGHTS',
      title: 'Iconic Performances',
      image: '/images/concert_hall_thumb.jpg',
      desc: 'Historic evenings that defined classical excellence in Europe.',
      instrument: 'Full Symphony Orchestra & Choir',
      pieces: "Beethoven Symphony 9, Mozart Requiem",
      frequency: 329.63,
    },
    {
      id: 'g3',
      category: 'FEATURED ARTISTS',
      title: 'Extraordinary Talent',
      image: '/images/pianist_hands.jpg',
      desc: 'International virtuosos performing on a handcrafted Steinway D-274.',
      instrument: 'Concert Grand Piano Soloist',
      pieces: 'Rachmaninoff Piano Concerto No. 2, Chopin Ballades',
      frequency: 261.63,
    },
    {
      id: 'g4',
      category: 'SPECIAL EVENTS',
      title: 'Unforgettable Evenings',
      image: '/images/trumpet_brass.jpg',
      desc: 'Gala premieres, brass fanfares, and candlelit festival concerts.',
      instrument: 'Symphonic Brass & Percussion',
      pieces: 'Copland Fanfare for the Common Man, Mahler 2 Resurrexit',
      frequency: 392.0,
    },
  ],
};

export const supportCommunityData = {
  eyebrow: 'SUPPORT & COMMUNITY',
  titleLine1: 'KEEP THE MUSIC',
  titleLine2: 'ALIVE',
  subtitle: 'Help the Next Generation Find Its Voice',
  paragraphs: [
    'Your support helps us celebrate musical excellence, create new performance opportunities, and inspire future generations of musicians.',
    'Together, we can ensure that classical music continues to enrich lives and bring communities closer.',
  ],
  impactVideo: {
    title: 'Our Impact: Preserving Symphonic Art for Tomorrow',
    duration: '4 min 18 sec',
    studentsSupported: '1,200+ Annually',
    instrumentsEndowed: '85 Historic Violins',
  },
  communityCard: {
    avatars: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
    ],
    tagline: 'Join a community that keeps classical music alive.',
  },
  impactCards: [
    {
      id: 'imp1',
      type: 'scholarship',
      title: 'Support Young Talent',
      desc: 'Provide scholarships and mentorship for aspiring musicians.',
      image: '/images/sheet_music_candle.jpg',
      stat: '420 Scholarships Awarded',
    },
    {
      id: 'imp2',
      type: 'workshops',
      title: 'Create Opportunities',
      desc: 'Help us stage performances, workshops and educational programs.',
      image: '/images/concert_hall_thumb.jpg',
      stat: '65 Masterclasses Held',
    },
    {
      id: 'imp3',
      type: 'outreach',
      title: 'Build Stronger Communities',
      desc: 'Bring people together through the power of music.',
      image: '/images/symphony_of_light.jpg',
      stat: '50,000+ Civic Guests',
    },
    {
      id: 'imp4',
      type: 'preservation',
      title: 'Preserve a Timeless Art',
      desc: 'Keep classical music alive for future generations.',
      image: '/images/strings_of_romance.jpg',
      stat: '130+ Preserved Scores',
    },
  ],
};

export const newsletterSectionData = {
  eyebrow: 'THE GRAND SYMPHONY • NEWSLETTER',
  titleLine1: 'STAY IN',
  titleLine2: 'HARMONY',
  subtitle:
    'Be the first to hear about upcoming concerts, special performances, artist announcements, and news from our musical community.',
  buttonText: 'SUBSCRIBE TO OUR NEWSLETTER',
  placeholder: 'Your email address',
  privacyNote: 'Unsubscribe at any time. We honor and preserve your acoustic and digital privacy.',
};

export const footerData = {
  brand: {
    name: 'THE GRAND SYMPHONY',
    subtitle: 'ORCHESTRA & OPERA HOUSE',
    founded: 'Est. 1892',
    motto: 'Preserving the sacred acoustic heritage of classical masters for every generation.',
  },
  venues: [
    { name: 'Vienna Musikverein', city: 'Vienna', hall: 'Golden Hall', residency: 'Oct – Dec' },
    { name: 'Royal Albert Hall', city: 'London', hall: 'Main Auditorium', residency: 'Jan – Feb' },
    { name: 'Opéra Garnier', city: 'Paris', hall: 'Grand Théâtre', residency: 'Mar – Apr' },
    { name: 'Carnegie Hall', city: 'New York', hall: 'Stern Auditorium', residency: 'May – Jun' },
    { name: 'Concertgebouw', city: 'Amsterdam', hall: 'Main Hall', residency: 'Jul – Aug' },
  ],
  columns: [
    {
      title: 'SEASON & REPERTOIRE',
      links: [
        { label: 'Upcoming Concerts', action: 'events' },
        { label: "Beethoven's 7th & 9th", action: 'event-1' },
        { label: 'Mozart Requiem Gala', action: 'event-2' },
        { label: 'Guest Soloists Roster', action: 'soloists' },
        { label: 'Digital Audio Archive', action: 'recordings' },
      ],
    },
    {
      title: 'VISIT & EXPERIENCE',
      links: [
        { label: 'Seating Tier Guide', action: 'booking' },
        { label: 'Concert Hall Etiquette', action: 'etiquette' },
        { label: 'VIP Boxes & Champagne', action: 'vip' },
        { label: 'Accessibility & Services', action: 'accessibility' },
        { label: 'Private Hall Hire', action: 'hire' },
      ],
    },
    {
      title: 'COMMUNITY & PATRONS',
      links: [
        { label: 'Become a Sponsor', action: 'sponsor' },
        { label: 'Youth Academy & Masterclasses', action: 'academy' },
        { label: 'Historic Instrument Trust', action: 'instruments' },
        { label: 'Endow a Musician Chair', action: 'endow' },
        { label: 'Volunteer Society', action: 'volunteer' },
      ],
    },
  ],
  socials: [
    { name: 'Spotify Classical', icon: 'Radio', href: 'https://spotify.com' },
    { name: 'YouTube Concerts', icon: 'Video', href: 'https://youtube.com' },
    { name: 'Instagram Archive', icon: 'Camera', href: 'https://instagram.com' },
    { name: 'Twitter / X News', icon: 'Share2', href: 'https://x.com' },
  ],
};






