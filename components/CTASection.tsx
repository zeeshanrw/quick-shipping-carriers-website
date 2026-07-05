import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 text-center px-6">
      <h2 className="text-3xl md:text-4xl mb-6">
        Ready to move your business forward?
      </h2>
      <Link
        href="/quote"
        className="inline-block bg-navy text-white px-8 py-4 rounded-full font-semibold hover:bg-navy-light transition-colors"
      >
        Get a Custom Quote
      </Link>
    </section>
  );
}