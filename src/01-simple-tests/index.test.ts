import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    expect(simpleCalculator({ a: 5, b: 5, action: Action.Add })).toEqual(10);
  });

  test('should subtract two numbers', () => {
    expect(simpleCalculator({ a: 5, b: 5, action: Action.Subtract })).toEqual(
      0,
    );
  });

  test('should multiply two numbers', () => {
    expect(simpleCalculator({ a: 5, b: 5, action: Action.Multiply })).toEqual(
      25,
    );
  });

  test('should divide two numbers', () => {
    expect(simpleCalculator({ a: 5, b: 5, action: Action.Divide })).toEqual(1);
  });

  test('should exponentiate two numbers', () => {
    expect(
      simpleCalculator({ a: 5, b: 3, action: Action.Exponentiate }),
    ).toEqual(125);
  });

  test('should return null for invalid action', () => {
    expect(simpleCalculator({ a: 5, b: 5, action: 'invalid' })).toEqual(null);
  });

  test('should return null for invalid arguments', () => {
    expect(
      simpleCalculator({ a: 'invalid', b: 5, action: Action.Add }),
    ).toEqual(null);
  });
});
