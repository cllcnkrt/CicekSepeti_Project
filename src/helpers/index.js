/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react-hooks/rules-of-hooks */
import fetchPurchase from 'actions/product/purchaseActions';

export const textCapitalize = (str) => {
  const words = str.split(' ');
  return words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export function authValidate(form) {
  const errors = {};

  if (!form.email) {
    errors.email = true;
  } else if (!/\S+@\S+\.\S+/.test(form.email)) {
    errors.email = true;
  }
  if (!form.password) {
    errors.password = true;
  } else if (form.password.length < 8) {
    errors.password = true;
  } else if (form.password.length > 20) {
    errors.password = true;
  }
  return errors;
}

export function productAddValidate(form) {
  const errors = {};
  console.log('form22 :>> ', form);

  for (const key in form) {
    if (Object.hasOwnProperty.call(form, key)) {
      if (form[key].length === 0 || form[key].id?.length === 0) {
        errors[key] = true;
      }
      if (
        (key === 'title' && form[key].length > 100) ||
        (key === 'description' && form[key].length > 500)
      ) {
        errors[key] = true;
      }
    }
  }

  return errors;
}

export const handlePurchaseButton = (dispatch) => {
  dispatch(fetchPurchase());
};
