export const finaliseScheduleActivities = (relaxationCategoryId, activityLength) => {

    let data = {
        relaxation_category_id: relaxationCategoryId,
        activity_length: activityLength
    }

    return (dispatch) => {
        fetch('https://dashboard.heroku.com/apps/always-balanced-backend/schedule_activities',{
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
    .catch(err => console.log('finaliseScheduleActivities error:', err))
    }

}