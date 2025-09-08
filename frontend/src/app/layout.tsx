
import './globals.css';
import { AuthProvider } from './context/AuthContext';
import Sidebar from './components/Sidebar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[var(--color-bg-dark)] text-[var(--color-text-light)]">
        <AuthProvider>
          <Sidebar />
          <main className="min-h-screen backdrop-blur-lg">
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
