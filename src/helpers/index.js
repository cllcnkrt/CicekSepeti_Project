/* eslint-disable react-hooks/rules-of-hooks */
import fetchPurchase from 'actions/purchaseActions';

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

  if (!form.title) {
    errors.title = true;
  } else if (form.title.length > 100) {
    errors.title = true;
  }
  if (!form.description) {
    errors.description = true;
  } else if (form.description.length > 500) {
    errors.description = true;
  }
  if (!form.category) {
    errors.category = true;
  }
  if (!form.color) {
    errors.color = true;
  }
  if (!form.brand) {
    errors.brand = true;
  }
  if (!form.status) {
    errors.status = true;
  }
  if (!form.imageUrl) {
    errors.imageUrl = true;
  }
  if (!form.price) {
    errors.price = true;
  }

  return errors;
}

export const handlePurchaseButton = (dispatch) => {
  dispatch(fetchPurchase());
};
