export const fetchUser = (userId) => {

  return (dispatch) => {
    fetch(`https://always-balanced-backend.herokuapp.com/users/${userId}`).then(response => {
      return response.json()
    })
    .then(responseJSON => {
      dispatch({ type: 'FETCH_USER', user: responseJSON })
    })
    .catch(err => console.log('fetchUser error:', err))
  }

}