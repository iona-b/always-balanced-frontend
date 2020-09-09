export const removeTaskFromSIP = (taskNotes) => {

    return dispatch => {
        dispatch({ type: 'REMOVE_TASK_FROM_SIP', taskNotes})
    }
    
}