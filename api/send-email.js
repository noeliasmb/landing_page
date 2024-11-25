// api/send-email.js

const nodemailer = require('nodemailer');

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, phone, message } = req.body;

        // Create a transporter using Gmail SMTP
        let transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL_USER, // Your Gmail address
                pass: process.env.EMAIL_PASS, // Your Gmail password or App Password
            },
        });

        const mailOptions = {
            from: email,
            to: 'noeliasanchezpsicologa@gmail.com',
            subject: 'Nuevo mensaje de contacto',
            text: `
        Nombre: ${name}
        Email: ${email}
        Teléfono: ${phone}
        Mensaje: ${message}
      `,
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Email enviado correctamente.' });
        } catch (error) {
            console.error('Error al enviar el email:', error);
            res.status(500).json({ error: 'Error al enviar el email.' });
        }
    } else {
        res.status(405).json({ error: 'Método no permitido.' });
    }
}
