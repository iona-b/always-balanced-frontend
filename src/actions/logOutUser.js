export const logOutUser = () => {
    return dispatch => {
        dispatch({ type: 'LOGOUT_USER', })
    }
}