export const validateInfo =(values, labels) => {

  let errors = {};
  const regex = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  labels.forEach((item) => {
    const label = item.label;
    const key = item.key;
    const maxLength = item.maxLength;
    const minLength = item.minLength;
    switch (item.type) {
      case 'text':
      case 'password':
        maxLength && values[key]?.length > maxLength &&
        (errors[key] = `${label} must be less ${maxLength} characters`);
        minLength && values[key]?.length < minLength &&
        (errors[key] = `${label} must be have ${minLength} characters`);
        !values[key].trim() && (errors[key] = `${label} is require`);
        break;
      case 'email':
        values[key] && !regex.test(String(values[key]).toUpperCase()) &&
          (errors[key] = `${label} is inValid`);
        !values[key].trim() && (errors[key] = `${label} is require`);
        break;
      case 'confirmPassword':
        values[key].trim() && values[key] !== values[item.confirmWidth] &&
        (errors[key] = `${label} is not match`);
        !values[key].trim() && (errors[key] = `${label} is require`);
        break;
      default:
        break;
    }
  });

  return errors;
}
