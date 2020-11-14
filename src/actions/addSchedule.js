export const addSchedule = (userId, token) => {

    let data = {
        user_id: userId
    }

    return (dispatch) => {
        dispatch({ type: 'LOADING'})
        fetch('http://localhost:3000/schedules',{
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

