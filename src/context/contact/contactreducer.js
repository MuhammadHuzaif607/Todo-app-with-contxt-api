import {
  ADD_CONTACT,
  CURRENT_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
} from '../../type';

const ReducerMethod = (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return { ...state, contacts: [action.payload, ...state.contacts] };
    case CURRENT_CONTACT:
      return { ...state, currentcontact: action.payload };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((data) => {
          console.log(data.id, action.payload);
          if (data.id === action.payload.id) {
            return action.payload;
          }
          return data;
        }),
      };

    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (data) => data.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
};

export default ReducerMethod;
