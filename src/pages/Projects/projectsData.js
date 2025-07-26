import projectImage from '../../assets/images/44.webp';
import projectImage2 from '../../assets/images/41.webp';
import projectImage3 from '../../assets/images/18.webp';
import projectImage4 from '../../assets/images/32.webp';
import projectImage5 from '../../assets/images/5.webp';
import projectImage6 from '../../assets/images/6.webp';
import projectImage7 from '../../assets/images/03_LIVING_03.webp';
import projectImage8 from '../../assets/images/3.webp';
import projectImage9 from '../../assets/images/4.webp';
import projectImage10 from '../../assets/images/1.webp';
import projectImage11 from '../../assets/images/2.webp';
import projectImage12 from '../../assets/images/07.webp';
import projectImage13 from '../../assets/images/24.webp';
import projectImage14 from '../../assets/images/40.webp';
import projectImage15 from '../../assets/images/hero.webp';

export const projectsData = [
  {
    id: 1001,
    title: 'Athlone House',
    location: 'Highgate, London, United Kingdom',
    image: projectImage,
    area: '5,000 sq ft',
    category: 'exclusive-homes',
    shape: 'shape1',
    details: {
      client: "Private Client",
      completionYear: "2023",
      duration: "18 months",
      services: [
        "Interior Design",
        "Space Planning",
        "Furniture Selection",
        "Lighting Design"
      ],
      description: "A luxurious residential project that seamlessly blends contemporary design with classic elements. The space was transformed to create an elegant and functional living environment that reflects the client's sophisticated taste.",
      challenge: "The main challenge was to preserve the building's historic features while incorporating modern amenities and design elements.",
      solution: "We developed a design strategy that carefully integrated new installations with existing architectural details, using high-end materials and custom-made furniture to achieve a harmonious balance.",
      results: "The project resulted in a stunning transformation that exceeded client expectations, creating a space that is both beautiful and practical for modern living.",
      gallery: [
        {
          id: 1,
          image: projectImage,
          caption: "Living Room",
          description: "A spacious and welcoming living room with a modern minimalist design.",
          category: 'living-room'
        },
        {
          id: 2,
          image: projectImage,
          caption: "Master Bedroom",
          description: "A luxurious master bedroom featuring a large bed and en-suite bathroom.",
          category: 'bedroom'
        },
        {
          id: 3,
          image: projectImage,
          caption: "Kitchen",
          description: "A modern kitchen with high-end appliances and ample counter space.",
          category: 'kitchen'
        },
        {
          id: 4,
          image: projectImage,
          caption: "Bathroom",
          description: "A beautifully designed bathroom with a large shower and luxurious fixtures.",
          category: 'bathroom'
        }
      ]
    }
  },
  {
    id: 1002,
    title: 'Summer Pavilion',
    location: 'Highgate, London, United Kingdom',
    image: projectImage2,
    area: '3,200 sq ft',
    category: 'exclusive-homes',
    shape: 'shape1',
    details: {
      client: "Luxury Resort Group",
      completionYear: "2023",
      duration: "12 months",
      services: [
        "Architectural Design",
        "Interior Design",
        "Landscape Integration",
        "Custom Furniture Design"
      ],
      description: "An elegant summer pavilion that creates a seamless connection between indoor and outdoor living. The design emphasizes natural light and panoramic views while maintaining privacy and comfort.",
      challenge: "Creating a structure that could withstand various weather conditions while maintaining an open, airy feel.",
      solution: "Implemented innovative architectural solutions with retractable glass walls and climate-controlled spaces that adapt to changing weather.",
      results: "A versatile space that serves as both an intimate retreat and an entertainment venue, perfectly integrated with its natural surroundings.",
      gallery: [
        {
          id: 1,
          image: projectImage,
          caption: "Main Hall",
          description: "A grand hall with high ceilings and elegant chandeliers.",
          category: 'main-hall'
        },
        {
          id: 2,
          image: projectImage,
          caption: "Outdoor Terrace",
          description: "A spacious outdoor terrace with panoramic views of the London skyline.",
          category: 'exterior'
        },
        {
          id: 3,
          image: projectImage,
          caption: "Dining Area",
          description: "A luxurious dining area with a large table and comfortable seating.",
          category: 'dining'
        },
        {
          id: 4,
          image: projectImage,
          caption: "Pool View",
          description: "A stunning view of the outdoor pool from the dining area.",
          category: 'pool'
        }
      ]
    }
  },
  {
    id: 1003,
    title: 'Buxmead Penthouse',
    location: 'Highgate, London, United Kingdom',
    image: projectImage3,
    area: '4,500 sq ft',
    category: 'multiple-residential',
    shape: 'shape1',
    details: {
      client: "Property Developer",
      completionYear: "2022",
      duration: "15 months",
      services: [
        "Interior Architecture",
        "Smart Home Integration",
        "Custom Millwork",
        "Art Curation"
      ],
      description: "A sophisticated penthouse that offers panoramic city views and state-of-the-art amenities. The design combines modern luxury with practical living spaces.",
      challenge: "Maximizing space utilization while maintaining a luxurious feel and incorporating advanced home automation.",
      solution: "Created multi-functional spaces with hidden storage and seamlessly integrated smart home technology throughout the residence.",
      results: "A modern, sophisticated living space that sets new standards for luxury penthouse living in the city.",
      gallery: [
        {
          id: 1,
          image: projectImage,
          caption: "Living Area",
          description: "A spacious and modern living area with a large sofa and coffee table.",
          category: 'living-room'
        },
        {
          id: 2,
          image: projectImage,
          caption: "Master Suite",
          description: "A luxurious master suite with a large bed, walk-in wardrobe, and en-suite bathroom.",
          category: 'bedroom'
        },
        {
          id: 3,
          image: projectImage,
          caption: "Smart Kitchen",
          description: "A modern kitchen with high-end appliances and a large island.",
          category: 'kitchen'
        },
        {
          id: 4,
          image: projectImage,
          caption: "City View Terrace",
          description: "A private terrace with panoramic views of the London skyline.",
          category: 'exterior'
        }
      ]
    }
  },
  {
    id: 1004,
    title: 'Graduate Hotels',
    location: 'Oxford & Cambridge, United Kingdom',
    image: projectImage4,
    area: '8,000 sq ft',
    category: 'hospitality-commercial',
    shape: 'shape1',
    details: {
      client: "Graduate Hotels Group",
      completionYear: "2023",
      duration: "24 months",
      services: [
        "Hotel Design",
        "Public Space Planning",
        "FF&E Selection",
        "Brand Integration"
      ],
      description: "A boutique hotel project that captures the academic heritage of its locations while providing modern comfort and luxury.",
      challenge: "Creating distinct identities for each location while maintaining brand consistency and incorporating local heritage.",
      solution: "Developed unique design narratives for each property that celebrate local history through custom artwork and carefully selected materials.",
      results: "Two distinctive hotels that have become landmarks in their respective cities, receiving acclaim for their design and atmosphere.",
      gallery: [
        {
          id: 1,
          image: projectImage,
          caption: "Lobby",
          description: "A grand and welcoming lobby with a reception desk and seating area."
        },
        {
          id: 2,
          image: projectImage,
          caption: "Suite",
          description: "A luxurious suite with a large bed, living area, and en-suite bathroom."
        },
        {
          id: 3,
          image: projectImage,
          caption: "Restaurant",
          description: "A modern restaurant with a large dining area and bar."
        },
        {
          id: 4,
          image: projectImage,
          caption: "Library Lounge",
          description: "A cozy library lounge with comfortable seating and a fireplace."
        }
      ]
    }
  },
  {
    id: 1005,
    title: 'Private Estate Villa',
    location: 'Beachfront',
    image: projectImage5,
    area: '12,000 sq ft',
    category: 'private-estates',
    shape: 'shape1',
    details: {
      client: "International Family Office",
      completionYear: "2023",
      duration: "30 months",
      services: [
        "Estate Planning",
        "Interior Design",
        "Landscape Design",
        "Custom Furniture Design"
      ],
      description: "An expansive beachfront estate that combines luxury with sustainable design principles. The project encompasses main residence, guest houses, and extensive outdoor living spaces.",
      challenge: "Creating a sustainable, hurricane-resistant structure while maintaining luxury and aesthetic appeal.",
      solution: "Utilized advanced building materials and technologies while incorporating local architectural elements and sustainable features.",
      results: "A magnificent estate that sets new standards for sustainable luxury living while respecting its natural environment.",
      gallery: [
        {
          id: 1,
          image: projectImage,
          caption: "Main Residence",
          description: "A luxurious main residence with a large living room, dining area, and master bedroom."
        },
        {
          id: 2,
          image: projectImage,
          caption: "Beachfront View",
          description: "A stunning view of the beachfront from the main residence's terrace."
        },
        { 
          id: 3,
          image: projectImage,
          caption: "Guest House",
          description: "A separate guest house for visitors, featuring a kitchen and living area."
        },
        {
          id: 4, 
          image: projectImage,
          caption: "Infinity Pool",
          description: "An expansive infinity pool with a waterfall feature and stunning views."
        }
      ]
    }
  },  
  {
    id: 1006,
    title: 'Private Estate Villa',
    location: 'Beachfront',
    image: projectImage6,
    area: '12,000 sq ft',
    category: 'private-estates',
    shape: 'shape1',
    details: {
      client: "International Family Office",
      completionYear: "2023",
      duration: "30 months",
      services: [
        "Estate Planning",
        "Interior Design",
        "Landscape Design",
        "Custom Furniture Design"
      ],
      description: "An expansive beachfront estate that combines luxury with sustainable design principles. The project encompasses main residence, guest houses, and extensive outdoor living spaces.",
      challenge: "Creating a sustainable, hurricane-resistant structure while maintaining luxury and aesthetic appeal.",
      solution: "Utilized advanced building materials and technologies while incorporating local architectural elements and sustainable features.",
      results: "A magnificent estate that sets new standards for sustainable luxury living while respecting its natural environment.",
      gallery: [
        {
          id: 1,
          image: projectImage,
          caption: "Main Residence",
          description: "A luxurious main residence with a large living room, dining area, and master bedroom."
        },
        {
          id: 2,
          image: projectImage,
          caption: "Beachfront View",
          description: "A stunning view of the beachfront from the main residence's terrace."
        },
        { 
          id: 3,
          image: projectImage,
          caption: "Guest House",
          description: "A separate guest house for visitors, featuring a kitchen and living area."
        },
        {
          id: 4, 
          image: projectImage,
          caption: "Infinity Pool",
          description: "An expansive infinity pool with a waterfall feature and stunning views."
        }
      ]
    }
  },

  // --- NEW PROJECT 1: Retail ---
  {
    id: 2001,
    title: 'Urban Boutique',
    location: 'Downtown, Mumbai, India',
    image: projectImage7,
    area: '2,200 sq ft',
    category: 'retail',
    shape: 'shape1',
    details: {
      client: "Fashion Retailer",
      completionYear: "2022",
      duration: "8 months",
      services: [
        "Retail Design",
        "Brand Experience",
        "Lighting Design",
        "Display Systems"
      ],
      description: "A vibrant boutique that blends contemporary retail trends with local cultural motifs. The space is designed to maximize product visibility and customer engagement.",
      challenge: "Creating a flexible layout for seasonal collections while maintaining a strong brand identity.",
      solution: "Modular display systems and dynamic lighting were used to allow for quick reconfiguration and immersive brand storytelling.",
      results: "The boutique has seen increased footfall and sales, becoming a local fashion destination.",
      gallery: [
        {
          id: 1,
          image: projectImage7,
          caption: "Storefront",
          description: "The boutique's bold facade draws attention from the busy street, inviting customers inside.",
          category: 'storefront'
        },
        {
          id: 2,
          image: projectImage8,
          caption: "Display Area",
          description: "Flexible shelving and lighting highlight the latest collections, making shopping intuitive and inspiring.",
          category: 'display-area'
        },
        {
          id: 3,
          image: projectImage9,
          caption: "Fitting Rooms",
          description: "Spacious, well-lit fitting rooms enhance the customer experience and encourage purchases.",
          category: 'fitting-rooms'
        }
      ]
    }
  },
  // --- NEW PROJECT 2: Office ---
  {
    id: 2002,
    title: 'Tech Startup HQ',
    location: 'Bangalore, India',
    image: projectImage10,
    area: '6,000 sq ft',
    category: 'office',
    shape: 'shape1',
    details: {
      client: "Innovative Tech Co.",
      completionYear: "2021",
      duration: "10 months",
      services: [
        "Workspace Planning",
        "Interior Architecture",
        "Furniture Design",
        "Acoustic Solutions"
      ],
      description: "A collaborative office space designed for a fast-growing tech startup. The design encourages creativity, teamwork, and well-being.",
      challenge: "Balancing open collaborative zones with private focus areas and sound control.",
      solution: "Used glass partitions, acoustic panels, and biophilic elements to create a dynamic yet comfortable environment.",
      results: "The HQ has become a model for modern workspaces, attracting top talent and boosting productivity.",
      gallery: [
        {
          id: 1,
          image: projectImage10,
          caption: "Open Workspace",
          description: "Bright, open-plan workstations foster collaboration and transparency.",
          category: 'open-workspace'
        },
        {
          id: 2,
          image: projectImage11,
          caption: "Breakout Zone",
          description: "Casual seating and greenery provide a relaxing space for informal meetings and recharging.",
          category: 'breakout-zone'
        },
        {
          id: 3,
          image: projectImage12,
          caption: "Conference Room",
          description: "State-of-the-art AV and acoustic treatments ensure productive meetings.",
          category: 'conference-room'
        }
      ]
    }
  },
  // --- NEW PROJECT 3: Public Spaces ---
  {
    id: 2003,
    title: 'City Library Atrium',
    location: 'Ahmedabad, India',
    image: projectImage13,
    area: '4,800 sq ft',
    category: 'public-spaces',
    shape: 'shape1',
    details: {
      client: "City Council",
      completionYear: "2020",
      duration: "14 months",
      services: [
        "Public Space Design",
        "Lighting Design",
        "Wayfinding",
        "Furniture Selection"
      ],
      description: "A light-filled atrium that serves as the heart of the city library, connecting visitors to knowledge and community events.",
      challenge: "Balancing quiet study areas with vibrant community spaces in a single open volume.",
      solution: "Zoned the atrium with flexible furniture and acoustic treatments, allowing for both solitude and social interaction.",
      results: "The atrium has become a beloved civic space, hosting events and fostering a love of reading.",
      gallery: [
        {
          id: 1,
          image: projectImage13,
          caption: "Atrium Overview",
          description: "Natural light floods the atrium, creating a welcoming and inspiring environment.",
          category: 'atrium-overview'
        },
        {
          id: 2,
          image: projectImage14,
          caption: "Reading Nooks",
          description: "Cozy corners with comfortable seating encourage visitors to linger with a good book.",
          category: 'reading-nooks'
        },
        {
          id: 3,
          image: projectImage15,
          caption: "Event Space",
          description: "A flexible area hosts workshops, readings, and community gatherings.",
          category: 'event-space'
        }
      ]
    }
  },

].map(project => ({
  ...project,
  gallery: project.details.gallery.map((item, index) => ({
    ...item,
    id: `${project.id}_${index + 1}` // Make gallery image IDs unique per project
  }))
})); 