export const removeTaskFromSIP = (task) => {
    return dispatch => {
        dispatch({ type: 'REMOVE_TASK_FROM_SIP', task})
    }
}