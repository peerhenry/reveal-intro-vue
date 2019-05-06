// parent component providing 'foo'
var Provider = {
  provide: {
    foo: 'bar',
  },
  // ...
}

// child component injecting 'foo'
var Child = {
  inject: ['foo'],
  created() {
    console.log(this.foo) // => "bar"
  },
  // ...
}
