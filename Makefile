PREFIX ?= /usr/local
BINDIR ?= $(PREFIX)/bin
DESTDIR ?=

.PHONY: all help install uninstall test lint playbook play site-install site-dev site-build

all: help

help:
	@echo "Usage: make [target]"
	@echo ""
	@echo "Targets:"
	@echo "  install      Install mirror into \$$(BINDIR) (default: /usr/local/bin)"
	@echo "  uninstall    Remove mirror from \$$(BINDIR)"
	@echo "  test         Run basic CLI tests"
	@echo "  lint         Run syntax checks (and shellcheck if available)"
	@echo "  site-build   Build static Next.js documentation site"
	@echo "  site-dev     Run Next.js documentation site locally in development mode"
	@echo "  playbook     Run Ansible playbook mirror.yaml"
	@echo "  help         Show this help message"

install:
	install -d -m 0755 $(DESTDIR)$(BINDIR)
	install -v -m 0755 mirror $(DESTDIR)$(BINDIR)/mirror

uninstall:
	rm -f $(DESTDIR)$(BINDIR)/mirror

test:
	@echo "Running tests..."
	./mirror --version
	./mirror --help >/dev/null
	@echo "Tests passed!"

lint:
	@echo "Checking script syntax..."
	bash -n mirror
	sh -n bootstrap
	@if command -v shellcheck >/dev/null 2>&1; then \
		echo "Running shellcheck..."; \
		shellcheck mirror bootstrap; \
	else \
		echo "shellcheck not found in PATH, skipped."; \
	fi

playbook:
	ansible-playbook mirror.yaml

play: playbook

site-install:
	cd site && pnpm install

site-dev:
	cd site && pnpm run dev

site-build:
	cd site && pnpm run build
