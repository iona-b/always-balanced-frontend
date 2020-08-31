export const fetchRelaxationCategories = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_SCHEDULE'})
      fetch(`http://localhost:3000/relaxation_categories`).then(response => {
        return response.json()
      })
      .then(responseJSON => {
        dispatch({ type: 'FETCH_RELAXATION_CATEGORIES', relaxationCategories: responseJSON })
      })
    }
}