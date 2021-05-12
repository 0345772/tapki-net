const updateTapkiList = (state, action) => {
  if(state === undefined) {
    return {
      tapkis: [],
      loading: true,
      error: null
    }
  }
  switch(action.type) {
    case "FETCH_TAPKIS_REQUEST":
      return {
        tapkis: [],
        loading: true,
        error: null
      };

    case 'FETCH_TAPKIS_SUCCESS':
      return {
        tapkis: action.payload,
        loading: false,
        error: null
      };

    case "FETCH_TAPKIS_FAILURE":
      return {
        tapkis: [],
        loading: false,
        error: action.payload
      }
    default:
      return state.tapkiList;
  }
}

export default updateTapkiList;