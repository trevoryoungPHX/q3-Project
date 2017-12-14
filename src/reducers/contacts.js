import {
  GET_CONTACTS_SUCCESS, GET_CONTACTS_PENDING, POST_CONTACTS_SUCCESS, POST_CONTACTS_PENDING
} from '../actions/contacts'

export default(state = [], action) => {
  switch(action.type){
    case GET_CONTACTS_SUCCESS:
      return [...action.payload.data];
    case GET_CONTACTS_PENDING:
      return state;
      case POST_CONTACTS_SUCCESS:
        return [...action.payload.data];
      case POST_CONTACTS_PENDING:
        return state;
    default:
      return state;
  }
}
