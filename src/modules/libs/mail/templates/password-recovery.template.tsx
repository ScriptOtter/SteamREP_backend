import {
  Body,
  Head,
  Heading,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';
import { Html } from '@react-email/html';
import * as React from 'react';

interface PasswordRecoveryTemplateProps {
  domain: string;
  token: string;
}

export function PasswordRecoveryTemplate({
  domain,
  token,
}: PasswordRecoveryTemplateProps) {
  const PasswordRecoveryLink = `${domain}/account/recovery/${token}`;

  return (
    <Html>
      <Head />
      <Preview>🔑 SteamRep - Recovery Account</Preview>
      <Tailwind>
        <Body className="max-w-2xl mx-auto p-6 bg-slate-50"></Body>
        <Section className="text-center mb-8">
          <Heading className="text-center">Recovery Account</Heading>
          <Text>
            You are receiving this message because we received a request to
            reset the password for your account on SteamRep.
          </Text>
          <Text>
            To reset your password, please click on the following link:
          </Text>
          <Link
            href={PasswordRecoveryLink}
            className="inline-flex justify-center items-center rounded-full text-sm font-medium text-white bg-blue-500 px-5 py-2"
          >
            Password Reset Link
          </Link>
        </Section>
        <Section className="text-center mt-8">
          <Text className="text-gray-600">
            If you did not request a password reset, please ignore this message.
            Your password will remain secure.
          </Text>
          <Text>
            If you have any questions or need assistance, feel free to reach out
            to our support team.
          </Text>
          <Link href="https://t.me/steamrep" className="text-black underline">
            https://t.me/steamrep
          </Link>
        </Section>
      </Tailwind>
    </Html>
  );
}
