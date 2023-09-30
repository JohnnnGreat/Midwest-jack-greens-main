// Message Controller

import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export default async function (req, res) {
  console.log(req.body);
  try {
    if (req.method === "POST") {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.USER_EMAIL,
          pass: process.env.USER_PASSWORD,
        },
      });
      const mailData = {
        from: `Veronicas Kitchen New Message <${req.body.email}>`,
        to: "JOHN OSSAI <johnossai20@gmail.com>",
        subject: `Message From ${req.body.name}`,

        html: ` <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Form Email</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        h1 {
            color: #333;
        }
        p {
            font-size: 16px;
            line-height: 1.5;
            color: #666;
        }
        .contact-info {
            margin-top: 20px;
        }
        .contact-info strong {
            color: #333;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Contact Form Submission</h1>
        <p>You have received a new message from the website contact form:</p>
        <div class="contact-info">
            <strong>Name:</strong> ${req.body.name}<br>
            <strong>Email:</strong>${req.body.email}<br>
        </div>
        <p><strong>Message: </strong>${req.body.messagev}</p>
       <div><image src="../../../public/logo.png"/></div>
    </div>
</body>
</html>`,
      };

      await transporter.sendMail(mailData);

      res
        .status(200)
        .json({ success: true, message: "Message Sent Successfully" });
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, error: "Error sending email", message: error });
  }
  return res.status(400).json({ message: "Bad Request" });
}
