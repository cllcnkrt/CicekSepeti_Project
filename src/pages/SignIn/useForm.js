import { useState } from 'react';

const useForm = (validate) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(form));
    setIsSubmitting(true);
  };

  return { handleChange, form, handleSubmit, errors, isSubmitting };
};

export default useForm;
