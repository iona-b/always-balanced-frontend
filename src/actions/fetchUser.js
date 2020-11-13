export const fetchUser = (userId) => {

  return (dispatch) => {
    fetch(`http://localhost:3000/users/${userId}`).then(response => {
      return response.json()
    })
    .then(responseJSON => {
      dispatch({ type: 'FETCH_USER', user: responseJSON })
    })
    .catch(err => console.log('fetchUser error:', err))
  }

}