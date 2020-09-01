export const removeTask = (taskId) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/tasks/${taskId}`, {
        method:'DELETE'
    })
    .then(response => response.json())
    .then(responseJSON => {
        if(!responseJSON.error){
            // Need to add remove task
            // dispatch({ type: 'REMOVE_TASK' })
        } else {
            alert(responseJSON.error)
        }
    })
    .catch(err => console.log('removeTask Error:', err))
    }
}