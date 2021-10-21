import { useState } from 'react';
/* import { useDispatch } from 'react-redux'; */

const useProductAdd = (productAddValidate, checkbox) => {
  /*  const dispatch = useDispatch(); */
  const [form, setForm] = useState({
    title: '',
    description: '',
    category: '',
    color: '',
    brand: '',
    status: '',
    checkbox,
    imageUrl: '',
    price: '',
  });

  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setForm({
      ...form,
      [name]: name === 'checkbox' ? checked : value,
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
