import { isMath } from './../src/js/example.js';

let math = new isMath();

describe("Addition", function() {
  it("should test whether two numbers added together", function() {
    const result = math.add(2, 2);
    expect(result).toEqual(4);

  });
});
describe("Subtraction", function() {
  it("should test whether two numbers subtract", function() {
    const result = math.subtract(4, 2);
    expect(result).toEqual(2);
  });
});
describe("Multiplication", function() {
  it("should test whether two numbers multiply", function() {
    const result = math.multiply(6, 6);
    expect(result).toEqual(36);
  });
});

describe("Division", function() {
  it("should test whether two numbers divide", function() {
    const result = math.divide(12, 2);
    expect(result).toEqual(6);
  });
});
