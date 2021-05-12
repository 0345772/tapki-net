const tapkisLoaded = (newTapkis) => {
  return {
    type: "FETCH_TAPKIS_SUCCESS",
    payload: newTapkis
  }
}

const tapkisRequested = () => {
  return {
    type: "FETCH_TAPKIS_REQUEST",
  }
}

const tapkisError = (error) => {
  return {
    type: "FETCH_TAPKIS_FAILURE",
    payload: error
  }
}

export const tapkiAddedToCart = (tapkiId) => {
  return {
    type: "TAPKI_ADDED_TO_CART",
    payload: tapkiId
  }
}
export const tapkiRemovedFromCart = (tapkiId) => {
  return {
    type: "TAPKI_REMOVED_FROM_CART",
    payload: tapkiId
  }
}
export const allTapkisRemovedFromCart = (tapkiId) => {
  return {
    type: "ALL_TAPKIS_REMOVED_FROM_CART",
    payload: tapkiId
  }
}

const fetchTapkis = (tapkistoreService, dispatch) => () => {
  dispatch(tapkisRequested())
  tapkistoreService.getTapkis()
    .then((data) => dispatch(tapkisLoaded(data)))
    .catch((error) => dispatch(tapkisError(error))) 
}

export {
  fetchTapkis
}