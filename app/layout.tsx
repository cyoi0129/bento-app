import type { Metadata } from 'next';
import Provider from './provider';

export const metadata: Metadata = {
  title: 'Bento App',
  description: 'Bento App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
