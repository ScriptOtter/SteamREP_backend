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

interface VerificationTemplateProps {
  domain: string;
  token: string;
}

export function VerificationTemplate({
  domain,
  token,
}: VerificationTemplateProps) {
  const VerificationLink = `${domain}/account/verify?token=${token}`;

  return (
    <Html>
      <Head />
      <Preview>🚀 SteamRep - Account Verification</Preview>
      <Tailwind>
        <Body className="max-w-2xl mx-auto p-6 bg-slate-50"></Body>
        <Section className="text-center mb-8">
          <Heading className="text-center">Verification email</Heading>
          <Text>
            Thank you for registering with SteamRep.help! To confirm your email
            address, please follow this link:
          </Text>
          <Link
            href={VerificationLink}
            className="inline-flex justify-center items-center rounded-full text-sm font-medium text-white bg-blue-500 px-5 py-2"
          >
            Verify email
          </Link>
        </Section>
        <Section className="text-center mt-8">
          <Text className="text-gray-600">
            If you have any questions or encounter any difficulties, please
            contact our support team at:
          </Text>
          <Link href="https://t.me/steamrep" className="text-black underline">
            https://t.me/steamrep
          </Link>
        </Section>
      </Tailwind>
    </Html>
  );
}
