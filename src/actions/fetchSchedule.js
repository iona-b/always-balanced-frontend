export const fetchSchedule = (scheduleId) => {

    return (dispatch) => {
      fetch(`https://dashboard.heroku.com/apps/always-balanced-backend/schedules/${scheduleId}`).then(response => {
        return response.json()
      })
      .then(responseJSON => {

        dispatch({ type: 'FETCH_SCHEDULE', currentSchedule: responseJSON })
      })
      .catch(err => console.log('fetchSchedule error:', err))
    }

}