const emptyMessage = "Field cannot be empty";

export const isValidEmailFormat = email => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const isValidEmail = email => {
  if (email === "") {
    return { valid: false, message: "Email cannot be empty" };
  }
  if (!isValidEmailFormat(email))
    return { valid: false, message: "Please enter the valid email" };
  return { valid: true };
};

export const isValidConfirmPassword = (password, confirmPassword) => {
  if (confirmPassword === "") return "Confirm password cannot be empty";
  if (password !== confirmPassword)
    return "Password and Confirm password do not match!";
  return true;
};

export const isValidPassword = password => {
  if (password === "") return "Password cannot be empty";
  if (password.length < 6)
    return "Password cannot be shorter than 6 characters!";
  return true;
};

export const checkEmpty = field => {
  if (field === "") return "{{Field}} cannot be empty";
  return true;
};
