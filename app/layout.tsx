import './globals.css';
import { Space_Grotesk } from 'next/font/google';
import { Navbar } from '@/components/navbar';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-grotesk',
});

export const metadata = {
  title: 'Agenda de Contatos',
  description: 'Gerencie seus contatos',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${spaceGrotesk.variable} bg-bg text-text-primary`}>
        <Navbar />
        <div className="max-w-6xl mx-auto px-4 py-6">{children}</div>
      </body>
    </html>
  );
}
