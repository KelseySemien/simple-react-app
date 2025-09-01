// Very small helper: ensures phone starts with +254 and then 9 digits (e.g. +254712345678)
export default function validatePhone(phone) {
  if (!phone) return false;
  const regex = /^\+254\d{9}$/;
  return regex.test(phone);
}
