export default class Stack {
  _stack = [];

  push(el) {
    this._stack.push(el);
  }

  pop(n = 1) {
    for (let i = 0; i < n; i++) {
      this._stack.pop();
    }
  }

  get top() {
    return this._stack[this._stack.length - 1];
  }
}
