export const deleteTask = (taskId) => {

    return (dispatch) => {
        fetch(`http://localhost:3000/tasks/${taskId}`, {
            method:'DELETE'
        })
        .then(response => response.json())
        .then(responseJSON => {
            if(!responseJSON.error){
                dispatch({ type: 'DELETE_TASK', task: responseJSON })
            } else {
                alert(responseJSON.error)
            }
        })
        .catch(err => console.log('deleteTask error:', err))
    }

}