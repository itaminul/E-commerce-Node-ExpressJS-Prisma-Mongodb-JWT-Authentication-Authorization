import { Request, Response } from "express";
import transporter from "../config/nodemailerConfig";

export class sendEmailController {
  async sendEmail(req: Request, res: Response) {
    const { to, subject, text } = req.body;
    const mailOptions = {
      from: "itaminul@gmail.com",
      to: "aminul@atilimited.net",
      subject: subject,
      text: text,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      res.status(500).json({ message: "Failed to send email", error });
    }
  }
}
