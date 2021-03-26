abstract class A {
  _enabled = true;
  get enabled() {
    return this._enabled;
  }
  set enabled(value: boolean) {
    this._enabled = value;
  }
}

class B extends A {
  set enabled(value: boolean) {
    this._enabled = value;
  }
}

const o = new B();
console.log(o.enabled);
