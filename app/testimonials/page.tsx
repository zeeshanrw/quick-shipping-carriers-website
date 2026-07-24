import { TESTIMONIALS } from "@/lib/constants";
import { Star } from "lucide-react";

export const metadata = {
  title: "Testimonials | Quick Shipping Carriers",
  description:
    "See what our clients say about working with Quick Shipping Carriers.",
};

export default function TestimonialsPage() {
  return (
    <div className="bg-white">
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">
          What Our Clients Say
        </h1>
        <p className="text-xl text-gray-medium">
          Real feedback from businesses who trust us with their freight.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-light rounded-2xl p-8 border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-gray-dark leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-semibold text-navy">{testimonial.author}</p>
                <p className="text-gray-medium text-sm">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy text-white py-16 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">
            Join our satisfied clients
          </h2>
          
           <a href="/quote"
            className="inline-block bg-accent text-white px-8 py-3 rounded-full font-semibold hover:bg-accent-dark transition-colors"
          >
            Get a Quote
          </a>
        </div>
      </section>
    </div>
  );
}