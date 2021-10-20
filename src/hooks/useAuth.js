/* eslint-disable no-undef */
import fetchSignIn from 'actions/signInActions';
import fetchSignUp from 'actions/signUpActions';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const useAuth = (validate, type) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
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
    if (Object.keys(errors).length === 0) {
      if (type === 'signUp') {
        dispatch(fetchSignUp(form));
      } else if (type === 'signIn') {
        dispatch(fetchSignIn(form));
      }
    }
  };

  return { handleChange, form, handleSubmit, errors };
};

export default useAuth;
