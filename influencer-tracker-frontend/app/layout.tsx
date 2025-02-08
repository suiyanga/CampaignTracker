// app/layout.tsx
import Link from 'next/link';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Influencer Tracker</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-gray-50 text-gray-800">
        {/* Header */}
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-600">
              <Link href="/" legacyBehavior>
                <a>Influencer Tracker</a>
              </Link>
            </h1>
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <Link href="/" legacyBehavior>
                    <a className="hover:text-blue-600">Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/campaigns" legacyBehavior>
                    <a className="hover:text-blue-600">Campaigns</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 py-8">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-white border-t mt-8">
          <div className="max-w-7xl mx-auto px-4 py-4 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Influencer Tracker. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
