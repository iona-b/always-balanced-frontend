export const fetchSchedule = (schedule) => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_SCHEDULE'})
      fetch(`http://localhost:3000/schedules/${schedule.id}`).then(response => {
        return response.json()
      })
      .then(responseJSON => {
        dispatch({ type: 'FETCH_SCHEDULE', currentSchedule: responseJSON })
      })
    }
}