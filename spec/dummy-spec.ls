require! {
  '../src/dummy'
  expect: \expect.js
}

that = it

describe \dummy ->
  describe \dummy-method ->
    that 'returns true' -> expect dummy.dummy-method! .to.be true
