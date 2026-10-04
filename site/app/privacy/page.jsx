export const metadata = {
  title: 'Privacy Policy — mirror',
  description: 'Privacy Policy and Cookie Disclosure for the mirror documentation website.',
};

export default function PrivacyPage() {
  return (
    <div className="container" style={{ padding: '4rem 1.5rem', maxWidth: '800px' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Privacy Policy</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
        Last updated: October 2026
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', color: 'var(--text-secondary)' }}>
        <section>
          <h2 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem', fontSize: '1.4rem' }}>
            1. Overview
          </h2>
          <p>
            This website provides documentation, instructions, and tools for the open-source CLI utility <code>mirror</code>.
            We respect your privacy and are committed to maintaining transparent practices regarding information collection.
          </p>
        </section>

        <section>
          <h2 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem', fontSize: '1.4rem' }}>
            2. Google AdSense & Cookies
          </h2>
          <p style={{ marginBottom: '0.75rem' }}>
            This website uses Google AdSense to display advertisements. Google, as a third-party vendor, uses cookies to
            serve ads on this site.
          </p>
          <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li>
              Google's use of advertising cookies enables it and its partners to serve ads to users based on their visits
              to this site and/or other sites on the Internet.
            </li>
            <li>
              Users may opt out of personalized advertising by visiting{' '}
              <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
                Google Ads Settings
              </a>.
            </li>
            <li>
              Alternatively, you can opt out of a third-party vendor's use of cookies for personalized advertising by visiting{' '}
              <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">
                www.aboutads.info
              </a>.
            </li>
          </ul>
        </section>

        <section>
          <h2 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem', fontSize: '1.4rem' }}>
            3. Log Files
          </h2>
          <p>
            Like most websites, our hosting provider (e.g. GitHub Pages) automatically collects standard server logs, which
            may include internet protocol (IP) addresses, browser type, internet service provider (ISP), referring/exit pages,
            platform type, date/time stamp, and number of clicks. These logs are used solely to analyze trends, administer the site,
            and monitor site performance.
          </p>
        </section>

        <section>
          <h2 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem', fontSize: '1.4rem' }}>
            4. External Links
          </h2>
          <p>
            This site contains links to other websites, including GitHub and documentation repositories. Please be aware
            that we are not responsible for the privacy practices of such other sites.
          </p>
        </section>

        <section>
          <h2 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem', fontSize: '1.4rem' }}>
            5. Changes to This Policy
          </h2>
          <p>
            We may update our Privacy Policy from time to time. Any changes will be posted on this page with an updated
            revision date.
          </p>
        </section>

        <div style={{ marginTop: '2rem' }}>
          <a href="/" style={{ color: 'var(--accent-cyan)', fontWeight: '600' }}>← Back to Documentation</a>
        </div>
      </div>
    </div>
  );
}
