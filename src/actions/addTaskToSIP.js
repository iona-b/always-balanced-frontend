export const addTaskToSIP = (task) => {

    return dispatch => {
        dispatch({ type: 'ADD_TASK_TO_SIP', task})
    }
    
}