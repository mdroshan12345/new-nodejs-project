 greet() {
    console.log(this.greeting);
  }
}

// define factory function(s)

function createHelloWorld(options) {
  return new HelloWorld(options);
}

// export the factory functions

module.exports = {
  createHelloWorld
}



class HelloWorld {
  constructor(options) {
      this.= options || {};
      this._greeting = this.options.greeting || 'Hello World!';
  }

  get greeting() {
    return this._;
  }

  set greeting( message ) {
    this._greeting = message || '';
  }
