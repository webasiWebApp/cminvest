import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import fs from 'fs';
import path from 'path';

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

function saveSubmissionLocally(data: Record<string, any>) {
  try {
    const dir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    const filePath = path.join(dir, 'submissions.json');
    const existing: any[] = fs.existsSync(filePath)
      ? JSON.parse(fs.readFileSync(filePath, 'utf-8'))
      : [];
    existing.push({
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      ...data,
    });
    fs.writeFileSync(filePath, JSON.stringify(existing, null, 2), 'utf-8');
  } catch (err) {
    console.warn('Could not save submission locally:', err);
  }
}

function generateEmailHtml(data: Record<string, any>) {
  const formType = data.formType;

  if (formType === 'million-project') {
    return `
      <div style="font-family: Arial, sans-serif; max-width: 680px; margin: 0 auto; color: #1e293b; line-height: 1.6;">
        <div style="background: #081B52; padding: 24px; border-radius: 12px 12px 0 0; color: white;">
          <span style="font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: #60a5fa; font-weight: bold;">CM 1M CM E3™ Initiative</span>
          <h1 style="margin: 8px 0 0; font-size: 22px; font-weight: bold; color: #ffffff;">New Project Application</h1>
        </div>
        <div style="background: #ffffff; padding: 28px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
          
          <h2 style="font-size: 15px; text-transform: uppercase; letter-spacing: 0.08em; color: #081B52; border-bottom: 2px solid #e2e8f0; padding-bottom: 6px; margin-top: 0;">1. Personal Information</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr><td style="padding: 6px 0; width: 35%; color: #64748b; font-weight: bold;">Full Name:</td><td style="padding: 6px 0; color: #0f172a;">${data.name || '-'}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b; font-weight: bold;">Age:</td><td style="padding: 6px 0; color: #0f172a;">${data.age || '-'}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b; font-weight: bold;">District:</td><td style="padding: 6px 0; color: #0f172a;">${data.district || '-'}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b; font-weight: bold;">Email:</td><td style="padding: 6px 0; color: #0f172a;"><a href="mailto:${data.email}">${data.email || '-'}</a></td></tr>
            <tr><td style="padding: 6px 0; color: #64748b; font-weight: bold;">Phone:</td><td style="padding: 6px 0; color: #0f172a;">${data.phone || '-'}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b; font-weight: bold;">Background:</td><td style="padding: 6px 0; color: #0f172a;">${data.background || '-'}</td></tr>
          </table>

          <h2 style="font-size: 15px; text-transform: uppercase; letter-spacing: 0.08em; color: #081B52; border-bottom: 2px solid #e2e8f0; padding-bottom: 6px; margin-top: 24px;">2. Business Details</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr><td style="padding: 6px 0; width: 35%; color: #64748b; font-weight: bold;">Business Name:</td><td style="padding: 6px 0; color: #0f172a; font-weight: bold;">${data.businessName || '-'}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b; font-weight: bold;">Industry / Sector:</td><td style="padding: 6px 0; color: #0f172a;">${data.industry || '-'}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b; font-weight: bold;">Business Stage:</td><td style="padding: 6px 0; color: #0f172a;">${data.stage || '-'}</td></tr>
          </table>

          <h2 style="font-size: 15px; text-transform: uppercase; letter-spacing: 0.08em; color: #081B52; border-bottom: 2px solid #e2e8f0; padding-bottom: 6px; margin-top: 24px;">3. Opportunity & Funding</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr><td style="padding: 6px 0; width: 35%; color: #64748b; font-weight: bold;">Problem Solving:</td><td style="padding: 6px 0; color: #0f172a;">${data.problem || '-'}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b; font-weight: bold;">Solution:</td><td style="padding: 6px 0; color: #0f172a;">${data.solution || '-'}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b; font-weight: bold;">Target Customers:</td><td style="padding: 6px 0; color: #0f172a;">${data.customers || '-'}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b; font-weight: bold;">Revenue Model:</td><td style="padding: 6px 0; color: #0f172a;">${data.revenueModel || '-'}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b; font-weight: bold;">Funding Required:</td><td style="padding: 6px 0; color: #059669; font-weight: bold;">${data.fundingAmount || '-'}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b; font-weight: bold;">Differentiation:</td><td style="padding: 6px 0; color: #0f172a;">${data.differentiation || '-'}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b; font-weight: bold;">Funding Use:</td><td style="padding: 6px 0; color: #0f172a;">${data.fundingUse || '-'}</td></tr>
          </table>

          <h2 style="font-size: 15px; text-transform: uppercase; letter-spacing: 0.08em; color: #081B52; border-bottom: 2px solid #e2e8f0; padding-bottom: 6px; margin-top: 24px;">4. Impact</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 6px 0; width: 35%; color: #64748b; font-weight: bold;">Jobs Created:</td><td style="padding: 6px 0; color: #0f172a;">${data.jobsCreated || '-'}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b; font-weight: bold;">Export Potential:</td><td style="padding: 6px 0; color: #0f172a;">${data.exportPotential || '-'}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b; font-weight: bold;">Benefit to Sri Lanka:</td><td style="padding: 6px 0; color: #0f172a;">${data.benefitToSriLanka || '-'}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b; font-weight: bold;">Social / Eco Angle:</td><td style="padding: 6px 0; color: #0f172a;">${data.socialAngle || '-'}</td></tr>
          </table>

          <div style="margin-top: 24px; padding-top: 14px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center;">
            Submitted via CM Investments — 1M CM E3™ Application Portal
          </div>
        </div>
      </div>
    `;
  }

  if (formType === 'million-project-partner') {
    return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b; line-height: 1.6;">
        <div style="background: #081B52; padding: 24px; border-radius: 12px 12px 0 0; color: white;">
          <span style="font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: #f59e0b; font-weight: bold;">Million Project Partner</span>
          <h1 style="margin: 8px 0 0; font-size: 22px; font-weight: bold; color: #ffffff;">New Investor / Partner Enquiry</h1>
        </div>
        <div style="background: #ffffff; padding: 28px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr><td style="padding: 8px 0; width: 35%; color: #64748b; font-weight: bold;">Full Name:</td><td style="padding: 8px 0; color: #0f172a; font-weight: bold;">${data.name || '-'}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b; font-weight: bold;">Email:</td><td style="padding: 8px 0; color: #0f172a;"><a href="mailto:${data.email}">${data.email || '-'}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #64748b; font-weight: bold;">Phone:</td><td style="padding: 8px 0; color: #0f172a;">${data.phone || '-'}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b; font-weight: bold;">Company:</td><td style="padding: 8px 0; color: #0f172a;">${data.company || 'Not provided'}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b; font-weight: bold;">Investment Interest:</td><td style="padding: 8px 0; color: #b45309; font-weight: bold;">${data.investmentInterest || '-'}</td></tr>
          </table>

          <div style="background: #f8fafc; padding: 16px; border-radius: 8px; border: 1px solid #e2e8f0; margin-top: 16px;">
            <p style="margin: 0 0 8px; font-weight: bold; color: #475569; font-size: 13px; text-transform: uppercase;">Message / Details:</p>
            <p style="margin: 0; color: #0f172a; white-space: pre-line;">${data.message || 'No additional message provided.'}</p>
          </div>

          <div style="margin-top: 24px; padding-top: 14px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center;">
            Submitted via CM Investments — Million Project Partner Form
          </div>
        </div>
      </div>
    `;
  }

  if (formType === 'investor-enquiry') {
    const rows = Object.entries(data)
      .filter(([key]) => key !== 'formType')
      .map(([key, value]) => `<tr><td style="padding: 6px 0; width: 35%; color: #64748b; font-weight: bold; text-transform: capitalize;">${key.replace(/([A-Z])/g, ' $1')}:</td><td style="padding: 6px 0; color: #0f172a;">${value}</td></tr>`)
      .join('\n');

    return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b; line-height: 1.6;">
        <div style="background: #081B52; padding: 24px; border-radius: 12px 12px 0 0; color: white;">
          <h1 style="margin: 0; font-size: 20px; font-weight: bold; color: #ffffff;">New Investor Enquiry (Why Invest SL)</h1>
        </div>
        <div style="background: #ffffff; padding: 24px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
          <table style="width: 100%; border-collapse: collapse;">
            ${rows}
          </table>
        </div>
      </div>
    `;
  }

  // Default / InvestmentForm
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b; line-height: 1.6;">
      <div style="background: #081B52; padding: 24px; border-radius: 12px 12px 0 0; color: white;">
        <h1 style="margin: 0; font-size: 20px; font-weight: bold; color: #ffffff;">New Strategic Investment Interest</h1>
      </div>
      <div style="background: #ffffff; padding: 24px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 16px;">
          <tr><td style="padding: 6px 0; width: 35%; color: #64748b; font-weight: bold;">Name:</td><td style="padding: 6px 0; color: #0f172a; font-weight: bold;">${data.name || '-'}</td></tr>
          <tr><td style="padding: 6px 0; color: #64748b; font-weight: bold;">Email:</td><td style="padding: 6px 0; color: #0f172a;"><a href="mailto:${data.email}">${data.email || '-'}</a></td></tr>
          <tr><td style="padding: 6px 0; color: #64748b; font-weight: bold;">Phone:</td><td style="padding: 6px 0; color: #0f172a;">${data.phone || '-'}</td></tr>
          <tr><td style="padding: 6px 0; color: #64748b; font-weight: bold;">Country:</td><td style="padding: 6px 0; color: #0f172a;">${data.country || '-'}</td></tr>
          <tr><td style="padding: 6px 0; color: #64748b; font-weight: bold;">Investment Range:</td><td style="padding: 6px 0; color: #081B52; font-weight: bold;">${data.investmentRange || '-'}</td></tr>
          <tr><td style="padding: 6px 0; color: #64748b; font-weight: bold;">Industry:</td><td style="padding: 6px 0; color: #0f172a;">${data.industry || '-'}</td></tr>
        </table>
        <div style="background: #f8fafc; padding: 14px; border-radius: 8px; border: 1px solid #e2e8f0;">
          <p style="margin: 0 0 6px; font-weight: bold; color: #475569; font-size: 13px;">Project / Investment Description:</p>
          <p style="margin: 0; color: #0f172a; white-space: pre-line;">${data.description || '-'}</p>
        </div>
      </div>
    </div>
  `;
}

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Basic validation
    if (!data.email && !data.phone && !data.name) {
      return NextResponse.json(
        { error: 'Please provide at least a name, email, or phone number.' },
        { status: 400 }
      );
    }

    // Always persist submission locally to avoid data loss
    saveSubmissionLocally(data);

    const isMillionProject = data.formType === 'million-project';
    const isMillionPartner = data.formType === 'million-project-partner';
    const isInvestorEnquiry = data.formType === 'investor-enquiry';

    let subject = `New Submission: ${data.name || data.email || 'Website Form'}`;
    if (isMillionProject) {
      subject = `Million Project Application: ${data.name || 'Applicant'} (${data.businessName || data.district || 'New Project'})`;
    } else if (isMillionPartner) {
      subject = `Million Project Partner: ${data.name || 'Investor'} (${data.investmentInterest || 'Partnership'})`;
    } else if (isInvestorEnquiry) {
      subject = `Investor Enquiry: ${data.country || 'Global'} - ${data.investorType || 'General'}`;
    } else if (data.name) {
      subject = `Investment Interest: ${data.name} (${data.country || 'General'})`;
    }

    const htmlContent = generateEmailHtml(data);
    const recipient = process.env.CONTACT_EMAIL || 'cm@pearlbay.com';
    const sender = process.env.RESEND_FROM || 'CM <info@cminvests.co>';

    let emailSent = false;
    let sendError: string | null = null;

    if (resend) {
      try {
        let response = await resend.emails.send({
          from: sender,
          to: recipient,
          replyTo: data.email ? String(data.email) : undefined,
          subject,
          html: htmlContent,
        });

        // If custom domain verification error, fallback to onboarding@resend.dev
        if (response.error && (response.error.message?.toLowerCase().includes('domain') || response.error.name === 'validation_error')) {
          console.warn('Sender domain verification pending. Retrying with onboarding@resend.dev fallback...');
          response = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: recipient,
            replyTo: data.email ? String(data.email) : undefined,
            subject,
            html: htmlContent,
          });
        }

        if (response.error) {
          console.warn('Resend error:', response.error);
          sendError = response.error.message;
        } else {
          emailSent = true;
        }
      } catch (err: any) {
        console.warn('Resend send exception:', err?.message || err);
        sendError = err?.message || 'Email delivery failed';
      }
    } else {
      sendError = 'RESEND_API_KEY is not configured';
      console.warn('RESEND_API_KEY is not set. Submission logged locally.');
    }

    return NextResponse.json({
      success: true,
      emailSent,
      sendWarning: sendError || undefined,
      message: 'Submission successfully received and processed.',
    });
  } catch (error: any) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: error?.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}


