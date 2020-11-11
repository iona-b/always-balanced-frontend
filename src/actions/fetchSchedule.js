export const fetchSchedule = (scheduleId) => {

    return (dispatch) => {
      fetch(`https://always-balanced-backend.herokuapp.com/schedules/${scheduleId}`).then(response => {
        return response.json()
      })
      .then(responseJSON => {

        dispatch({ type: 'FETCH_SCHEDULE', currentSchedule: responseJSON })
      })
      .catch(err => console.log('fetchSchedule error:', err))
    }

}