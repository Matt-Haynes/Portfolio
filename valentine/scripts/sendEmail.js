const nodemailer = require('nodemailer');

const host = process.env.SMTP_HOST;
const port = parseInt(process.env.SMTP_PORT || '465', 10);
const user = process.env.SMTP_USER;
const pass = process.env.SMTP_PASS;
const from = process.env.FROM_EMAIL;
const to = process.env.TO_EMAIL;
const link = process.env.VALENTINE_LINK || 'https://thematthaynes.co.uk/valentine/';

if (!host || !port || !user || !pass || !from || !to) {
  console.error('Missing SMTP configuration. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, FROM_EMAIL and TO_EMAIL as secrets.');
  process.exit(1);
}

async function send() {
  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // true for 465, false for other ports
    auth: { user, pass }
  });

  const html = `
    <p>Happy Valentine's Day! 💘</p>
    <p>Open this special page: <a href="${link}">${link}</a></p>
  `;

  const info = await transporter.sendMail({
    from,
    to,
    subject: "Happy Valentine's Day",
    html
  });

  console.log('Message sent:', info.messageId);
}

send().catch(err => { console.error(err); process.exit(1); });
