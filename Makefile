BIN = ./node_modules/.bin
COMPILE = $(BIN)/lsc
WATCH = $(BIN)/wr
TEST = $(BIN)/jasmine-node

test-wr:
	@$(WATCH) --exec 'make -s test' src spec

build:
	@$(COMPILE) -bco lib src spec

build-w:
	@$(COMPILE) -wbco lib src spec

test: build
	@$(TEST) --noStack lib

test-w: build
	@$(TEST) --autotest --noStack lib

clean:
	@rm -rf lib/\*-spec.js
