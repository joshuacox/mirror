# mirror

Mirror a website with `wget` using robust, sensible defaults.

This script wraps `wget` with pre-configured options for recursive mirroring, relative link conversion, asset resolution, polite crawling, and modern User-Agent headers to prevent common 403 blocks.

## Prerequisites

- [GNU Wget](https://www.gnu.org/software/wget/) (`wget`)
- `git` and `make` (for installation from source)

## Usage

```bash
mirror [OPTIONS] <URL>... [-- <EXTRA_WGET_FLAGS>...]
```

### Options

| Option | Description |
| :--- | :--- |
| `-h`, `--help` | Display help and usage |
| `-v`, `--version` | Display version information |
| `-o`, `--output-dir DIR` | Target directory where downloaded files will be saved (`wget -P`) |
| `-w`, `--wait SECS` | Delay between consecutive requests in seconds (default: `1`) |
| `-u`, `--user-agent STR` | Custom User-Agent header (defaults to modern Chrome desktop UA) |
| `-s`, `--span-hosts` | Download required assets from external hosts/CDNs |
| `-D`, `--domains DOMAINS` | Comma-separated list of domains to span (implies `-s`) |
| `--no-robots` | Ignore `robots.txt` directives (use responsibly) |
| `--debug` | Print the assembled `wget` command without executing |

### Examples

**Mirror a website into the current directory:**
```bash
mirror https://example.com
```

**Save into a specific directory with polite 2-second rate limiting:**
```bash
mirror -o ./archives/example -w 2 https://example.com
```

**Span CDN and asset domains:**
```bash
mirror -s -D example.com,cdn.example.com,assets.example.com https://example.com
```

**Pass extra `wget` flags directly:**
```bash
mirror https://example.com -- --limit-rate=500k
```

---

## Installation

### Quick Install (One-Liner)

```bash
curl -sL https://raw.githubusercontent.com/joshuacox/mirror/master/bootstrap | bash
```

### From Source (Makefile)

System-wide install (default to `/usr/local/bin`):
```bash
git clone https://github.com/joshuacox/mirror.git
cd mirror
sudo make install
```

User-local install (rootless, installs to `~/.local/bin`):
```bash
make PREFIX="$HOME/.local" install
```

### Using Ansible

```bash
make playbook
# or: ansible-playbook mirror.yaml
```

---

## Uninstallation

```bash
sudo make uninstall
# or for rootless install:
make PREFIX="$HOME/.local" uninstall
```

---

## Development & Testing

```bash
make test    # Run CLI tests
make lint    # Run syntax check and shellcheck
```

## License

This project is licensed under the GPL-3.0 License. See the [LICENSE](LICENSE) file for details.
