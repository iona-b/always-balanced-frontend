export const finaliseScheduleTasks = (taskId) => {
    let data = {
        task_id: taskId
    }
    console.log(data)
    return (dispatch) => {
        dispatch({ type: 'LOADING_USER'})
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