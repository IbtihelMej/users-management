

export const isValidEmail = (value) => {
    return value && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,8}$/i.test(value);
  };
  

  export const isValidPassWord = (value) => {
    if (value != null) {
      let validPassword =
        value.match(/[0-9]/g) &&
        value.match(/[A-Z]/g) &&
        value.match(/[a-z]/g) &&
        // value.match(/[^a-zA-Z\d]/g) && // caractère spéciale
        value.length >= 8;
      return validPassword;
    } else {
      return false;
    }
  };