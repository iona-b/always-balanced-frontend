const initialState = {
  user: {},
  userTasks: [],
  userSchedules: [],
  currentSchedule: {},
  loading: false
}

const userReducer = (state=initialState,action) => {
  switch (action.type) {
    case 'LOADING_USER':
      console.log('LOADING_USER')
      console.log(state)
      return {
        ...state,
        user: {...state.user},
        userTasks: [...state.userTasks],
        userSchedules: [...state.userSchedules],
        currentSchedule: {...state.currentSchedule},
        loading: true
      }
    case 'ADD_USER':
      console.log('ADD_USER')
      console.log(state)
      return {
        ...state,
        user: action.user,
        userTasks: action.user.tasks,
        userSchedules: action.user.schedules,
        currentSchedule: {...state.currentSchedule},
        loading: false
      }
    case 'LOGOUT_USER':
      console.log('LOGOUT_USER')
      console.log(state)
      return {
        ...state,
        user: {},
        userTasks: [],
        currentSchedule: {},
        loading: false
      }
      case 'ADD_TASK':
        console.log('ADD_TASK')
        console.log(state)
        const task = {
          id: action.task.id,
          task_description: action.task.task_description,
          task_notes: action.task.task_notes
        }
        return {
          ...state,
          user: {...state.user},
          userTasks: state.userTasks.concat(task),
          userSchedules: [...state.user.schedules],
          currentSchedule: {...state.currentSchedule},
          loading: false
        }
      case 'ADD_SCHEDULE':
        console.log('ADD_SCHEDULE')
        console.log(state)
        const schedule = {
          id: action.schedule.id,
          date: action.schedule.date,
          user_id: action.schedule.user_id
        }
        return {
          ...state,
          user: {...state.user},
          userTasks: [...state.userTasks],
          userSchedules: state.userSchedules.concat(schedule),
          currentSchedule: {...state.currentSchedule},
          loading: false
        }
      case 'LOADING_SCHEDULE':
        console.log('LOADING_SCHEDULE')
        console.log(state)
        return {
          ...state,
          user: {...state.user},
          userTasks: [...state.userTasks],
          userSchedules: [...state.userSchedules],
          currentSchedule: {...state.currentSchedule},
          loading: true
        }
      case 'FETCH_SCHEDULE':
        console.log('FETCH_SCHEDULE')
        console.log(state)
        const currentSchedule = {
          id: action.currentSchedule.id,
          date: action.currentSchedule.date,
          user_id: action.currentSchedule.user_id
        }
        return {
          ...state,
          user: {...state.user},
          userTasks: state.user.tasks,
          userSchedules: [...state.userSchedules],
          currentSchedule: action.currentSchedule,
          loading: false
        }
    default:
      return state;
  }
}

export default userReducer;