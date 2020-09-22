import { useState, useEffect, useCallback} from 'react';

export const useForm = (callback, initialValue, initialLabelErrors, validate) => {
  const [ values, setValues ] = useState(initialValue);

  const [ errors, setErrors ] = useState({});

  const [ isSubmitted, setIsSubmitted ] = useState(false);

  const callbackFunc = useCallback(()=> callback(), [callback]);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    })
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values, initialLabelErrors));
    setIsSubmitted(true);
  }

  useEffect(()=> {
    if (Object.keys(errors).length === 0 && isSubmitted) {
      callbackFunc();
    }
  }, [callbackFunc, isSubmitted, errors]);

  return { handleChange, values, handleSubmit, errors }
};
