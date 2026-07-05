export interface Service {
  id: string;           // Unique identifier (e.g., "ftl")
  title: string;        // Display name (e.g., "Full Truckload")
  description: string;  // What it does (2-3 sentences)
  icon: string;         // Unicode emoji or icon name
  benefits: string[];   // Array of 3-4 bullet points
}

export interface Testimonial {
  id: string;
  author: string;
  company: string;
  quote: string;
  rating: number;
}

export interface FleetVehicle {
  id: string;
  type: string;
  count: number;
  capacity: string;
  image: string;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company?: string;
  message: string;
  consent: boolean;
}

export interface QuoteFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company?: string;
  serviceType: string;
  origin: string;
  destination: string;
  cargoDescription: string;
  weight?: string;
  notes?: string;
  consent: boolean;
}