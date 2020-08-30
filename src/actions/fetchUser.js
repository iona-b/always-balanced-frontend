export const fetchUser = (user) => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_USER'})
    fetch(`http://localhost:3000/users/${user.id}`).then(response => {
      return response.json()
    })
    .then(responseJSON => {
      dispatch({ type: 'FETCH_USER', user: responseJSON })
    })
  }
}