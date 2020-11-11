export const deleteOldRelaxationPreferences = (category) => {

    return (dispatch) => {
        fetch(`https://dashboard.heroku.com/apps/always-balanced-backend/user_relaxation_categories/${category.id}`, {
        method:'DELETE'
    })
    .then(response => response.json())
    .then(responseJSON => {
        if(!responseJSON.error){
            dispatch({ type: 'DELETE_OLD_RELAXATION_PREFERENCES', relaxationCategory: responseJSON })
        } else {
            alert(responseJSON.error)
        }
    })
    .catch(err => console.log('deleteOldRelaxationPreferences error:', err))
    }
    
}