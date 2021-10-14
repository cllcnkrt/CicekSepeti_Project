import fetchSignIn from 'actions/signInActions';
import fetchSignUp from 'actions/signUpActions';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const useForm = (validate, type) => {
  const dispatch = useDispatch();
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

    if (type === 'signUp') {
      dispatch(fetchSignUp(form));
    } else if (type === 'signIn') {
      dispatch(fetchSignIn(form));
    }
  };

  return { handleChange, form, handleSubmit, errors, isSubmitting };
};

export default useForm;
