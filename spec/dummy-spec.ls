require! {
  '../src/dummy'
  expect: \chai .expect
}
# expect = require \chai .use (require \sinon-chai) .expect

that = it

describe \dummy ->
  describe \dummy-method ->
    that 'returns true' -> expect dummy.dummy-method! .to.be.true
