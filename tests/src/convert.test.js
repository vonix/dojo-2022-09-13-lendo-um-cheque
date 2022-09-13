import convert from '../../src/convert'

test('return 1.00', () => {
  expect(convert('um real')).toBe(1.00);
});

test('return 10.00', () => {
  expect(convert('dez reais')).toBe(10.00);
});

test('must return 22.00', () => {
  expect(convert('vinte e dois reais')).toBe(22.00);
});

test('must return 22.50', () => {
  expect(convert('vinte e dois reais e cinquenta centavos')).toBe(22.50);
});

test('must return 22.50', () => {
  expect(convert('vinte e dois reais e cinquenta centavos')).toBe(22.50);
});

test('return 1.50', () => {
  expect(convert('um real e cinquenta centavos')).toBe(1.50);
});

test('identify case sentive units', () => {
  expect(convert('um REAL e cinquenta CENTAVOS')).toBe(1.50);
});

test('identify case sentive values', () => {
  expect(convert('UM REAL E CINQUENTA CENTAVOS')).toBe(1.50);
});

test('retrun 134.00', () => {
  expect(convert('cento e trinta e quatro reais')).toBe(134);
});

test('retrun 2000.00', () => {
  expect(convert('dois mil reais')).toBe(2000);
});

test('retrun 2523.18', () => {
  expect(convert('dois mil quinhentos e vinte e três reais e dezoito centavos')).toBe(2523.18);
});
