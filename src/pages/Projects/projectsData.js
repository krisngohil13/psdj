import projectImage from '../../assets/images/1.jpg';

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
          caption: "Living Room"
        },
        {
          id: 2,
          image: projectImage,
          caption: "Master Bedroom"
        },
        {
          id: 3,
          image: projectImage,
          caption: "Kitchen"
        },
        {
          id: 4,
          image: projectImage,
          caption: "Bathroom"
        }
      ]
    }
  },
  {
    id: 1002,
    title: 'Summer Pavilion',
    location: 'Highgate, London, United Kingdom',
    image: projectImage,
    area: '3,200 sq ft',
    category: 'exclusive-homes',
    shape: 'shape2',
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
          caption: "Main Hall"
        },
        {
          id: 2,
          image: projectImage,
          caption: "Outdoor Terrace"
        },
        {
          id: 3,
          image: projectImage,
          caption: "Dining Area"
        },
        {
          id: 4,
          image: projectImage,
          caption: "Pool View"
        }
      ]
    }
  },
  {
    id: 1003,
    title: 'Buxmead Penthouse',
    location: 'Highgate, London, United Kingdom',
    image: projectImage,
    area: '4,500 sq ft',
    category: 'multiple-residential',
    shape: 'shape3',
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
          caption: "Living Area"
        },
        {
          id: 2,
          image: projectImage,
          caption: "Master Suite"
        },
        {
          id: 3,
          image: projectImage,
          caption: "Smart Kitchen"
        },
        {
          id: 4,
          image: projectImage,
          caption: "City View Terrace"
        }
      ]
    }
  },
  {
    id: 1004,
    title: 'Graduate Hotels',
    location: 'Oxford & Cambridge, United Kingdom',
    image: projectImage,
    area: '8,000 sq ft',
    category: 'hospitality-commercial',
    shape: 'shape4',
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
          caption: "Lobby"
        },
        {
          id: 2,
          image: projectImage,
          caption: "Suite"
        },
        {
          id: 3,
          image: projectImage,
          caption: "Restaurant"
        },
        {
          id: 4,
          image: projectImage,
          caption: "Library Lounge"
        }
      ]
    }
  },
  {
    id: 1005,
    title: 'Private Estate Villa',
    location: 'Beachfront',
    image: projectImage,
    area: '12,000 sq ft',
    category: 'private-estates',
    shape: 'shape5',
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
          caption: "Main Residence"
        },
        {
          id: 2,
          image: projectImage,
          caption: "Beachfront View"
        },
        {
          id: 3,
          image: projectImage,
          caption: "Guest House"
        },
        {
          id: 4,
          image: projectImage,
          caption: "Infinity Pool"
        }
      ]
    }
  }
].map(project => ({
  ...project,
  gallery: project.details.gallery.map((item, index) => ({
    ...item,
    id: `${project.id}_${index + 1}` // Make gallery image IDs unique per project
  }))
})); 