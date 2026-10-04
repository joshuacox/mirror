import './globals.css';

export const metadata = {
  title: 'mirror — Modern Website Mirroring with wget',
  description: 'A robust, sensible wrapper for wget to mirror websites cleanly without broken links, CDN omissions, or crawler blocks.',
  keywords: ['wget', 'website mirror', 'offline scraper', 'site backup', 'bash tool', 'web archiving'],
  authors: [{ name: 'Joshua Cox' }],
  other: {
    'google-adsense-account': 'ca-pub-8973108060277483',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense Script */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8973108060277483"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <header className="header">
          <div className="container nav">
            <a href="/" className="logo">
              mirror <span className="logo-badge">CLI</span>
            </a>
            <ul className="nav-links">
              <li><a href="/#features" className="nav-link">Features</a></li>
              <li><a href="/#builder" className="nav-link">Command Builder</a></li>
              <li><a href="/#options" className="nav-link">CLI Reference</a></li>
              <li><a href="/#recipes" className="nav-link">Recipes</a></li>
              <li><a href="/#faq" className="nav-link">FAQ</a></li>
              <li><a href="/privacy" className="nav-link">Privacy</a></li>
            </ul>
            <a
              href="https://github.com/joshuacox/mirror"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-github"
            >
              GitHub ↗
            </a>
          </div>
        </header>

        <main>{children}</main>

        <footer className="footer">
          <div className="container footer-content">
            <div className="footer-text">
              © {new Date().getFullYear()} mirror — Open-source CLI tool under GPL-3.0.
            </div>
            <ul className="footer-links">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/#options" className="footer-link">Documentation</a></li>
              <li><a href="/privacy" className="footer-link">Privacy Policy</a></li>
              <li><a href="https://github.com/joshuacox/mirror" className="footer-link" target="_blank" rel="noopener noreferrer">Source Code</a></li>
            </ul>
          </div>
        </footer>
      </body>
    </html>
  );
}
