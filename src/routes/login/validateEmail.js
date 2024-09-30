//@ts-nocheck

export default function validateEmail(email) {
  const errors = [];
  // Check if the email matches the standard email format using a regular expression
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errors.push("Email address is invalid");
  }
  // Check if @ symbol is present
  if (email.indexOf("@") === -1) {
    errors.push("Email address must contain @ symbol");
  }
  // Check if there is a domain after the @ symbol
  const domain = email.split("@")[1];
  if (!domain) {
    errors.push("Email address must contain domain name");
  }
  // Check if the domain is valid
  const domainRegex = /^[^\s@]+\.[^\s@]+$/;
  if (!domainRegex.test(domain)) {
    errors.push("Domain name is invalid");
  }

  if (errors.length > 0) {
    return { status: "error", errors: errors };
  } else {
    return { status: "ok" };
  }
}
