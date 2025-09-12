import { NotificationType } from 'generated/prisma';

export const systemTemplates = {
  registered: {
    type: NotificationType.SYSTEM,
    title: 'Account Created',
    description: 'Welcome to our site!',
  },
  emailVerifed: {
    type: NotificationType.SYSTEM,
    title: 'Email Verified',
    description: 'Your email has been successfully linked to your account',
  },
  passwordChanged: {
    type: NotificationType.SYSTEM,
    title: 'Password Changed',
    description: 'Login to your account is available with a new password',
  },
  accountRecovered: {
    type: NotificationType.SYSTEM,
    title: 'Account Recovered',
    description: 'Your account has been successfully restored via email',
  },
  steamVerified: {
    type: NotificationType.SYSTEM,
    title: 'Steam Verified',
    description:
      'You have successfully linked Steam to your SteamRep account. You can now log in via Steam.',
  },
};
