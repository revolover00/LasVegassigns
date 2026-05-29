import { ServiceItem, PortfolioItem } from './types';

export const servicesData: ServiceItem[] = [
  {
    id: 'lobby-signs',
    title: 'Custom Interior Lobby Signs',
    description: 'Immersive lobby and reception signs using premium materials like brushed metals, polished acrylics, and backlit LED letters.',
    emoji: '🏢',
    details: [
      'Bespoke laser-cut 3D letters and shapes',
      'Warm white or RGB LED halo-illumination',
      'Materials: Brass, Copper, Stainless Steel, Brushed Acrylic',
      'Professional wall template installation with studs/spacers'
    ]
  },
  {
    id: 'aluminum-signs',
    title: 'Aluminum Signs & Posts',
    description: 'Durable, rust-free heavy-duty metal parking and property signs, designed to withstand the harshest outdoor sun and extreme weather.',
    emoji: '🛑',
    details: [
      '.080" heavy-gauge structural aluminum sheets',
      'Premium 3M engineering-grade reflective vinyl coatings',
      'Standard round/square powder-coated steel posts',
      'Vandalism and UV resistant protective overlays'
    ]
  },
  {
    id: 'metal-signs',
    title: 'Metal & Brushed Aluminum Signs',
    description: 'Sophisticated laser-etched panels and fabricated dimensional lettering that elevate your exterior building presence.',
    emoji: '🔩',
    details: [
      'Fabricated hollow metal letters for deep dimensional impact',
      'Anodized finishes in silver, gold, bronze, or Custom Painted',
      'Flush mount or architectural stand-off pins',
      'Perfect for banks, high-rise buildings, and designer showrooms'
    ]
  },
  {
    id: 'monument-signs',
    title: 'Pylon & Monument Signs',
    description: 'Stature-driven, structural monolithic ground-mounted architectural signs with custom integrated typography lights.',
    emoji: '🏗️',
    details: [
      'Structural steel internal frame with aluminum panels',
      'Interchangeable tenant directories or digital screen options',
      'Complete concrete foundation pouring and engineering permits',
      'Internal low-voltage energy-efficient LED modules'
    ]
  },
  {
    id: 'window-graphics',
    title: 'Window Graphics & Vinyl Decals',
    description: 'High-visibility frosted privacy films, computer cut vinyl branding, and large glass storefront graphic banners.',
    emoji: '🪟',
    details: [
      'Premium polymeric calendered colored vinyl wraps',
      'Frosted, etched, or sandblast simulated architectural glass films',
      'Micro-perforated standard one-way vision graphics',
      'Bubbles-free clean specialized dry-installation process'
    ]
  },
  {
    id: 'exterior-structures',
    title: 'Commercial Exterior Building Signs',
    description: 'Massive high-visibility building facade signs built using heavy steel framing, welded aluminum, and illuminated acrylic letters.',
    emoji: '🏬',
    details: [
      'Engineering stamped designs for wind-resistance',
      'Lightweight high-durability backing and trim-caps',
      'Integrated photocells for automatic dusk-to-dawn lighting',
      'Engineered installation on concrete, brick, block, or EIFS'
    ]
  }
];

