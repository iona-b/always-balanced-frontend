export const addSchedule = (userId, token) => {

    let data = {
        user_id: userId
    }

    return (dispatch) => {
        dispatch({ type: 'LOADING'})
        fetch('https://cors-anywhere.herokuapp.com/https://always-balanced-backend.herokuapp.com/schedules',{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
                'Authorization': `Bearer ${token}`
            },
            body:JSON.stringify(data)
        })
        .then(response => response.json())
        .catch(err => console.log('addSchedule error:', err))
    }
}

