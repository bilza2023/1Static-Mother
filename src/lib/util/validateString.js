
//@ts-nocheck
export default function validateString(str, min, max) {
  let errors = [];

  if (str.length < min) {
    errors.push(`The string length must be at least ${min} characters.`);
  }

  if (str.length > max) {
    errors.push(`The string length must be at most ${max} characters.`);
  }

  if (errors.length > 0) {
    return {
      status: "error",
      errors: errors
    };
  }

  return {
    status: "ok"
  };
}
