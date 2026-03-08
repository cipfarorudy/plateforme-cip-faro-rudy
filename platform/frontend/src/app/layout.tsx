import type { Metadata } from 'next';
import './globals.css';
import Sidebar from '@/components/layout/Sidebar';

export const metadata: Metadata = {
  title: 'C.I.P FARO Rudy – Plateforme de pilotage',
  description: 'Plateforme de gestion du centre de formation C.I.P FARO Rudy',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="font-sans">
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 ml-64 p-6 bg-gray-50">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
