import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const htmlContent = `
      <h2>New Investment Interest</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Country:</strong> ${data.country}</p>
      <p><strong>Investment Range:</strong> ${data.investmentRange}</p>
      <p><strong>Industry of Interest:</strong> ${data.industry}</p>
      <br />
      <h3>Description:</h3>
      <p>${data.description}</p>
    `;

    const response = await resend.emails.send({
      from: 'CM <info@cminvests.co>', // Use your verified domain here
      to: 'cm@pearlbay.com',
      subject: `Investment Interest: ${data.name}`,
      html: htmlContent,
    });

    if (response.error) {
      console.error('Resend error:', response.error);
      return NextResponse.json({ error: response.error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data: response.data });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
