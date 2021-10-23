import {
  FETCH_IMAGE_UPLOAD_FAILURE,
  FETCH_IMAGE_UPLOAD_PENDING,
  FETCH_IMAGE_UPLOAD_SUCCESS,
  IMAGE_UPLOAD_CLEAR,
  IMAGE_UPLOAD_PROGRESS,
} from '../constants';

const initialState = {
  imageUpload: { url: '' },
  isFetching: false,
  isError: false,
  progress: 0,
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
        progress: 0,
      };
    case FETCH_IMAGE_UPLOAD_FAILURE:
      return { ...state, isError: true, isFetching: false };
    case IMAGE_UPLOAD_PROGRESS:
      return { ...state, isFetching: true, progress: action.payload };
    case IMAGE_UPLOAD_CLEAR:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default imageUploadReducer;
