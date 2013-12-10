# livescript-stub
[![Build Status](https://travis-ci.org/zaboco/livescript-stub.png?branch=master)](https://travis-ci.org/zaboco/livescript-stub)

Livescript project skeleton

Contains a standard configuration for a npm module using:
  - LiveScript compiling (+ prelude.ls installed)
  - Mocha + Chai.js + Sinon.js testing
  - Grunt build system, with some useful plugins
  - defaults for `package.json`, `.gitignore`, `.npmignore` and `.travis.yml`

Of course, not all of these are always needed, so they can be deleted / disabled.

## Install
```sh
$ git clone https://github.com/zaboco/livescript-stub.git
```
## Initialize a new project
> **WARNING** it will install all required npm modules globally and then link them inside the new project. This aproach is not very clean, and it will be changed sometime, I just found it useful in my case.

```sh
$ cd livescript-stub
$ ./init ../some-project

$ cd ../some-project
$ grunt --help
```

### Extra
Install all modules globally and exit
```sh
$ ./init global
```

Link all needed modules in this project.
_not very useful, except when needing to test that the configuration is working_
```
$ ./init link
$ grunt test # just to check that everything is ok
```
