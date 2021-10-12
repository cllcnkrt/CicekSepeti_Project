export default function validateInfo(form) {
  const errors = {};

  if (!form.email) {
    errors.email = true;
  } else if (!/\S+@\S+\.\S+/.test(form.email)) {
    errors.email = true;
  }
  if (!form.password) {
    errors.password = true;
  } else if (form.password.length < 8) {
    errors.password = true;
  } else if (form.password.length > 20) {
    errors.password = true;
  }
  return errors;
}