export const portfolioData: PortfolioItem[] = [
  // 1. Aluminum Signs
  {
    id: 'prop-al-1',
    title: 'Anodized Aluminum Warning Boards',
    category: 'Aluminum Signs',
    emoji: '🛑',
    image: '/assets/images/aluminum_sign_1.jpg',
    dimensions: '24" x 36"',
    materials: 'Heavy Duty .080 Anodized Aluminum Sheet'
  },
  {
    id: 'prop-al-2',
    title: 'Reflective Traffic Safety Plaque',
    category: 'Aluminum Signs',
    emoji: '🛡️',
    image: '/assets/images/aluminum_sign_2.jpg',
    dimensions: '18" x 24"',
    materials: 'High-Intensity 3M Reflective Foil on Aluminum'
  },
  {
    id: 'prop-al-3',
    title: 'Custom Laser Cut Real Estate Metal Sheet',
    category: 'Aluminum Signs',
    emoji: '📐',
    image: '/assets/images/aluminum_sign_3.jpg',
    dimensions: '48" x 48"',
    materials: 'Rust-Proof Baked Enamel Aluminum Panel'
  },

  // 2. Apartment Signs
  {
    id: 'prop-apt-1',
    title: 'Lux Multi-Unit Building Address Sign',
    category: 'Apartment Signs',
    emoji: '🏢',
    image: '/assets/images/apartment_sign_1.jpg',
    dimensions: '60" x 40"',
    materials: 'Multi-layered Brushed Acrylic & Stainless Plate'
  },
  {
    id: 'prop-apt-2',
    title: 'Apartment Complex Directional Monolith',
    category: 'Apartment Signs',
    emoji: '🏘️',
    image: '/assets/images/apartment_sign_2.jpg',
    dimensions: '72" x 48"',
    materials: 'Welded Marine-Grade Aluminum & CNC Engraving'
  },
  {
    id: 'prop-apt-3',
    title: 'Apartment Unit Number Laser Plaque',
    category: 'Apartment Signs',
    emoji: '🔢',
    image: '/assets/images/apartment_sign_3.jpg',
    dimensions: '6" x 8"',
    materials: 'Etched Walnut Wood Embedded in Brass Panel'
  },

  // 3. Billboard Sign Refacing
  {
    id: 'prop-bill-2',
    title: 'LED Backlit Billboard Conversion',
    category: 'Billboard Sign Refacing',
    emoji: '💡',
    image: '/assets/images/billboard_refacing_2.jpg',
    dimensions: '30ft x 10ft',
    materials: 'Translucent Flex-Face with High Output LEDs'
  },

  // 4. Custom Metal Signs
  {
    id: 'prop-met-1',
    title: 'Deep Fabricated Stainless Steel Letters',
    category: 'Custom Metal Signs',
    emoji: '🔩',
    image: '/assets/images/metal_sign_1.jpg',
    dimensions: '36" High Letters',
    materials: 'Titanium-coated Mirror Gold Stainless Steel'
  },
  {
    id: 'prop-met-2',
    title: 'Laser Cut Industrial Machinery Nameplate',
    category: 'Custom Metal Signs',
    emoji: '⚙️',
    image: '/assets/images/metal_sign_2.jpg',
    dimensions: '24" x 12"',
    materials: 'Raw Acid-Etched Heavy Brass Plate'
  },
  {
    id: 'prop-met-3',
    title: 'Distressed Iron Exterior Logo Panel',
    category: 'Custom Metal Signs',
    emoji: '🪙',
    image: '/assets/images/metal_sign_3.jpg',
    dimensions: '40" x 40"',
    materials: 'Precision Waterjet Cut Corten Rusting Steel'
  },

  // 5. Custom Wall Logo Signs
  {
    id: 'prop-wal-1',
    title: '3D Laser Logo Graphic with Acrylic Face',
    category: 'Custom Wall Logo Signs',
    emoji: '🎨',
    image: '/assets/images/wall_logo_1.jpg',
    dimensions: '45" x 45"',
    materials: 'UV Printed Non-Glare Acrylic Mounted on Spacers'
  },
  {
    id: 'prop-wal-2',
    title: 'Multi-Color Neon Flex Wall Logo',
    category: 'Custom Wall Logo Signs',
    emoji: '🏷️',
    image: '/assets/images/wall_logo_2.jpg',
    dimensions: '50" x 30"',
    materials: 'Flexible Neon Tubing on Cast Acrylic Backing'
  },

  // 6. Interior Lobby Signs
  {
    id: 'prop-lob-1',
    title: 'Modern Floating Glass Reception Plaque',
    category: 'Interior Lobby Signs',
    emoji: '🛋️',
    image: '/assets/images/lobby_sign_1.jpg',
    dimensions: '60" x 30"',
    materials: 'Tempered Glass with Solid Brass Corner Stand-offs'
  },
  {
    id: 'prop-lob-2',
    title: 'Low Voltage Backlit LED Desk Sign',
    category: 'Interior Lobby Signs',
    emoji: '✨',
    image: '/assets/images/lobby_sign_2.jpg',
    dimensions: '80" x 24"',
    materials: 'Brushed Charcoal Aluminum with Halo Warm LEDs'
  },

  // 7. Lobby Directory Signs
  {
    id: 'prop-dir-1',
    title: 'Multi-Tenant Interlocking Directory Board',
    category: 'Lobby Directory Signs',
    emoji: '📋',
    image: '/assets/images/directory_sign_1.jpg',
    dimensions: '36" x 48"',
    materials: 'Satin Silver Aluminum Slats with Magnetic Inserts'
  },
  {
    id: 'prop-dir-2',
    title: 'Modern Clinic Room Grid Directory',
    category: 'Lobby Directory Signs',
    emoji: '🪧',
    image: '/assets/images/directory_sign_2.jpg',
    dimensions: '24" x 30"',
    materials: 'Frosted Glass Frame with Matte Black Vinyl List'
  },

  // 8. Monument Signs
  {
    id: 'prop-mon-1',
    title: 'Dual-Column Stone & Aluminum Monument',
    category: 'Monument Signs',
    emoji: '🏗️',
    image: '/assets/images/monument_sign_1.jpg',
    dimensions: '120" x 72"',
    materials: 'Structural Steel, Concrete Pedestal & Rustproof Panel'
  },
  {
    id: 'prop-mon-2',
    title: 'Commercial Plaza Pylon Multi-Tenant Tower',
    category: 'Monument Signs',
    emoji: '🗿',
    image: '/assets/images/monument_sign_2.jpg',
    dimensions: '20ft x 8ft',
    materials: 'Galvanized Frame with Dual-Sided Lightboxes'
  },

  // 9. Parking Lot Sign Posts
  {
    id: 'prop-parking-1',
    title: 'Heavy Duty Core-Drilled Parking Post',
    category: 'Parking Lot Sign Posts',
    emoji: '🅿️',
    image: '/assets/images/parking_post_1.jpg',
    dimensions: '8ft Height Post',
    materials: 'Powder-Coated Black Steel with Concrete Footing'
  },
  {
    id: 'prop-parking-2',
    title: 'ADA Accessible Shielded Post Structure',
    category: 'Parking Lot Sign Posts',
    emoji: '♿',
    image: '/assets/images/parking_post_2.jpg',
    dimensions: '7ft Height Post',
    materials: 'Galvanized U-Channel Post with Lock Bolt and Reflective Plate'
  },

  // 10. Window Graphics
  {
    id: 'prop-win-1',
    title: 'Conference Room Frosted Privacy Film',
    category: 'Window Graphics',
    emoji: '🪟',
    image: '/assets/images/window_graphic_1.jpg',
    dimensions: '120" x 48"',
    materials: 'Dusted Crystal Premium PVC Glass Film'
  },
  {
    id: 'prop-win-2',
    title: 'Storefront Full Color Micro-Perforated Wrap',
    category: 'Window Graphics',
    emoji: '🔮',
    image: '/assets/images/window_graphic_2.jpg',
    dimensions: 'Full Pane Installation',
    materials: 'Perforated One-Way Vision Film with UV Sealer'
  }
];
