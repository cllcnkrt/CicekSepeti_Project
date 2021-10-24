import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const useProductAdd = (productAddValidate, isOfferable, getSelectForm) => {
  const imageUpload = useSelector((state) => state.imageUpload.imageUpload.url);
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
  useEffect(() => {
    setForm((prev) => ({ ...prev, imageUrl: imageUpload }));
  }, [imageUpload]);

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

  return { handleChange, form, handleSubmit, errors, setForm };
};

export default useProductAdd;
