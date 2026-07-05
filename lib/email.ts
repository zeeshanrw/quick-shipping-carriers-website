import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendQuoteEmail(data: {
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
}) {
  try {
    const result = await resend.emails.send({
      from: 'noreply@qscarriers.com',
      to: 'safety@qscarriers.com',
      subject: `New Quote Request from ${data.firstName} ${data.lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1F3A5F;">New Quote Request</h2>
          <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
          <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
          <p><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>
          ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ''}
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p><strong>Service Type:</strong> ${data.serviceType}</p>
          <p><strong>Origin:</strong> ${data.origin}</p>
          <p><strong>Destination:</strong> ${data.destination}</p>
          <p><strong>Cargo Description:</strong> ${data.cargoDescription}</p>
          ${data.weight ? `<p><strong>Weight/Dimensions:</strong> ${data.weight}</p>` : ''}
          ${data.notes ? `<p><strong>Additional Notes:</strong> ${data.notes}</p>` : ''}
        </div>
      `,
    });
    return result;
  } catch (error) {
    console.error('Quote email error:', error);
    throw error;
  }
}

export async function sendContactEmail(data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company?: string;
  serviceInterest?: string;
  message: string;
}) {
  try {
    const result = await resend.emails.send({
      from: 'noreply@qscarriers.com',
      to: 'safety@qscarriers.com',
      subject: `New Contact Message from ${data.firstName} ${data.lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1F3A5F;">New Contact Message</h2>
          <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
          <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
          <p><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>
          ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ''}
          ${data.serviceInterest ? `<p><strong>Service Interest:</strong> ${data.serviceInterest}</p>` : ''}
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${data.message}</p>
        </div>
      `,
    });
    return result;
  } catch (error) {
    console.error('Contact email error:', error);
    throw error;
  }
}