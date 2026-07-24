"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().min(10, "Enter a valid phone number"),
  company: z.string().optional(),
  serviceInterest: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must consent to continue",
  }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const SERVICE_OPTIONS = [
  "Shipping & Freight",
  "Warehousing & Distribution",
  "Supply Chain Solutions",
  "Careers",
  "General Inquiry",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setStatus("submitting");
    // NOTE: no backend wired yet — this is UI-only for now (Phase 5 adds the API call)
    console.log("Form data:", data);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setStatus("success");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <h2 className="text-2xl font-bold text-navy mb-2">Your Details</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-dark mb-1">
            First Name
          </label>
          <input
            {...register("firstName")}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-navy"
            placeholder="John"
          />
          {errors.firstName && (
            <p className="text-accent text-sm mt-1">{errors.firstName.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-dark mb-1">
            Last Name
          </label>
          <input
            {...register("lastName")}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-navy"
            placeholder="Doe"
          />
          {errors.lastName && (
            <p className="text-accent text-sm mt-1">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-dark mb-1">
            Email Address
          </label>
          <input
            {...register("email")}
            type="email"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-navy"
            placeholder="you@example.com"
          />
          {errors.email && (
            <p className="text-accent text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-dark mb-1">
            Phone Number
          </label>
          <input
            {...register("phone")}
            type="tel"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-navy"
            placeholder="(555) 123-4567"
          />
          {errors.phone && (
            <p className="text-accent text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-dark mb-1">
          Company Name (Optional)
        </label>
        <input
          {...register("company")}
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-navy"
          placeholder="ABC Corporation"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-dark mb-2">
          How can we help?
        </label>
        <div className="flex flex-wrap gap-2">
          {SERVICE_OPTIONS.map((option) => (
            <label
              key={option}
              className="border border-gray-300 rounded-full px-4 py-2 text-sm cursor-pointer has-[:checked]:bg-navy has-[:checked]:text-white has-[:checked]:border-navy transition-colors"
            >
              <input
                {...register("serviceInterest")}
                type="radio"
                value={option}
                className="sr-only"
              />
              {option}
            </label>
          ))}
        </div>
        {errors.serviceInterest && (
          <p className="text-accent text-sm mt-1">{errors.serviceInterest.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-dark mb-1">
          Your Message
        </label>
        <textarea
          {...register("message")}
          rows={5}
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-navy"
          placeholder="Tell us more about your needs..."
        />
        {errors.message && (
          <p className="text-accent text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      <div>
        <label className="flex items-start gap-2 text-sm text-gray-dark">
          <input {...register("consent")} type="checkbox" className="mt-1" />
          I consent to Quick Shipping Carriers collecting my details through this form.
        </label>
        {errors.consent && (
          <p className="text-accent text-sm mt-1">{errors.consent.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-navy text-white py-3 rounded-full font-semibold hover:bg-navy-light transition-colors disabled:opacity-50"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="text-green-600 text-sm text-center">
          Message sent! We'll get back to you within 24 hours.
        </p>
      )}
    </form>
  );
}