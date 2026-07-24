import { Service, Testimonial } from './types';
import { FleetVehicle } from './types';






export const COMPANY = {
  name: 'Quick Shipping Carriers',
  tagline: 'Safe, reliable, and fast. Trucking done right.',
  phone: '(905) 484-3600',
  email: 'safety@qscarriers.com',
  address: '7215 Goreway Drive, Mississauga, ON L4T 0B4, Canada',
  hours: 'Sun–Fri, 8:00 AM – 6:00 PM EST',
  serviceArea: 'Serving North America from the GTA',
};

export const MISSION = 'Deliver exceptional logistics and transportation solutions across Canada by leveraging our diverse, modern fleet. We are committed to ensuring the safe, timely, and efficient movement of goods, fostering strong partnerships with our clients, and empowering their success through unwavering reliability and integrity.';

export const VISION = 'Be Canada\'s most trusted logistics partner, recognized for setting the industry standard in operational excellence, technological innovation, and customer-centric service.';

export const SERVICES: Service[] = [
  {
    id: 'ftl',
    title: 'Full Truckload (FTL)',
    description: 'Your shipment, your truck. Direct, fast, and secure delivery for large loads, ensuring your freight arrives as a single, dedicated unit.',
    icon: 'truck',
    benefits: [
      'Dedicated vehicle assigned to your shipment',
      'Single pickup and delivery point',
      'Optimal for loads exceeding 10,000 lbs',
    ],
  },
  {
    id: 'ltl',
    title: 'Less-than-Truckload (LTL)',
    description: 'Cost-effective shipping for smaller freight. By sharing truck space with other shipments, you only pay for the space you use.',
    icon: 'package',
    benefits: [
      'Shared truck space reduces costs',
      'Pay only for space used',
      'Flexible for smaller shipments',
    ],
  },
  {
    id: 'flatbed',
    title: 'Flatbed',
    description: 'Versatile solutions for freight that is oversized, heavy, or unconventionally shaped. We handle the unique demands of your cargo.',
    icon: 'flatbed',
    benefits: [
      'Specialized handling for oversized cargo',
      'Heavy equipment and machinery transport',
      'Unconventional shape accommodation',
    ],
  },
  {
    id: 'reefer',
    title: 'Temperature Controlled (Reefer)',
    description: 'Protecting your perishable and sensitive goods with our modern, refrigerated "reefer" fleet. We ensure product integrity from start to finish.',
    icon: 'snowflake',
    benefits: [
      'Precise temperature control maintained',
      'Perishable goods protection',
      'Pharmaceutical and food industry certified',
    ],
  },
  {
    id: 'expedited',
    title: 'Expedited',
    description: 'When time is critical. We provide guaranteed on-time delivery for your most urgent shipments with dedicated vehicles and team drivers.',
    icon: 'zap',
    benefits: [
      'Guaranteed on-time delivery',
      'Dedicated drivers and vehicles',
      'Priority handling and routing',
    ],
  },
  {
    id: 'warehousing',
    title: 'Warehousing & Distribution',
    description: 'Storage and fulfillment solutions tailored to your logistics needs. From short-term storage to full supply chain management.',
    icon: 'warehouse',
    benefits: [
      'Secure climate-controlled storage',
      'Order fulfillment and picking',
      'Integrated supply chain management',
    ],
  },
];

export const TRUST_PILLARS = [
  {
    icon: "ShieldCheck",
    title: "Safe",
    description: "Industry-leading safety record and protocols",
  },
  {
    icon: "BadgeCheck",
    title: "Reliable",
    description: "On-time delivery guaranteed",
  },
  {
    icon: "Zap",
    title: "Fast",
    description: "Real-time tracking & updates",
  },
];

export const STATS = [
  { label: 'Happy Clients', value: '500+' },
  { label: 'Years in Business', value: '10+' },
  { label: 'Support Available', value: '24/7' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'John Smith',
    company: 'ABC Manufacturing',
    quote: 'QS Carriers delivered our shipment on time, every time. Professional, reliable, and truly responsive to our needs.',
    rating: 5,
  },
  {
    id: '2',
    author: 'Sarah Johnson',
    company: 'Retail Logistics Inc.',
    quote: 'Outstanding service. Their team understands our supply chain challenges and delivers solutions, not excuses.',
    rating: 5,
  },
  {
    id: '3',
    author: 'Mike Chen',
    company: 'Tech Distribution Co.',
    quote: 'Been working with QS for 3 years. Best carrier partner we have. Consistent quality and professionalism.',
    rating: 5,
  },
  {
    id: '4',
    author: 'Emily Rodriguez',
    company: 'Food & Beverage Distributors',
    quote: 'Their temperature-controlled service is exceptional. Never had a product integrity issue. Highly recommended.',
    rating: 5,
  },
];

export const NAVIGATION = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Fleet', href: '/fleet' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const CONTACT_METHODS = [
  {
    label: 'Phone',
    value: COMPANY.phone,
    href: `tel:${COMPANY.phone}`,
    icon: '📞',
  },
  {
    label: 'Email',
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
    icon: '✉️',
  },
  {
    label: 'Address',
    value: COMPANY.address,
    href: 'https://maps.google.com',
    icon: '📍',
  },
];


export const FLEET: FleetVehicle[] = [
  {
    id: 'straight-truck',
    type: 'Straight Trucks',
    count: 15,
    capacity: 'Up to 10,000 lbs',
    image: '',
  },
  {
    id: 'tractor-trailer',
    type: 'Tractor-Trailers',
    count: 25,
    capacity: 'Up to 45,000 lbs',
    image: '',
  },
  {
    id: 'flatbed-fleet',
    type: 'Flatbeds',
    count: 10,
    capacity: 'Oversized & heavy freight',
    image: '',
  },
  {
    id: 'reefer-fleet',
    type: 'Reefer (Temperature Controlled)',
    count: 12,
    capacity: 'Perishable & sensitive goods',
    image: '',
  },
];