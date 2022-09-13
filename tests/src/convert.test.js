import convert from '../../src/convert'

test('return 1.00', () => {
  expect(convert('um real')).toBe(1.00);
});

test('return 10.00', () => {
  expect(convert('dez reais')).toBe(10.00);
});
