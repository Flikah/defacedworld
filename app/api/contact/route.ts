import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, url, pkg, message } = body

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 })
    }

    const packageLabels: Record<string, string> = {
      audit: 'Audit Report — $497',
      fix: 'Audit + Fix — $1,497',
      retainer: 'Growth Retainer — $997/mo',
      enterprise: 'Enterprise / Custom',
      other: 'Not sure yet',
    }

    const emailBody = `
New enquiry from defacedworld.com

Name:     ${name}
Email:    ${email}
Website:  ${url || 'Not provided'}
Package:  ${packageLabels[pkg] || pkg}

Message:
${message || 'No message provided'}

---
Sent from defacedworld.com contact form
    `.trim()

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'defacedworld <noreply@defacedworld.com>',
        to: [process.env.CONTACT_EMAIL || 'spencer@flikah.com'],
        reply_to: email,
        subject: `New enquiry from ${name} — ${packageLabels[pkg] || 'defacedworld'}`,
        text: emailBody,
        html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'Courier New', monospace; background: #0a0a0a; color: #f5f2ee; margin: 0; padding: 0; }
    .wrap { max-width: 580px; margin: 0 auto; padding: 2rem; }
    .header { border-bottom: 1px solid #222; padding-bottom: 1.5rem; margin-bottom: 1.5rem; }
    .logo { font-size: 22px; color: #f5f2ee; }
    .logo span { color: #e63329; }
    .tag { font-size: 11px; color: #555; letter-spacing: 0.1em; text-transform: uppercase; margin-top: 4px; }
    .field { margin-bottom: 1rem; }
    .field-label { font-size: 11px; color: #555; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 4px; }
    .field-value { font-size: 15px; color: #f5f2ee; }
    .pkg-badge { display: inline-block; background: #1a0808; color: #e63329; font-size: 12px; padding: 4px 12px; border-radius: 20px; border: 1px solid #7a1a15; }
    .message-box { background: #111; border: 1px solid #222; border-radius: 6px; padding: 1rem; margin-top: 1.5rem; }
    .message-label { font-size: 11px; color: #555; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 8px; }
    .message-text { font-size: 14px; color: #ccc; line-height: 1.6; }
    .footer { border-top: 1px solid #222; margin-top: 2rem; padding-top: 1rem; font-size: 12px; color: #555; }
    a { color: #e63329; }
  </style>
</head>
<body>
  <div class="wrap">
    <div class="header">
      <div class="logo">defaced<span>world</span></div>
      <div class="tag">New website enquiry</div>
    </div>

    <div class="field">
      <div class="field-label">Name</div>
      <div class="field-value">${name}</div>
    </div>

    <div class="field">
      <div class="field-label">Email</div>
      <div class="field-value"><a href="mailto:${email}">${email}</a></div>
    </div>

    ${url ? `
    <div class="field">
      <div class="field-label">Website</div>
      <div class="field-value"><a href="https://${url}">${url}</a></div>
    </div>
    ` : ''}

    <div class="field">
      <div class="field-label">Interested in</div>
      <div class="field-value">
        <span class="pkg-badge">${packageLabels[pkg] || pkg}</span>
      </div>
    </div>

    ${message ? `
    <div class="message-box">
      <div class="message-label">Message</div>
      <div class="message-text">${message.replace(/\n/g, '<br>')}</div>
    </div>
    ` : ''}

    <div class="footer">
      Sent from defacedworld.com · Reply directly to this email to respond to ${name}
    </div>
  </div>
</body>
</html>
        `,
      }),
    })

    if (!res.ok) {
      const err = await res.json()
      console.error('Resend error:', err)
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }

    // Also send a confirmation to the person who submitted
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Spencer at defacedworld <spencer@flikah.com>',
        to: [email],
        subject: `Got your message, ${name.split(' ')[0]}`,
        html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'Courier New', monospace; background: #0a0a0a; color: #f5f2ee; margin: 0; padding: 0; }
    .wrap { max-width: 560px; margin: 0 auto; padding: 2rem; }
    .logo { font-size: 22px; margin-bottom: 2rem; }
    .logo span { color: #e63329; }
    p { font-size: 15px; color: #ccc; line-height: 1.8; margin-bottom: 1rem; font-family: 'Georgia', serif; }
    .sig { margin-top: 2rem; font-size: 14px; color: #888; }
    .footer { border-top: 1px solid #222; margin-top: 2rem; padding-top: 1rem; font-size: 12px; color: #555; }
    a { color: #e63329; }
  </style>
</head>
<body>
  <div class="wrap">
    <div class="logo">defaced<span>world</span></div>

    <p>Hey ${name.split(' ')[0]},</p>

    <p>Got your message — I'll be back to you within 24 hours, usually faster.</p>

    ${url ? `<p>I'll take a first look at <a href="https://${url}">${url}</a> before we speak so we can hit the ground running.</p>` : ''}

    <p>In the meantime, if you haven't already, it's worth running the <a href="https://defacedworld.com">free audit tool</a> on your homepage — it gives you an instant preview of where the biggest gaps are.</p>

    <div class="sig">
      — Spencer<br>
      defacedworld.com<br>
      <a href="mailto:spencer@flikah.com">spencer@flikah.com</a>
    </div>

    <div class="footer">
      You're receiving this because you submitted a contact form at defacedworld.com
    </div>
  </div>
</body>
</html>
        `,
      }),
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact route error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
