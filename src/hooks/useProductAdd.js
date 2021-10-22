import { useEffect, useState } from 'react';
/* import { useDispatch } from 'react-redux'; */

const useProductAdd = (productAddValidate, isOfferable, getSelectForm) => {
  /*  const dispatch = useDispatch(); */
  const [form, setForm] = useState({
    title: '',
    description: '',
    isOfferable,
    imageUrl: '',
    price: '',
    color: '',
    brand: '',
    status: '',
    category: '',
  });
  useEffect(() => {
    if (
      getSelectForm.brand.id ||
      getSelectForm.status.id ||
      getSelectForm.color.id ||
      getSelectForm.category.id
    ) {
      setForm((prev) => ({ ...prev, ...getSelectForm }));
    }
  }, [
    getSelectForm.brand.id,
    getSelectForm.status.id,
    getSelectForm.color.id,
    getSelectForm.category.id,
    getSelectForm,
  ]);

  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    setForm({
      ...form,
      [name]: name === 'isOfferable' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(productAddValidate(form));
  };
  console.log('formmmmm :>> ', form);
  console.log('errors :>> ', errors);
  if (Object.keys(errors).length === 0) {
    console.log('sorun yokkkkkkkkkk');
  }

  return { handleChange, form, handleSubmit, errors };
};

export default useProductAdd;
