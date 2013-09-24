require! {
  '../src/dummy'
  'vows/lib/vows/reporters/spec'
  \vows
  \assert
}

vows.describe \suite
  .add-batch {
    \dummy-method :
      topic: dummy.dummy-method
      'returns true': -> assert.ok it
  }
  .export module, reporter: spec
