import { NotificationType } from 'generated/prisma';

export const messageTemplates = {
  newMessage: {
    type: NotificationType.COMMENT,
    title: 'New Comment',
    description: 'You have been left a new comment',
  },
};
