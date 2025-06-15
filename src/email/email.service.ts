import { Request, Response } from 'express';
import { Resend } from 'resend';

const verificationTemplate = (user: string, code: string) => {
  return (
    '<div><h1>Hi, ' +
    user +
    '!' +
    '</h1></div>' +
    '<div><h3>Continue signing up for SteamRep by entering the code below:</h3><h2>' +
    code +
    '</h2></div><div>Not able to enter the code? Paste the following link into your browser:</div>' +
    '<a href=' +
    process.env.SERVER_URL +
    'auth/emailVerify/' +
    code +
    '>' +
    process.env.SERVER_URL +
    'auth/emailVerify/' +
    code +
    '</a>'
  );
};

const resend = new Resend(process.env.RESEND_API);

export const verificationAccount = async (
  user: string,
  code: string,
  toEmail: string,
  req: Request,
  res: Response,
) => {
  const { data, error } = await resend.emails.send({
    from: 'SteamRep - <onboarding@resend.dev>',
    to: toEmail,
    subject: '🚀 SteamRep - Account Verification',
    html: verificationTemplate(user, code),
  });

  if (error) {
    return res.status(400).json({ error });
  }
};
