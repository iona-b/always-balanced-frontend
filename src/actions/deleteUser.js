export const deleteUser = (userId) => {

    return (dispatch) => {
        fetch(`https://always-balanced-backend.herokuapp.com/users/${userId}`, {
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