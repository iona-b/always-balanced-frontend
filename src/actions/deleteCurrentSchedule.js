export const deleteCurrentSchedule = (scheduleId) => {

    return (dispatch) => {
        fetch(`https://dashboard.heroku.com/apps/always-balanced-backend/schedules/${scheduleId}`, {
        method:'DELETE'
    })
    .then(response => response.json())
    .then(responseJSON => {
        if(!responseJSON.error){
            dispatch({ type: 'DELETE_CURRENT_SCHEDULE', currentSchedule: responseJSON })
        } else {
            alert(responseJSON.error)
        }
    })
    .catch(err => console.log('deleteCurrentSchedule error:', err))
    }

}