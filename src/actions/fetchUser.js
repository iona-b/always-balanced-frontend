export const fetchUser = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_USER'})
      fetch('http://localhost:3000/users/1').then(response => {
        return response.json()
      })
      .then(responseJSON => {
        dispatch({ type: 'ADD_USER', user: responseJSON })
      })
    }
  }