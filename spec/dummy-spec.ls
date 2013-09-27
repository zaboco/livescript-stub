require! {
  '../src/dummy'
  ex: \expect.js
}

that = it

describe \dummy ->
  describe \dummy-method ->
    that 'returns true' -> ex(dummy.dummy-method!).to.be true
