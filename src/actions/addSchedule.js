export const addSchedule = (userId, token) => {
    let data = {
        user_id: userId
    }
    return (dispatch) => {
    dispatch({ type: 'LOADING_USER'})
    fetch('http://localhost:3000/schedules',{
    method:"POST",
    headers:{
       'Content-Type':'application/json',
       'Authorization': `Bearer ${token}`
    },
    body:JSON.stringify(data)
    })
    .then(response => response.json())
    .then(responseJSON => {
        if(!responseJSON.error){
            dispatch({ type: 'ADD_SCHEDULE', schedule: responseJSON })
        } else {
            alert(responseJSON.error)
        }
    })
    .catch(err => console.log('App.js Login Error:', err))
    }
}