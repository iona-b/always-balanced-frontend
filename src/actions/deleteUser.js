export const deleteUser = (userId) => {

    return (dispatch) => {
        fetch(`https://dashboard.heroku.com/apps/always-balanced-backend/users/${userId}`, {
            method:'DELETE'
        })
        .then(response => response.json())
        .then(responseJSON => {
            if(!responseJSON.error){
                dispatch({ type: 'LOGOUT_USER' })
            } else {
                alert(responseJSON.error)
            }
        })
        .catch(err => console.log('deleteUser error:', err))
    }
    
}