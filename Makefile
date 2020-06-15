all: help

help:
	@echo ""
	@echo "-- Help Menu"
	@echo ""   1. make install       - install the scripts in /usr/local/bin/

install: usrlocalbin

usrlocalbin:
	install -v --mode=0755 mirror /usr/local/bin/mirror

playbook:
	ansible-playbook mirror.yaml

play: playbook

vanity:
	curl -i https://git.io -F "url=https://raw.githubusercontent.com/joshuacox/mirror/master/bootstrap" -F "code=mirrorinstall"
