import validatePhone from '../validatePhone';

test('validatePhone accepts valid +254 number and rejects invalid formats', () => {
  expect(validatePhone('+254712345678')).toBe(true);
  expect(validatePhone('+25471234567')).toBe(false); // too short
  expect(validatePhone('0712345678')).toBe(false);   // missing country code
  expect(validatePhone('+12345678901')).toBe(false); // wrong country code
  expect(validatePhone('')).toBe(false);
});
