export const finaliseScheduleTasks = (scheduleId, taskId) => {
    let data = {
        schedule_id: scheduleId,
        task_id: taskId
    }
    return (dispatch) => {
        fetch('http://localhost:3000/schedule_tasks',{
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
        .catch(err => console.log('App.js Login Error:', err))
    }
}