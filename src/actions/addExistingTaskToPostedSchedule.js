export const addExistingTaskToPostedSchedule = (task) => {

    return dispatch => {
        dispatch({ type: 'ADD_EXISTING_TASK_TO_POSTED_SCHEDULE', task: task})
    }
    
}