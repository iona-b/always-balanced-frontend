export const fetchRelaxationCategories = () => {

    return (dispatch) => {
      dispatch({ type: 'LOADING'})
      fetch(`https://dashboard.heroku.com/apps/always-balanced-backend/relaxation_categories`).then(response => {
        return response.json()
      })
      .then(responseJSON => {
        dispatch({ type: 'FETCH_RELAXATION_CATEGORIES', relaxationCategories: responseJSON })
      })
      .catch(err => console.log('fetchRelaxationCategories error:', err))
    }

}