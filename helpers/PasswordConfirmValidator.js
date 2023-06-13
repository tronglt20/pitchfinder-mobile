export function PasswordConfirmValidator(password, passwordConfirm) {
  if (!passwordConfirm) return "PasswordConfirm can't be empty.";

  if (password !== passwordConfirm) return "Passwords do not match";

  return "";
}
