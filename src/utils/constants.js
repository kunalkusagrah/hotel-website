// Hotel Data Constants

export const HOTEL = {
  name: 'The Himalayan Haven',
  tagline: 'Luxury Reimagined in the Himalayas',
  script: 'Rich & Serene',
  address: 'Old Manali Road, Manali, Himachal Pradesh 175131',
  phone: '+91 98765 43210',
  email: 'stay@himalayanhaven.in',
  checkIn: '2:00 PM',
  checkOut: '12:00 PM',
  // Set to a YouTube URL (e.g. 'https://www.youtube.com/watch?v=ID')
  // or a direct MP4 URL to enable the hotel film. Leave empty to show Coming Soon.
  filmUrl: '',
};

export const NAV_LINKS = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'rooms', label: 'Rooms', href: '#rooms' },
  { id: 'gallery', label: 'Gallery', href: '#gallery' },
  { id: 'testimonials', label: 'Reviews', href: '#testimonials' },
  { id: 'reels', label: 'Reels', href: '#reels' },
  { id: 'contact', label: 'Contact', href: '#contact' },
  { id: 'about-brief', label: 'About', href: '#about-brief' },
];

export const ROOMS = [
  {
    id: 1,
    name: 'Himalayan Suite',
    type: 'Suite',
    price: 12500,
    size: '85 m²',
    capacity: 2,
    category: 'Exclusive',
    description: 'Panoramic floor-to-ceiling windows frame the snow-capped peaks. Private balcony, butler service, and a deep-soaking tub overlooking the valley.',
    amenities: ['King Bed', 'Private Balcony', 'Mountain View', 'Butler Service', 'Jacuzzi', 'Fireplace'],
    tag: 'Best Seller',
    color: 'from-forest-800 to-forest-900',
    accent: '#54a558',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
  },
  {
    id: 2,
    name: 'Valley View Villa',
    type: 'Villa',
    price: 18000,
    size: '140 m²',
    capacity: 4,
    category: 'Royal',
    description: 'A standalone villa nestled in pine forests with a private plunge pool, open fireplace, and a dedicated chef—pure Himalayan indulgence.',
    amenities: ['2 Bedrooms', 'Private Pool', 'Chef Service', 'Forest View', 'Fireplace', 'Living Room'],
    tag: 'Most Luxurious',
    color: 'from-mahogany-700 to-mahogany-900',
    accent: '#c94830',
    image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80',
  },
  {
    id: 3,
    name: 'Alpine Retreat',
    type: 'Deluxe',
    price: 7500,
    size: '52 m²',
    capacity: 2,
    category: 'Beach',
    description: 'Warm wooden interiors, handwoven Kullu shawls on the bed, and a crackling fireplace. The quintessential mountain escape.',
    amenities: ['Queen Bed', 'Mountain View', 'Fireplace', 'Rainfall Shower', 'Sitting Area'],
    tag: 'Most Popular',
    color: 'from-cream-600 to-cream-800',
    accent: '#a8845a',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
  },
  {
    id: 4,
    name: 'Stargazer Loft',
    type: 'Loft',
    price: 9800,
    size: '68 m²',
    capacity: 2,
    category: 'Private',
    description: 'A retractable glass ceiling transforms your bedroom into an observatory. Fall asleep under a canopy of Himalayan stars.',
    amenities: ['Glass Ceiling', 'Stargazing Deck', 'Telescope', 'King Bed', 'Mini Bar'],
    tag: 'Unique Experience',
    color: 'from-slate-700 to-slate-900',
    accent: '#475569',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80',
  },
];

export const AMENITIES = [
  {
    id: 1,
    icon: '🏔️',
    title: 'Mountain Spa',
    description: 'Ayurvedic treatments with locally sourced Himalayan herbs and oils for complete rejuvenation.',
  },
  {
    id: 2,
    icon: '🍽️',
    title: 'Fine Dining',
    description: 'Authentic Himachali cuisine meets global gastronomy with ingredients sourced from local farms.',
  },
  {
    id: 3,
    icon: '🔥',
    title: 'Bonfire Lounge',
    description: 'Evening bonfires under the stars with live folk music and local spirits.',
  },
  {
    id: 4,
    icon: '🎿',
    title: 'Adventure Hub',
    description: 'Curated treks, skiing, paragliding, and river rafting experiences with expert guides.',
  },
  {
    id: 5,
    icon: '🧘',
    title: 'Yoga Pavilion',
    description: 'Open-air pavilion for sunrise yoga and meditation with the Beas River in view.',
  },
  {
    id: 6,
    icon: '🚗',
    title: 'Concierge & Transfer',
    description: 'Seamless airport and city transfers with 24/7 concierge for every need.',
  },
];

export const DINING = [
  {
    id: 1,
    name: 'Peaks',
    type: 'The Rooftop Restaurant',
    description: 'Dine at 2,050m with unobstructed views of Rohtang Pass. Contemporary Indian cuisine curated by our Michelin-starred chef.',
    hours: '7:00 AM – 11:00 PM',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    tag: 'Signature',
  },
  {
    id: 2,
    name: 'The Deodar',
    type: 'Forest Floor Café',
    description: 'Nestled under century-old deodar trees. All-day breakfast, organic teas, and freshly baked mountain bread.',
    hours: '6:30 AM – 8:00 PM',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80',
    tag: 'Casual',
  },
  {
    id: 3,
    name: 'Ember & Oak',
    type: 'Bar & Grill',
    description: 'Craft cocktails infused with rare Himalayan botanicals, live music, and wood-fired artisan dishes.',
    hours: '4:00 PM – 1:00 AM',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    tag: 'Bar',
  },
];

