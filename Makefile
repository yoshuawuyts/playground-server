include node_modules/make-lint/index.mk

LINT_CONFIG = .eslintrc

all: start

start:
	@node \
		--harmony \
		./api/index.js

.PHONY: test
