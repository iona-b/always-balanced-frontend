export const finaliseScheduleTasks = (taskId) => {

    let data = {
        task_id: taskId
    }

    return (dispatch) => {
        dispatch({ type: 'LOADING'})
        fetch('https://cors-anywhere.herokuapp.com/https://always-balanced-backend.herokuapp.com/schedule_tasks',{
        method:"POST",
        headers:{
        'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
        })
        .then(response => response.json())
        .then(responseJSON => {
            if(!responseJSON.error){
                dispatch({ type: 'FINALISE_SCHEDULE', schedule: responseJSON })
            } else {
                alert(responseJSON.error)
            }
        })
        .catch(err => console.log('finaliseScheduleTasks error:', err))
    }

}