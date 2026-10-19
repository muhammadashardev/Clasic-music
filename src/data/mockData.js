export const navLinks = [
  { id: 'home', label: 'HOME', href: '#hero-section', targetId: 'hero-section' },
  { id: 'about', label: 'ABOUT', href: '#about-section', targetId: 'about-section' },
  { id: 'events', label: 'CONCERTS', href: '#events-section', targetId: 'events-section' },
  { id: 'artists', label: 'ARTISTS', href: '#artists-section', targetId: 'artists-section' },
  { id: 'community', label: 'COMMUNITY', href: '#community-section', targetId: 'community-section' },
  { id: 'contact', label: 'CONTACT', href: '#contact-section', targetId: 'contact-section' },
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

export const aboutPageData = {
  hero: {
    badge: 'ABOUT OUR ORGANIZATION',
    titleLine1: 'A Passion for Music.',
    titleLine2: 'A Legacy in the Making.',
    subtitle:
      'We believe classical music has the power to connect generations, transcend boundaries, and create moments of extraordinary beauty.',
    stats: [
      { label: 'Years of Acoustic Heritage', value: '134' },
      { label: 'Master Musicians on Stage', value: '110+' },
      { label: 'Legendary World Concert Halls', value: '45+' },
      { label: 'Annual Community Listeners', value: '65,000+' },
    ],
  },
  story: {
    badge: 'FOUNDING HERITAGE',
    title: 'Our Story',
    lead:
      'Built around a shared love of classical music, The Grand Symphony brings together musicians, audiences, and supporters to celebrate the richness of orchestral performance.',
    description:
      'Our programs honor the great composers while welcoming fresh interpretations, emerging talent, and new ways for audiences to experience live music. From the golden baroque halls of Europe to contemporary acoustic soundstages, we bring centuries of human emotion to life through every bow stroke and breath.',
    milestones: [
      {
        year: '1892',
        title: 'The Inaugural Overture',
        desc: 'Founded by sixty classical virtuosos in Vienna, performing Beethoven’s Fifth Symphony to a packed golden auditorium.',
        image: '/images/concert_hall_thumb.jpg',
      },
      {
        year: '1934',
        title: 'European Golden Era',
        desc: 'Permanent residencies established at Vienna Musikverein, Paris Opéra Garnier, and London Royal Albert Hall.',
        image: '/images/sheet_music_candle.jpg',
      },
      {
        year: '1988',
        title: 'Global Master Recording Trust',
        desc: 'First digitally mastered classical anthology, earning eighteen international Grammy and Grand Prix du Disque accolades.',
        image: '/images/strings_of_romance.jpg',
      },
      {
        year: '2026',
        title: 'A Modern Sonic Renaissance',
        desc: 'Pioneering open acoustic soundstages, immersive spatial symphonies, and universal youth masterclasses worldwide.',
        image: '/orchestra-bg.jpg',
      },
    ],
  },
  missionVision: {
    badge: 'PURPOSE & GUIDING PRINCIPLES',
    mission: {
      title: 'Our Mission',
      text: 'To present inspiring musical performances, support artistic development, and make classical music accessible to a wider audience.',
    },
    vision: {
      title: 'Our Vision',
      text: 'A vibrant musical community where artistic excellence thrives and every generation can discover the joy of classical music.',
    },
    values: [
      {
        id: 'artistry',
        icon: 'Music2',
        title: 'Artistry',
        desc: 'Pursuing excellence in every performance.',
        detail: 'Rigorous acoustic perfection, authentic tempo interpretations, and historical instruments.',
      },
      {
        id: 'community',
        icon: 'Users',
        title: 'Community',
        desc: 'Bringing people together through music.',
        detail: 'Connecting citizens, families, and lovers of art across all generations and borders.',
      },
      {
        id: 'education',
        icon: 'GraduationCap',
        title: 'Education',
        desc: 'Encouraging learning and musical discovery.',
        detail: 'Free student masterclasses, conductor fellowships, and sensory-friendly concerts.',
      },
      {
        id: 'innovation',
        icon: 'Sparkles',
        title: 'Innovation',
        desc: 'Finding new ways to share timeless works.',
        detail: 'Acoustic spatial audio, contemporary composer commissions, and modern staging.',
      },
      {
        id: 'inclusivity',
        icon: 'Globe',
        title: 'Inclusivity',
        desc: 'Welcoming audiences from all backgrounds.',
        detail: 'Accessible ticketing tiers, open rehearsals, and civic partnerships worldwide.',
      },
    ],
  },
  director: {
    badge: 'MEET OUR ARTISTIC DIRECTOR',
    titleLine1: 'Guiding the Music.',
    titleLine2: 'Inspiring the Future.',
    name: 'Maestro Alexander Vance',
    role: 'Artistic Director & Chief Conductor',
    bio:
      'Our artistic director brings together creative vision, musical knowledge, and a deep commitment to exceptional performance. Through thoughtful programming and collaboration, they help shape a distinctive musical identity for the organization.',
    quote:
      'Classical music is not a museum piece of the past; it is the living, beating heart of human emotion waiting to be rekindled with every downbeat.',
    tenure: '12 Seasons of Artistic Leadership',
    image: '/orchestra-bg.jpg',
  },
  people: {
    badge: 'THE ENSEMBLE & LEADERSHIP',
    title: 'The People Behind Every Performance',
    intro:
      'Our musicians, artistic leadership, and dedicated team share one purpose: creating meaningful musical experiences. Every rehearsal, composition, and performance reflects the commitment of people who believe in the lasting power of music.',
    leaders: [
      {
        name: 'Elena Rostova',
        role: 'Concertmaster & First Violin',
        bio: 'Juilliard Laureate performing on a 1714 Guarneri del Gesù violin.',
        image: '/violinist-raw.jpg',
      },
      {
        name: 'Sarah Chen-Brahms',
        role: 'Principal Guest Soloist (Piano)',
        bio: 'International Chopin Competition gold medalist and Steinway artist.',
        image: '/images/pianist_hands.jpg',
      },
      {
        name: 'Julian Montgomery',
        role: 'Principal Cello',
        bio: 'Former Royal Philharmonic soloist and chamber music director.',
        image: '/images/strings_of_romance.jpg',
      },
      {
        name: 'Marcus Sterling',
        role: 'Principal Brass & Horn',
        bio: 'Celebrated recording artist and founder of the Brass Quintet.',
        image: '/images/trumpet_brass.jpg',
      },
    ],
  },
  cta: {
    badge: 'JOIN OUR MUSICAL JOURNEY',
    title: 'Be Part of Our Story',
    description:
      'Discover our upcoming performances and experience the music that brings us together.',
    primaryButton: 'Explore Concerts',
    secondaryButton: 'Get in Touch',
  },
};

export const concertsPageData = {
  hero: {
    badge: 'OUR CONCERT SEASON',
    title: 'Experience the Extraordinary',
    description:
      'Discover upcoming concerts, special performances, and musical events created to inspire, delight, and bring audiences closer to the world of classical music.',
    primaryButton: 'Upcoming Events',
    secondaryButton: 'Past Performances',
    bgImage: '/images/concert_hall_thumb.jpg',
  },
  upcomingConcerts: [
    {
      id: 'mozart-evening',
      title: 'An Evening of Mozart',
      subtitle: 'A celebration of elegant melodies and timeless classical composition.',
      date: 'November 14, 2026',
      time: '19:30 CET / 7:30 PM',
      location: 'Grand Concert Hall',
      venue: 'Main Auditorium — Royal Box & Parquet',
      address: '120 Symphony Boulevard, Arts District',
      conductors: 'Maestro Alexander Vance',
      performers: 'Elena Rostova (Violin Soloist) & The Grand Symphony Orchestra',
      tickets: '$45 – $195',
      seatsRemaining: 42,
      category: 'Masterwork Orchestral',
      image: '/images/concert_hall_thumb.jpg',
      badge: 'Opening Gala',
      description:
        'Step into the world of Wolfgang Amadeus Mozart with a concert celebrating the elegance, emotion, and brilliance of classical composition. Features the legendary Symphony No. 40 in G Minor and the expressive Violin Concerto No. 5.',
    },
    {
      id: 'strings-romance',
      title: 'Strings of Romance',
      subtitle: 'Experience the expressive beauty of string instruments in an intimate musical setting.',
      date: 'November 28, 2026',
      time: '20:00 CET / 8:00 PM',
      location: 'The Royal Theatre',
      venue: 'Chamber Hall — Tiered Salon',
      address: '45 Heritage Row, Old Town Square',
      conductors: 'Guest Conductor Sarah Lindqvist',
      performers: 'Julian Montgomery (Principal Cello) & Virtuoso Chamber Strings',
      tickets: '$35 – $145',
      seatsRemaining: 18,
      category: 'Chamber Serenade',
      image: '/images/strings_of_romance.jpg',
      badge: 'Intimate Chamber',
      description:
        'A spellbinding candlelit evening dedicated to the lyrical grandeur of Tchaikovsky’s Souvenir de Florence, Dvořák’s Serenade for Strings, and Elgar’s poignant Cello Masterwork.',
    },
    {
      id: 'symphony-light',
      title: 'Symphony of Light',
      subtitle: 'An immersive orchestral performance featuring powerful harmonies and memorable musical themes.',
      date: 'December 12, 2026',
      time: '19:00 CET / 7:00 PM',
      location: 'City Arts Auditorium',
      venue: 'Acoustic Dome & Amphitheatre',
      address: '88 Horizon Way, Cultural Center',
      conductors: 'Maestro Alexander Vance',
      performers: 'The Full 90-Piece Symphony & Celestial Festival Chorus',
      tickets: '$50 – $220',
      seatsRemaining: 64,
      category: 'Grand Festival Finale',
      image: '/images/symphony_of_light.jpg',
      badge: 'Holiday Special',
      description:
        'An awe-inspiring sonic journey intertwining Debussy’s Clair de Lune, Holst’s The Planets, and Beethoven’s monumental Ode to Joy with custom synchronized architectural illumination.',
    },
  ],
  featuredEvent: {
    badge: 'FEATURED CONCERT',
    title: 'An Evening of Mozart',
    tagline:
      'Step into the world of Wolfgang Amadeus Mozart with a concert celebrating the elegance, emotion, and brilliance of classical composition.',
    date: 'November 14, 2026',
    time: '7:30 PM — 9:45 PM CET',
    venue: 'Grand Concert Hall',
    address: '120 Symphony Boulevard, Arts District, Vienna',
    performers: 'Alexander Vance (Conductor), Elena Rostova (Solo Violin)',
    tickets: '$45 Standard · $95 Premium · $195 Patron Box',
    whatToExpect:
      'Enjoy an evening of expressive melodies, accomplished musicianship, and timeless orchestral music in a memorable concert setting with acoustic perfection and complimentary champagne reception for Tier 1 guests.',
    disclaimer: '*All event information and ticket details are placeholders until confirmed by the organization.*',
    image: '/images/sheet_music_candle.jpg',
  },
  pastPerformances: [
    {
      id: 'past-1',
      title: "Beethoven's Ninth Symphony",
      season: 'Autumn Season 2025',
      date: 'October 15, 2025',
      hall: 'Vienna Musikverein',
      attendees: '2,400 Guests',
      image: '/images/concert_hall_thumb.jpg',
      highlight: 'Standing ovation lasting 14 minutes with 4 encores.',
    },
    {
      id: 'past-2',
      title: 'Baroque Illumination Gala',
      season: 'Summer Solstice 2025',
      date: 'June 21, 2025',
      hall: 'Palace Orangery Hall',
      attendees: '1,850 Guests',
      image: '/images/trumpet_brass.jpg',
      highlight: 'Historic Bach & Vivaldi suites performed on authentic period instruments.',
    },
    {
      id: 'past-3',
      title: 'Romantic Piano Concertos',
      season: 'Spring Festival 2025',
      date: 'April 04, 2025',
      hall: 'Royal Albert Hall',
      attendees: '3,100 Guests',
      image: '/images/pianist_hands.jpg',
      highlight: 'Rachmaninoff Piano Concerto No. 2 with guest soloist Sarah Chen-Brahms.',
    },
  ],
  cta: {
    title: 'Your Next Musical Experience Awaits',
    description: 'Join us for an upcoming performance and discover the beauty of classical music live.',
    browseButton: 'Browse Events',
    contactButton: 'Contact Our Team',
  },
};

export const artistsPageData = {
  hero: {
    badge: 'MEET OUR ARTISTS',
    title: 'The Talent Behind the Harmony',
    description:
      'Get to know the musicians whose dedication, individuality, and artistic expression bring every performance to life.',
    bgImage: '/violinist-raw.jpg',
  },
  artists: [
    {
      id: 'elena-rostova',
      name: 'Elena Rostova',
      role: 'Violinist',
      instrument: 'Violin',
      specialization: 'Classical Violin & Romantic Concertos',
      tagline: 'An expressive performer whose artistry brings warmth, precision, and character to every musical phrase.',
      bio: 'Elena Rostova is a dedicated performer with a passion for classical music and a commitment to bringing meaningful interpretations to the stage. Trained at the Juilliard School and Royal Academy of London, she performs on an exquisite 1714 Guarneri del Gesù violin. Through performance, collaboration, and continued artistic exploration, she contributes to the musical character of our organization.',
      specialties: ['Classical Violin Repertoire', 'Romantic Violin Concertos', 'Chamber Ensemble Leadership'],
      upcomingPerformances: ['An Evening of Mozart (Nov 14, 2026)', 'Strings of Romance (Nov 28, 2026)'],
      experience: '18 Years Professional Soloist',
      honors: 'Paganini Competition Gold Medalist',
      image: '/violinist-raw.jpg',
    },
    {
      id: 'julian-montgomery',
      name: 'Julian Montgomery',
      role: 'Cellist',
      instrument: 'Cello',
      specialization: 'Cello & Chamber Music',
      tagline: "A dedicated musician celebrated for the cello's rich tonal possibilities and emotional depth.",
      bio: 'Julian Montgomery brings an extraordinary lyrical sensitivity to the lower string register. Former principal cello with the London Chamber Orchestra, Julian has performed across Carnegie Hall, Berlin Philharmonie, and Sydney Opera House, championing both classical sonatas and visionary 20th-century suites.',
      specialties: ['Cello & Chamber Music', 'Baroque Solo Suites', 'Contemporary Symphonic Dialogue'],
      upcomingPerformances: ['Strings of Romance (Nov 28, 2026)', 'Symphony of Light (Dec 12, 2026)'],
      experience: '15 Seasons with The Grand Symphony',
      honors: 'Rostropovich Cello Laureate',
      image: '/images/strings_of_romance.jpg',
    },
    {
      id: 'sarah-chen',
      name: 'Sarah Chen-Brahms',
      role: 'Pianist',
      instrument: 'Steinway Concert Grand Piano',
      specialization: 'Classical Piano & Collaborative Artistry',
      tagline: 'A versatile performer with a passion for musical interpretation, collaboration, and the classical repertoire.',
      bio: 'Sarah Chen-Brahms is revered for her technical brilliance and crystalline touch. A celebrated interpreter of Chopin, Brahms, and Liszt, Sarah has recorded seven critically acclaimed albums and frequently collaborates with premier European chamber societies.',
      specialties: ['Classical Piano', 'Chamber Collaboration', 'Virtuoso Concertos'],
      upcomingPerformances: ['An Evening of Mozart (Nov 14, 2026)', 'New Year Vienna Recital (Jan 01, 2027)'],
      experience: 'Steinway Artist since 2017',
      honors: 'International Chopin Competition Winner',
      image: '/images/pianist_hands.jpg',
    },
    {
      id: 'alexander-vance',
      name: 'Maestro Alexander Vance',
      role: 'Conductor',
      instrument: 'Orchestral Baton & Artistic Direction',
      specialization: 'Orchestral Conducting & Repertoire Architecture',
      tagline: 'A musical leader who brings performers together through interpretation, communication, and a clear artistic vision.',
      bio: 'Maestro Alexander Vance serves as Chief Conductor and Artistic Director. With over two decades on prestigious podiums globally, he sculpts breathtaking orchestral dynamics, fusing rigorous historical scholarship with emotive, heart-stirring interpretations.',
      specialties: ['Orchestral Conducting', 'Symphonic Interpretations', 'Choral-Orchestral Direction'],
      upcomingPerformances: ['An Evening of Mozart (Nov 14, 2026)', 'Symphony of Light (Dec 12, 2026)'],
      experience: '12 Seasons as Music Director',
      honors: 'Grammy Nominee & European Conductor of the Year',
      image: '/orchestra-bg.jpg',
    },
  ],
  cta: {
    title: 'United by a Love of Music',
    description:
      'Our artistic community grows through collaboration, shared knowledge, and a commitment to musical excellence. Discover our concerts and experience our musicians in performance.',
    buttonText: 'Explore Events',
  },
};

export const galleryPageData = {
  hero: {
    badge: 'MUSIC IN MOTION',
    title: 'Every Performance Tells a Story',
    description:
      'Explore the moments, melodies, and memories that capture the spirit of our musical journey.',
    bgImage: '/images/symphony_of_light.jpg',
  },
  categories: ['All', 'Concerts', 'Musicians', 'Rehearsals', 'Special Events'],
  photos: [
    {
      id: 'photo-1',
      title: 'Grand Hall Under Stage Glow',
      category: 'Concerts',
      date: 'Autumn Gala 2025',
      image: '/images/concert_hall_thumb.jpg',
      aspect: 'col-span-1 md:col-span-2 row-span-2',
      caption: 'The golden tier filled to capacity as the overture begins.',
    },
    {
      id: 'photo-2',
      title: 'Cello Serenade in Warm Candlelight',
      category: 'Concerts',
      date: 'Strings of Romance Tour',
      image: '/images/strings_of_romance.jpg',
      caption: 'Intimate chamber acoustics at the Royal Theatre salon.',
    },
    {
      id: 'photo-3',
      title: 'Poetry on Ivory & Ebony',
      category: 'Musicians',
      date: 'Chopin Solos Recital',
      image: '/images/pianist_hands.jpg',
      caption: 'Sarah Chen-Brahms in an evocative nocturne interpretation.',
    },
    {
      id: 'photo-4',
      title: 'Score Annotations & Candlelight',
      category: 'Rehearsals',
      date: 'Late Night Dressing Room',
      image: '/images/sheet_music_candle.jpg',
      caption: 'Refining tempo and dynamic markings before the premiere.',
    },
    {
      id: 'photo-5',
      title: 'Brass Fanfare & Crescendo',
      category: 'Special Events',
      date: 'New Year Overture',
      image: '/images/trumpet_brass.jpg',
      caption: 'Gleaming brass horns ringing in the symphonic climax.',
    },
    {
      id: 'photo-6',
      title: 'Violinist in Ecstatic Focus',
      category: 'Musicians',
      date: 'Virtuoso Concerto',
      image: '/violinist-raw.jpg',
      caption: 'Concertmaster Elena Rostova during the Cadenza movement.',
    },
    {
      id: 'photo-7',
      title: 'The Orchestra in Harmony',
      category: 'Concerts',
      date: 'Brahms Requiem Live',
      image: '/orchestra-bg.jpg',
      caption: 'Over ninety musicians breathing and performing as one instrument.',
    },
    {
      id: 'photo-8',
      title: 'Architectural Light Symphony',
      category: 'Special Events',
      date: 'Festival of Light 2025',
      image: '/images/symphony_of_light.jpg',
      caption: 'Prismatic light projections synchronized to Beethoven’s Ninth.',
    },
  ],
  videoHighlights: {
    badge: 'CINEMATIC ARCHIVE',
    title: 'Hear the Music. Feel the Moment.',
    description:
      'Watch selected performances, artist interviews, and behind-the-scenes moments from our musical community.',
    featured: {
      title: 'Mozart: Symphony No. 40 in G Minor (Live in Vienna)',
      description:
        'Experience a selection of musical highlights showcasing the talent and dedication of our performers under the golden dome of Vienna Concert Hall.',
      duration: '8:42 min',
      thumbnail: '/images/concert_hall_thumb.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // or placeholder
    },
    clips: [
      {
        id: 'clip-1',
        title: 'Violin Cadenza Masterclass',
        artist: 'Elena Rostova',
        duration: '4:15 min',
        thumbnail: '/violinist-raw.jpg',
      },
      {
        id: 'clip-2',
        title: 'The Architecture of Tempo',
        artist: 'Alexander Vance Interview',
        duration: '6:30 min',
        thumbnail: '/orchestra-bg.jpg',
      },
      {
        id: 'clip-3',
        title: 'Chamber Rehearsal: Strings in Sync',
        artist: 'Julian Montgomery Quartet',
        duration: '5:10 min',
        thumbnail: '/images/strings_of_romance.jpg',
      },
    ],
  },
  pastHighlights: {
    badge: 'CONCERT ARCHIVE',
    title: 'A Season to Remember',
    description:
      'From intimate chamber performances to grand orchestral evenings, explore highlights from our previous events and revisit the moments that made each performance special.',
    buttonText: 'Explore Concert Archive',
    stats: [
      { label: 'Performances Staged', value: '148+' },
      { label: 'Audience Members', value: '185,000+' },
      { label: 'Cities Toured', value: '26' },
      { label: 'Standing Ovations', value: '100%' },
    ],
  },
  cta: {
    title: 'Make Your Next Memory with Us',
    description: 'Join us at an upcoming concert and become part of our next musical story.',
    buttonText: 'View Upcoming Events',
  },
};







