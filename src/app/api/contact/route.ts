let client: any = null;

// Initialize Postmark client only if token is available (skip during build)
if (process.env.POSTMARK_API_TOKEN) {
  import('@/config/postmark').then((module) => {
    client = module.default;
  });
}

export async function POST(request: Request) {
  const body = await request.json();
  
  // Return error if Postmark is not configured
  if (!client) {
    return new Response('Postmark not configured', { status: 500 });
  }
  
  try {
    await client.sendEmail({
      From: process.env.EMAIL_FROM || '',
      To: 'm80684825@gmail.com',
      Subject: 'Porfolio Contact Form',
      HtmlBody: `
        <h1>Portfolio Contact Form</h1>
        <p><strong>Name:</strong> ${body.person_name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Company:</strong> ${body.company}</p>
        <p><strong>Message:</strong> ${body.message}</p>
      `,
      ReplyTo: body.email,
    });
    return new Response('ok', { status: 200 });
  } catch (e) {
    return new Response('error', { status: 500 });
  }
}
