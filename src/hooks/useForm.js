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

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e);
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(form));

    if (type === 'signUp') {
      dispatch(fetchSignUp(form));
    } else if (type === 'signIn') {
      dispatch(fetchSignIn(form));
    }
  };

  return { handleChange, form, handleSubmit, errors };
};

export default useForm;
