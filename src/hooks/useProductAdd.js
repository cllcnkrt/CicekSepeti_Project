import { useState } from 'react';
/* import { useDispatch } from 'react-redux'; */

const useProductAdd = (productAddValidate) => {
  /*  const dispatch = useDispatch(); */
  const [form, setForm] = useState({
    title: '',
    description: '',
    category: '',
    color: '',
    brand: '',
    status: '',
    imageUrl: '',
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
    setErrors(productAddValidate(form));
    if (Object.keys(errors).length === 0) {
      console.log('form :>> ', form);
    }
  };

  return { handleChange, form, handleSubmit, errors };
};

export default useProductAdd;
