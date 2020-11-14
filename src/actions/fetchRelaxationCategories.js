export const fetchRelaxationCategories = () => {

    return (dispatch) => {
      dispatch({ type: 'LOADING'})
      fetch(`https://cors-anywhere.herokuapp.com/https://always-balanced-backend.herokuapp.com/relaxation_categories`).then(response => {
        return response.json()
      })
      .then(responseJSON => {
        dispatch({ type: 'FETCH_RELAXATION_CATEGORIES', relaxationCategories: responseJSON })
      })
      .catch(err => console.log('fetchRelaxationCategories error:', err))
    }

}