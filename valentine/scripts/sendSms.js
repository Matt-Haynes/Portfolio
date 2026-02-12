const twilio = require('twilio');

// Required environment variables (set these as repo Secrets in GitHub Settings)
const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_TOKEN;
const from = process.env.TWILIO_FROM;
const to = process.env.TO_PHONE;
const link = process.env.VALENTINE_LINK || 'https://thematthaynes.co.uk/valentine/';

if (!accountSid || !authToken || !from || !to) {
  console.error('Missing required environment variables. Please set TWILIO_SID, TWILIO_TOKEN, TWILIO_FROM, and TO_PHONE.');
  process.exit(1);
}

const client = twilio(accountSid, authToken);

(async () => {
  try {
    const body = `Happy Valentine's Day! 💘 Open this: ${link}`;
    const msg = await client.messages.create({ body, from, to });
    console.log('Message sent. SID:', msg.sid);
  } catch (err) {
    console.error('Failed to send SMS:', err);
    process.exit(1);
  }
})();
