export const editCurrentSchedule = (scheduleId) => {

    return (dispatch) => {
        fetch(`https://cors-anywhere.herokuapp.com/https://always-balanced-backend.herokuapp.com/schedules/${scheduleId}`, {
        method:'DELETE'
    })
    .then(response => response.json())
    .then(responseJSON => {
        if(!responseJSON.error){
            dispatch({ type: 'EDIT_CURRENT_SCHEDULE', currentSchedule: responseJSON })
        } else {
            alert(responseJSON.error)
        }
    })
    .catch(err => console.log('editCurrentSchedule error:', err))
    }
    
}