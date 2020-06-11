export const passwordValidate=(value:string) => {
    let errors = ''
  
    const passwordRegex = /(?=.*[0-9])/;
    if (value=='') {
      errors = "Required";
    } else if (value.length < 8) {
      errors = "Password must be 8 characters long.";
    } else if (!passwordRegex.test(value)) {
      errors = "Invalid password. Must contain one number.";
    }
    return errors;
  }