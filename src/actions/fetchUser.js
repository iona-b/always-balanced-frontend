export const fetchUser = (userId) => {

  return (dispatch) => {
    fetch(`https://dashboard.heroku.com/apps/always-balanced-backend/users/${userId}`).then(response => {
      return response.json()
    })
    .then(responseJSON => {
      dispatch({ type: 'FETCH_USER', user: responseJSON })
    })
    .catch(err => console.log('fetchUser error:', err))
  }

}