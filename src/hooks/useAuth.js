/* eslint-disable no-debugger */
/* eslint-disable no-undef */
import fetchSignIn from 'actions/Authorization/signInActions';
import fetchSignUp from 'actions/Authorization/signUpActions';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const useAuth = (authValidate, type) => {
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
    setErrors(authValidate(form));
    if (type === 'signUp') {
      if (form.password.length < 8 || form.password.length > 20) {
        toast.error(
          'Şifre 8 karakterdan az veya 20 karakterden fazla olmamalı ',
          {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          }
        );
        return;
      }
      if (Object.keys(errors).length === 0) {
        dispatch(fetchSignUp(form));
        return;
      }
    }
    if (type === 'signIn') {
      dispatch(fetchSignIn(form));
    }
  };

  return { handleChange, form, handleSubmit, errors };
};

export default useAuth;
