const initialState = null

export default (state = initialState, action) => {
  if(action.type === 'GET_DATA_SELL') {
    return action.payload;
  }
  return state
}
