all: start

start:
	@node \
		--harmony \
		./api/index.js

.PHONY: test
