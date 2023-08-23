import type { Metadata } from 'next';
import { Hanken_Grotesk } from 'next/font/google';
import StyledComponentRegistry from '@/lib/registery';

const hankenGrotesk = Hanken_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Aleph Demo (Viral)',
  description: 'Create by Viral (Creole Studios)',
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  console.log(params, 'params');
  return (
    <html lang='en'>
      <body className={hankenGrotesk.className}>
        <StyledComponentRegistry>{children}</StyledComponentRegistry>
      </body>
    </html>
  );
}
