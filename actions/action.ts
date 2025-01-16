"use server";

import nodemailer from "nodemailer";

export async function sendContact(data: {
  name: string;
  school: string;
  email: string;
  phone?: string;
  text: string;
}): Promise<{
  error: string | null;
  status: boolean;
}> {
  try {
    // Setup Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // or use your email service provider
      auth: {
        user: "eduardteller1@gmail.com", // your email address
        pass: "snzy cwwy qgug gzsp", // your email password or application-specific password
      },
    });

    // Construct the email options
    const mailOptions = {
      to: "info@koolitech.ee",
      subject: "NEW MESSAGE FROM CONTACT FORM",
      text: `
        Name: ${data.name || "No name"}
        School: ${data.school || "No school"}
        Email: ${data.email || "No email"}
        Phone: ${data.phone || "No phone number"}
        Message: ${data.text || "No message"}
        `,
    };

    return await new Promise((resolve) => {
      // Send the email
      transporter.sendMail(mailOptions, (error) => {
        if (error) {
          resolve({ error: error.message, status: false });
        }
        resolve({ error: null, status: true });
      });
    });
  } catch (error: unknown) {
    return { error: `${error}`, status: false };
  }
}
