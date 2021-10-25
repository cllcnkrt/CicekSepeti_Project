/* eslint-disable import/prefer-default-export */
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

const useForgetPassword = (forgetPasswordValidate) => {
  const history = useHistory();
  const [error, setError] = useState({});
  const [input, setInput] = useState({
    email: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(forgetPasswordValidate(input));
    if (input?.email && error === '') {
      console.log('email :>> ', error);
      toast.success('Şifreniz belirttiğiniz e-posta adresine gönderildi', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      history.push('/giris');
    }
  };
  useEffect(() => {
    if (error?.email === true) {
      console.log('error :>> ', error);
      toast.error('Lütfen e-postanızı giriniz', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    }
  }, [error, history, input?.email]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
    setError('');
  };

  return { handleChange, input, handleSubmit, error };
};

export default useForgetPassword;
