

import './globals.css';
import { AuthProvider } from './context/AuthContext';
import Sidebar from './components/Sidebar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Sidebar />
          <main className="p-20 min-h-screen bg-[#f3e6d1] backdrop-blur-lg">
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}