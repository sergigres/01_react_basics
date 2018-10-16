class Car {
  constructor() {
    this.wheels = 4;
    this.type = 'Hatchback';
  }
}

class Ford extends Car {
  constructor() {
    super();
    this.color = 'red';
  }
}

class React {
  constructor() {
    this.props = {
    }
  }
}

class Page extends React {
  constructor() {
    super();
    this.windows = 4;
  }
}


const car = new Car();
const ford = new Ford();

console.log(ford);
