import { TYPES } from "./action"

const reducers = (state, action) => {
  switch(action.type) {
    case TYPES.SET_PAGE:
      return {...state, page: action.payload}
    case TYPES.SET_SORT:
      return {...state, sort: action.payload}
    case TYPES.SET_REFESH:
      return {...state, refresh: action.payload}
    default:
      return state;
  }
}

export default reducers