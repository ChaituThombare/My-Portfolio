import nodemailer from 'nodemailer';

// Configure email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'chaitannyathombare@gmail.com',
    pass: process.env.GMAIL_APP_PASSWORD // We'll need to get this securely
  }
});

export async function sendContactEmail(name: string, email: string, message: string) {
  const mailOptions = {
    from: email,
    to: 'chaitannyathombare@gmail.com',
    subject: `Portfolio Contact Form: Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <h4>Message:</h4>
      <p>${message}</p>
    `
  };

  return transporter.sendMail(mailOptions);
}
