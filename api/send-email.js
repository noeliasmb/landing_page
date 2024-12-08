import sgMail from '@sendgrid/mail';

// Set API Key from environment variable
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
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
      res.status(200).json({ message: 'Email enviado correctamente.' });
    } catch (error) {
      console.error('Error al enviar el email:', error.response ? error.response.body : error);
      res.status(500).json({ error: 'Error al enviar el email.' });
    }
  } else {
    res.status(405).json({ error: 'Método no permitido.' });
  }
}