export const ACTIVITIES = [
  {
    id: 1,
    name: 'Rohtang Expedition',
    category: 'Adventure',
    duration: 'Full Day',
    difficulty: 'Moderate',
    price: 'From ₹3,500',
    description: 'Conquer the legendary Rohtang Pass at 3,979m with our expert mountain guides.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
  },
  {
    id: 2,
    name: 'River Rafting',
    category: 'Water Sport',
    duration: '3 Hours',
    difficulty: 'Thrill',
    price: 'From ₹1,800',
    description: 'Battle the Grade III–IV rapids of the Beas River through pristine Himalayan gorges.',
    image: 'https://picsum.photos/seed/river-rafting/1200/800',
  },
  {
    id: 3,
    name: 'Hampta Pass Trek',
    category: 'Trekking',
    duration: '4 Days',
    difficulty: 'Challenging',
    price: 'From ₹12,000',
    description: 'A dramatic crossover trek connecting lush Kullu Valley with the arid Lahaul landscape.',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80',
  },
  {
    id: 4,
    name: 'Paragliding',
    category: 'Sky Sport',
    duration: '30 Min',
    difficulty: 'Easy',
    price: 'From ₹2,200',
    description: 'Soar over the Kullu Valley with tandem paragliding from Solang—breathtaking views guaranteed.',
    image: 'https://images.unsplash.com/photo-1601024445121-e5b82f020549?w=800&q=80',
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Priya Sharma',
    origin: 'Mumbai, India',
    rating: 5,
    text: 'Waking up to snow-capped peaks through our suite window was the most magical experience. The staff remembered our names from day one. Truly world-class service in the heart of the Himalayas.',
    stay: 'Himalayan Suite, December 2025',
    avatar: 'https://i.pravatar.cc/80?img=1',
  },
  {
    id: 2,
    name: 'James & Sarah Mitchell',
    origin: 'London, UK',
    rating: 5,
    text: 'We chose this for our honeymoon and could not have been more blown away. The Stargazer Loft was absolute perfection—fell asleep counting stars every night. Will be back for our anniversary!',
    stay: 'Stargazer Loft, January 2026',
    avatar: 'https://i.pravatar.cc/80?img=5',
  },
  {
    id: 3,
    name: 'Arjun Mehta',
    origin: 'Bangalore, India',
    rating: 5,
    text: 'The spa, the restaurant, the views—everything exceeded expectations. The Hampta Pass trek organized by the hotel was life-changing. This is what luxury mountain travel should feel like.',
    stay: 'Valley View Villa, February 2026',
    avatar: 'https://i.pravatar.cc/80?img=3',
  },
  {
    id: 4,
    name: 'Yuki Tanaka',
    origin: 'Tokyo, Japan',
    rating: 5,
    text: 'I have stayed at many luxury resorts worldwide but The Himalayan Haven stands apart. The warmth of the staff, the authenticity of the experience, and the breathtaking landscape—unforgettable.',
    stay: 'Alpine Retreat, March 2026',
    avatar: 'https://i.pravatar.cc/80?img=9',
  },
];

export const GALLERY_IMAGES = [
  { id: 1, src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', label: 'Himalayan Vista', cat: 'Landscape' },
  { id: 2, src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80', label: 'Suite Interior', cat: 'Rooms' },
  { id: 3, src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80', label: 'Pool View', cat: 'Amenities' },
  { id: 4, src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80', label: 'Fine Dining', cat: 'Dining' },
  { id: 5, src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80', label: 'Mountain Trek', cat: 'Activities' },
  { id: 6, src: 'https://images.unsplash.com/photo-1601024445121-e5b82f020549?w=800&q=80', label: 'Paragliding', cat: 'Activities' },
  { id: 7, src: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80', label: 'Villa Exterior', cat: 'Rooms' },
  { id: 8, src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80', label: 'Poolside', cat: 'Amenities' },
  { id: 9, src: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80', label: 'Hampta Pass', cat: 'Activities' },
];

export const STATS = [
  { value: '15+', label: 'Acres of Private Forest' },
  { value: '42', label: 'Luxury Suites & Villas' },
  { value: '2050m', label: 'Altitude Above Sea Level' },
  { value: '4.9★', label: 'Guest Satisfaction Rating' },
];

export const MARQUEE_ITEMS = [
  'Luxury Mountain Retreat',
  'Himalayan Spa',
  'Fine Dining',
  'Adventure Awaits',
  'Rooftop Views',
  'Private Villas',
  'Bonfire Evenings',
  'Yoga & Wellness',
];

export const INSTA_REELS = [
  {
    id: 1,
    title: 'Sunrise Over Manali',
    video: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
    poster: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
    caption: 'Golden mornings at 2,050m',
  },
  {
    id: 2,
    title: 'Infinity Pool Moments',
    video: 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
    poster: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80',
    caption: 'Where luxury meets the mountains',
  },
  {
    id: 3,
    title: 'Evening Bonfire Vibes',
    video: 'https://samplelib.com/lib/preview/mp4/sample-15s.mp4',
    poster: 'https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?w=800&q=80',
    caption: 'Nights of warmth and stories',
  },
];

export const HOTEL_LOCATION = {
  mapQuery: 'The Himalayan Haven, Old Manali Road, Manali',
  googleMapsLink: 'https://www.google.com/maps/search/?api=1&query=The+Himalayan+Haven+Old+Manali+Road+Manali',
};
