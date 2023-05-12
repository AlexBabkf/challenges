import { add, subtract, multiply, divide } from "./index.js";

test("add() should return 5, when called with 2,3", () => {
  const result = add(2, 3);
  expect(result).toBe(5);
});
test("add() should be a negative number if the bigger number is negative", () => {
  const result = add(2, -3);
  expect(result).toBeLessThan(0);
});
test("add() should be close to 0.3, when called with 0.1, 0.2", () => {
  const result = add(0.1, 0.2);
  expect(result).toBeCloseTo(0.3);
});

it("subtract() should return 10 if called with 15, 5", () => {
  const result = subtract(15, 5);
  expect(result).toBe(10);
});
it("subtract() should return a negative number if the 2nd argument is bigger than the first", () => {
  const result = subtract(5, 15);
  expect(result).toBeLessThan(0);
});

test("multiply() should return 8 if called with 2, 4", () => {
  const result = multiply(2, 4);
  expect(result).toBe(8);
});
test("multiply() should be a negative if only the first argument is negative", () => {
  const result = multiply(-2, 4);
  expect(result).toBeLessThan(0);
});
test("multiply() should be a negative if only the 2nd argument is negative", () => {
  const result = multiply(2, -4);
  expect(result).toBeLessThan(0);
});
test("multiply() should return a positive if both arguments are negative", () => {
  const result = multiply(-2, -4);
  expect(result).toBeGreaterThan(0);
});

it("divide() should return 3 if called with 9, 3", () => {
  const result = divide(9, 3);
  expect(result).toBe(3);
});
it("divide() should return 'You should not do this!' if the 2nd argument is 0", () => {
  const result = divide(9, 0);
  expect(result).toBe("You should not do this!");
});
