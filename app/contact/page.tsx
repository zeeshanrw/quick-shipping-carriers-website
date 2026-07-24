import ContactForm from "@/components/ContactForm";
import { COMPANY } from "@/lib/constants";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata = {
  title: "Contact Us | Quick Shipping Carriers",
  description:
    "Get in touch with Quick Shipping Carriers. Call, email, or fill out our contact form.",
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">
          Get in Touch
        </h1>
        <p className="text-xl text-gray-medium">
          Whether you have a question about our services or want to join our
          team, we're ready to help.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Form */}
          <div className="md:col-span-2 bg-gray-light rounded-2xl p-8">
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="font-semibold text-navy mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-navy mt-0.5" strokeWidth={1.5} />
                  <a href={`tel:${COMPANY.phone}`} className="text-gray-dark hover:text-navy">
                    {COMPANY.phone}
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-navy mt-0.5" strokeWidth={1.5} />
                  <a href={`mailto:${COMPANY.email}`} className="text-gray-dark hover:text-navy">
                    {COMPANY.email}
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-navy mt-0.5" strokeWidth={1.5} />
                  <span className="text-gray-dark">{COMPANY.address}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-navy mt-0.5" strokeWidth={1.5} />
                  <span className="text-gray-dark">{COMPANY.hours}</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-gray-200 h-64">
              <iframe
                src="https://www.google.com/maps?q=7215+Goreway+Drive+Mississauga+ON&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                title="Quick Shipping Carriers Location"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}