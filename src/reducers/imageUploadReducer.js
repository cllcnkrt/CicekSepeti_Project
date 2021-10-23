import {
  FETCH_IMAGE_UPLOAD_FAILURE,
  FETCH_IMAGE_UPLOAD_PENDING,
  FETCH_IMAGE_UPLOAD_SUCCESS,
  IMAGE_UPLOAD_CLEAR,
} from '../constants';

const initialState = {
  imageUpload: { url: '' },
  isFetching: false,
  isError: false,
};

const imageUploadReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IMAGE_UPLOAD_PENDING:
      return {
        ...state,
        isFetching: true,
        imageUpload: { url: '' },
        isError: false,
      };
    case FETCH_IMAGE_UPLOAD_SUCCESS:
      return {
        ...state,
        imageUpload: action.payload,
        isFetching: false,
        isError: false,
      };
    case FETCH_IMAGE_UPLOAD_FAILURE:
      return { ...state, isError: true, isFetching: false };
    case IMAGE_UPLOAD_CLEAR:
      return {
        ...state,
        isError: false,
        isFetching: false,
        imageUpload: { url: '' },
      };
    default:
      return state;
  }
};

export default imageUploadReducer;
