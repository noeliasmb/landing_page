import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';
import express from 'express';

const app = express();
const PORT = 3000;

// Parse incoming JSON requests
app.use(express.json());

// Load environment variables from .env.local during local development
if (process.env.NODE_ENV !== 'production') {
  dotenv.config({ path: '.env.local' });
}

// Set the SendGrid API key from the environment variable
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post('/send-email', async (req, res) => {
  console.log('✅ Received a POST request to /send-email');
  const { name, email, phone, message } = req.body;

  const msg = {
    to: 'noeliasanchezpsicologa@gmail.com',
    from: process.env.SENDGRID_VERIFIED_EMAIL, // Verified email from SendGrid
    subject: 'Nuevo mensaje de contacto',
    text: `
    Nombre: ${name}
    Email: ${email}
    Teléfono: ${phone}
    Mensaje: ${message}
    `,
  };

  try {
    await sgMail.send(msg);
    console.log('✅ Email sent successfully');
    res.status(200).json({ message: 'Email enviado correctamente.' });
  } catch (error) {
    console.error('❌ Error al enviar el email:', error.response ? error.response.body : error);
    res.status(500).json({ error: 'Error al enviar el email.' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
