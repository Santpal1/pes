import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER || "noreplypeerevaluationsystem@gmail.com",
    pass: process.env.EMAIL_PASS || "twmnfoksvgwfcegh",
  },
});

export const sendReminderEmail = async (
  to: string,
  subject: string,
  text: string
) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
  };
  await transporter.sendMail(mailOptions);
};
