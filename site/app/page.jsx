'use client';

import { useState } from 'react';

export default function HomePage() {
  const [copiedInstall, setCopiedInstall] = useState(false);
  const [builderUrl, setBuilderUrl] = useState('https://docs.example.com');
  const [outputDir, setOutputDir] = useState('./archives');
  const [waitTime, setWaitTime] = useState('1');
  const [spanHosts, setSpanHosts] = useState(true);
  const [domains, setDomains] = useState('example.com,cdn.example.com');
  const [noRobots, setNoRobots] = useState(false);
  const [debug, setDebug] = useState(false);
  const [copiedCmd, setCopiedCmd] = useState(false);

  const installCmd = 'curl -sL https://raw.githubusercontent.com/joshuacox/mirror/master/bootstrap | bash';

  const copyInstall = () => {
    navigator.clipboard.writeText(installCmd);
    setCopiedInstall(true);
    setTimeout(() => setCopiedInstall(false), 2000);
  };

  // Generate constructed CLI command
  let constructedCmd = 'mirror';
  if (outputDir.trim()) constructedCmd += ` -o ${outputDir.trim()}`;
  if (waitTime.trim() && waitTime !== '1') constructedCmd += ` -w ${waitTime.trim()}`;
  if (spanHosts && domains.trim()) {
    constructedCmd += ` -s -D ${domains.trim()}`;
  } else if (spanHosts) {
    constructedCmd += ` -s`;
  }
  if (noRobots) constructedCmd += ` --no-robots`;
  if (debug) constructedCmd += ` --debug`;
  constructedCmd += ` ${builderUrl.trim() || 'https://example.com'}`;

  const copyGenerated = () => {
    navigator.clipboard.writeText(constructedCmd);
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2000);
  };

  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero">
        <span className="badge-tag">v1.0.0 — Modernized & Ready</span>
        <h1>Reliable Website Mirroring, Simplified</h1>
        <p>
          A battle-tested wrapper around <code>wget</code> that eliminates broken assets, avoids bot blocks,
          converts relative links, and fixes the zero-wait randomizer bug out of the box.
        </p>

        {/* Quick Install */}
        <div className="install-bar">
          <span className="install-command">{installCmd}</span>
          <button onClick={copyInstall} className="copy-btn">
            {copiedInstall ? '✓ Copied' : 'Copy'}
          </button>
        </div>
      </section>

      {/* AdSense Unit (Top Responsive Banner) */}
      <div className="ad-container">
        <span className="ad-label">Advertisement</span>
        <ins
          className="adsbygoogle"
          style={{ display: 'block', width: '100%' }}
          data-ad-client="ca-pub-8973108060277483"
          data-ad-slot="1234567890"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>

      {/* Why mirror Section */}
      <section id="features" className="section">
        <h2 className="section-title">Why Use `mirror` Over Raw `wget`?</h2>
        <p className="section-desc">
          <code>wget</code> is powerful, but remembering over 10 flags and navigating obscure edge cases makes
          mirroring frustrating. Here is how <code>mirror</code> fixes raw wget issues:
        </p>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Challenge with Raw Wget</th>
                <th>Standard Wget Pitfall</th>
                <th>How `mirror` Solves It</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Random Wait Delay</strong></td>
                <td><code>--random-wait</code> has no effect because <code>--wait</code> defaults to 0.</td>
                <td>Defaults to <code>--wait=1</code> so requests safely fluctuate between 0.5s and 1.5s.</td>
              </tr>
              <tr>
                <td><strong>Anti-Bot 403 Errors</strong></td>
                <td>Default <code>Wget/1.x</code> headers are blocked by Cloudflare and modern web hosts.</td>
                <td>Includes a modern desktop browser User-Agent header by default.</td>
              </tr>
              <tr>
                <td><strong>CDN & Font Assets</strong></td>
                <td>Stylesheets and fonts on subdomains (e.g. <code>cdn.site.com</code>) are omitted.</td>
                <td>Easily span external domains with <code>-s</code> and <code>-D domain1,domain2</code>.</td>
              </tr>
              <tr>
                <td><strong>Local Browsing</strong></td>
                <td>Downloaded pages link to remote servers or lack <code>.html</code> file extensions.</td>
                <td>Applies <code>--convert-links</code> and <code>--adjust-extension</code> automatically.</td>
              </tr>
              <tr>
                <td><strong>Interrupted Crawls</strong></td>
                <td>Stopping a multi-gigabyte crawl requires re-downloading from scratch.</td>
                <td>Applies <code>--continue</code> and timestamping to resume where it left off.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid-3">
          <div className="card">
            <h3>⚡ Zero Configuration</h3>
            <p>Pass a single URL and get a fully browsable, offline-ready local mirror without memorizing flags.</p>
          </div>
          <div className="card">
            <h3>🛡️ Polite & Safe</h3>
            <p>Built-in rate limiting and randomized jitter protect target servers and your IP from bans.</p>
          </div>
          <div className="card">
            <h3>📦 Portable & Lightweight</h3>
            <p>Pure Bash script with zero runtime bloat. Works anywhere <code>wget</code> and standard POSIX tools run.</p>
          </div>
        </div>
      </section>

      {/* Interactive Command Builder */}
      <section id="builder" className="section">
        <div className="builder-box">
          <h2 className="builder-title">Interactive Command Builder</h2>
          <p className="builder-desc">Customize your crawl parameters and generate the exact shell command.</p>

          <div className="grid-2">
            <div className="form-group">
              <label>Target Website URL:</label>
              <input
                type="text"
                className="form-input"
                value={builderUrl}
                onChange={(e) => setBuilderUrl(e.target.value)}
                placeholder="https://example.com"
              />
            </div>
            <div className="form-group">
              <label>Output Directory (-o):</label>
              <input
                type="text"
                className="form-input"
                value={outputDir}
                onChange={(e) => setOutputDir(e.target.value)}
                placeholder="./archives"
              />
            </div>
          </div>

          <div className="grid-2">
            <div className="form-group">
              <label>Polite Delay in Seconds (-w):</label>
              <input
                type="number"
                min="0"
                step="0.5"
                className="form-input"
                value={waitTime}
                onChange={(e) => setWaitTime(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Allowed Domains (-D):</label>
              <input
                type="text"
                className="form-input"
                value={domains}
                onChange={(e) => setDomains(e.target.value)}
                placeholder="example.com,cdn.example.com"
              />
            </div>
          </div>

          <div className="checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={spanHosts}
                onChange={(e) => setSpanHosts(e.target.checked)}
              />
              Span across CDN/Asset Hosts (-s)
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={noRobots}
                onChange={(e) => setNoRobots(e.target.checked)}
              />
              Ignore robots.txt (--no-robots)
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={debug}
                onChange={(e) => setDebug(e.target.checked)}
              />
              Print command without executing (--debug)
            </label>
          </div>

          <div className="code-output">
            <code>{constructedCmd}</code>
            <button onClick={copyGenerated} className="copy-btn">
              {copiedCmd ? '✓ Copied' : 'Copy Command'}
            </button>
          </div>
        </div>
      </section>

      {/* CLI Reference Table */}
      <section id="options" className="section">
        <h2 className="section-title">CLI Flag Reference</h2>
        <p className="section-desc">Full specifications of supported options and behaviors.</p>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Flag</th>
                <th>Argument</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>-h, --help</code></td>
                <td>None</td>
                <td>-</td>
                <td>Show complete usage summary and exit.</td>
              </tr>
              <tr>
                <td><code>-v, --version</code></td>
                <td>None</td>
                <td>-</td>
                <td>Show current mirror version.</td>
              </tr>
              <tr>
                <td><code>-o, --output-dir</code></td>
                <td><code>DIR</code></td>
                <td>Current Dir</td>
                <td>Directory where files are saved (maps to <code>wget -P</code>).</td>
              </tr>
              <tr>
                <td><code>-w, --wait</code></td>
                <td><code>SECS</code></td>
                <td><code>1</code></td>
                <td>Base wait time between requests. Randomizer varies it by ±50%.</td>
              </tr>
              <tr>
                <td><code>-u, --user-agent</code></td>
                <td><code>STRING</code></td>
                <td>Chrome Desktop</td>
                <td>Custom User-Agent string sent with all HTTP headers.</td>
              </tr>
              <tr>
                <td><code>-s, --span-hosts</code></td>
                <td>None</td>
                <td>Off</td>
                <td>Allow downloading page prerequisites from external domains/CDNs.</td>
              </tr>
              <tr>
                <td><code>-D, --domains</code></td>
                <td><code>DOMAINS</code></td>
                <td>None</td>
                <td>Comma-delimited whitelist of domains to crawl when spanning hosts.</td>
              </tr>
              <tr>
                <td><code>--no-robots</code></td>
                <td>None</td>
                <td>Off</td>
                <td>Bypasses <code>robots.txt</code> restrictions via <code>-e robots=off</code>.</td>
              </tr>
              <tr>
                <td><code>--debug</code></td>
                <td>None</td>
                <td>Off</td>
                <td>Prints the exact <code>wget</code> invocation before execution.</td>
              </tr>
              <tr>
                <td><code>-- &lt;EXTRA&gt;</code></td>
                <td>Pass-through</td>
                <td>-</td>
                <td>Passes any additional native <code>wget</code> flags directly.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Recipes Section */}
      <section id="recipes" className="section">
        <h2 className="section-title">Common Recipes</h2>
        <p className="section-desc">Ready-to-use workflows for real-world scraping and archiving.</p>

        <div className="grid-2">
          <div className="card">
            <h3>📚 Offline Documentation Archive</h3>
            <p style={{ marginBottom: '1rem' }}>
              Archive an entire documentation portal into a dedicated folder with polite pacing:
            </p>
            <div className="code-output">
              <code>mirror -o ~/docs/redis -w 2 https://redis.io/docs/</code>
            </div>
          </div>

          <div className="card">
            <h3>🌐 Preserve Sites with Subdomain CDNs</h3>
            <p style={{ marginBottom: '1rem' }}>
              Ensure images, fonts, and scripts stored on asset subdomains are captured:
            </p>
            <div className="code-output">
              <code>mirror -s -D site.com,assets.site.com,cdn.site.com https://site.com</code>
            </div>
          </div>

          <div className="card">
            <h3>⏱️ Bandwidth-Limited Mirroring</h3>
            <p style={{ marginBottom: '1rem' }}>
              Cap download speeds so network traffic isn't saturated during large backups:
            </p>
            <div className="code-output">
              <code>mirror https://example.com -- --limit-rate=750k</code>
            </div>
          </div>

          <div className="card">
            <h3>🔍 Dry-Run Inspection</h3>
            <p style={{ marginBottom: '1rem' }}>
              Verify connectivity and link validity without saving files to disk:
            </p>
            <div className="code-output">
              <code>mirror https://example.com -- --spider</code>
            </div>
          </div>
        </div>
      </section>

      {/* AdSense Unit (Mid-Page Responsive Unit) */}
      <div className="ad-container">
        <span className="ad-label">Advertisement</span>
        <ins
          className="adsbygoogle"
          style={{ display: 'block', width: '100%' }}
          data-ad-client="ca-pub-8973108060277483"
          data-ad-slot="0987654321"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>

      {/* FAQ Section */}
      <section id="faq" className="section">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="grid-2">
          <div className="card">
            <h3>Does mirror work with Single Page Apps (React/Vue)?</h3>
            <p>
              <code>wget</code> retrieves server-rendered HTML, CSS, images, and raw JS bundles. For websites that
              rely entirely on client-side JavaScript execution to generate DOM nodes, a headless browser tool like
              Playwright or Puppeteer is recommended.
            </p>
          </div>
          <div className="card">
            <h3>Can I resume an interrupted mirror session?</h3>
            <p>
              Yes! <code>mirror</code> includes <code>--continue</code> and timestamping out of the box. Running the
              exact same command in the same directory will skip already-completed files and resume where it stopped.
            </p>
          </div>
          <div className="card">
            <h3>Can I install mirror without root / sudo privileges?</h3>
            <p>
              Yes. Run <code>make PREFIX="$HOME/.local" install</code> to install it directly into your user's local bin
              directory without requiring administrative access.
            </p>
          </div>
          <div className="card">
            <h3>How do I uninstall mirror?</h3>
            <p>
              Run <code>sudo make uninstall</code> (or <code>make PREFIX="$HOME/.local" uninstall</code> for user-local
              installations) to completely remove the executable.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
