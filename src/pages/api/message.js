// Message Controller
import nodemailer from "nodemailer";

export default async function message(req, res) {
  console.log(req.body);
  try {
    if (req.method === "POST") {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.USER_EMAIL,
          pass: process.env.USER_PASSWORD,
          // user: "johnossai20@gmail.com",
          // pass: "kblgyogjwalbiwja",
        },
      });
      // <capriciowilson@gmail.com>
      const mailData = {
        from: `Midwest New Message <${req.body.email}>`,
        to: "MIDWEST JERK <capriciowilson@gmail.com>",
        subject: `Message From ${req.body.name}`,

        html: ` <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Contact Form Submission</title>
            <style>
                body {
                    font-family: 'Arial', sans-serif;
                    background-color: #f4f4f4;
                    margin: 0;
                    padding: 0;
                }
        
                .container {
                    max-width: 600px;
                    margin: 50px auto;
                    background-color: #fff;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
        
                h2 {
                    color: #000;
                    border-bottom: 2px solid #3498db;
                    padding-bottom: 10px;
                    font-size:2rem;
                }
        
                p {
                    color: #666;
                    line-height: 1;
                    font-size:1rem;
                }
        
                .user-info {
                    margin-bottom: 20px;
                }
        
                .info-label {
                    font-weight: bold;
                    color: #333;
                    font-size:1.5rem;
                }
        
                .info-value {
                    color: #3498db;
                    font-size:1.21rem;
                }
        
                .message {
                    margin-top: 20px;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h2>Contact Form Submission</h2>
                <p>Below are the details of a new contact form submission:</p>
        
                <div class="user-info">
                    <p class="info-label">Name:</p>
                    <p class="info-value">${req.body.name}</p>
        
                    <p class="info-label">Email:</p>
                    <p class="info-value">${req.body.email}</p>
                </div>
        
                <p class="info-label">Message:</p>
                <p class="message">${req.body.messagev}</p>
            </div>
        </body>
        </html>`,
      };

      await transporter.sendMail(mailData);

      res.status(200).json({ success: true });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Error sending email" });
  }
  return res.status(400).json({ message: "Bad Request" });
}
