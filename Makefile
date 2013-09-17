
test-wr:
	@wr --exec 'make -s test' src spec

build:
	@lsc -bco lib src spec

build-w:
	@lsc -wbco lib src spec

test: build
	@jasmine-node --noStack lib

test-w: build
	@jasmine-node --autotest --noStack lib

clean:
	@rm -rf lib/\*-spec.js

install:
	@./install.sh
