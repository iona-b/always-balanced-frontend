export const addTask = (task) => {
    return (dispatch) => {
    dispatch({ type: 'LOADING_USER'})
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
            dispatch({ type: 'ADD_TASK', task: responseJSON })
        } else {
            alert(responseJSON.error)
        }
    })
    .catch(err => console.log('App.js Login Error:', err))
    }
}