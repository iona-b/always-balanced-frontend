export const addTaskToPostedSchedule = (task) => {

    return (dispatch) => {
        dispatch({ type: 'LOADING'})
        fetch('http://localhost:3000/tasks',{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(task)
        })
        .then(response => response.json())
        .then(responseJSON => {
            if(!responseJSON.error){
                dispatch({ type: 'ADD_TASK_TO_POSTED_SCHEDULE', task: responseJSON })
            } else {
                alert(responseJSON.error)
            }
        })
        .catch(err => console.log('addTaskToPostedSchedule error:', err))
    }

}