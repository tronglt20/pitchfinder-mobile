export function EmailValidator(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) return "Email can't be empty.";
  if (!emailRegex.test(email)) return "Invalid email address";
  return "";
}
