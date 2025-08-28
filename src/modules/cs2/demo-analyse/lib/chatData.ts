import { parseEvent } from '@laihoe/demoparser2';

export const chatData = (pathToDemo: string) => {
  let chat = parseEvent(pathToDemo, 'chat_message');
};
