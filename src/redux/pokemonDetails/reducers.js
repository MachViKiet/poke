import { ADD_POKEMONDETAILS, FETCH_POKEMONDETAILS_FAILURE, FETCH_POKEMONDETAILS_REQUEST, FETCH_POKEMONDETAILS_SUCCESS } from "./actions";

const initialState = {
  data: null,
  loading: false,
  success: false,
  error: null
};

const pokemonDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKEMONDETAILS_REQUEST:
      return {
        ...state, 
        loading: true,
        success: false,
        error: null
      };
    case FETCH_POKEMONDETAILS_SUCCESS:
      return {
        ...state, 
        loading: false,
        // data:  { ...state.data, [action?.name]: action.payload },
        success: true,
        error: null
      };
    case ADD_POKEMONDETAILS:
      return {
        ...state, 
        loading: true,
        data:  { ...state.data, [action.name]: action.payload },
        success: true,
        error: null
      };
    case FETCH_POKEMONDETAILS_FAILURE:
      return {
        ...state, 
        loading: false,
        data: null,
        success: false,
        error: action.payload
      };
    
    default:
      return state;
  }
};

export default pokemonDetailsReducer;
