export const updateUser = (event, user) => {

    let data = {
        username: event.target.username.value,
        start_work_time: event.target.startWorkTime.value,
        min_num_hours: event.target.minNumHours.value,
        max_num_hours: event.target.maxNumHours.value
    }

    let data2 = {
        username: event.target.username.value,
        start_work_time: `2000-01-01T${event.target.startWorkTime.value}:00.000Z`,
        min_num_hours: event.target.minNumHours.value,
        max_num_hours: event.target.maxNumHours.value
    }

    return (dispatch) => {
        dispatch({ type: 'LOADING'})
        fetch(`https://always-balanced-backend.herokuapp.com/users/${user.id}`,{
            method:"PATCH",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(response => response.json())
        .then(responseJSON => {
            if(!responseJSON.error){
                if(responseJSON.user){
                    localStorage.token = responseJSON.token
                    dispatch({ type: 'UPDATE_USER', user: data2 }) 
                }else {
        
                    alert(responseJSON.error)
                }
            } else {
                alert(responseJSON.error)
            }
        })
        .catch(err => console.log('updateUser error:', err))
    }
}