const initialState = {
  user: {},
  userTasks: [],
  userSchedules: [],
  currentSchedule: {},
  scheduleInProgress: [],
  postedSchedule: {
    schedule: {},
    tasks: [],
    readyToPost: false
  },
  relaxationCategories: [],
  loading: false
}

const userReducer = (state=initialState,action) => {
  // USER CASES
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
        scheduleInProgress: [...state.scheduleInProgress],
        postedSchedule: {
          schedule: {...state.postedSchedule.schedule},
          tasks: [...state.postedSchedule.tasks],
          readyToPost: false
        },
        relaxationCategories: [...state.relaxationCategories],
        loading: true
      }
    case 'FETCH_USER':
      console.log('FETCH_USER')
      console.log(state)
      return {
        ...state,
        user: action.user,
        userTasks: action.user.tasks,
        userSchedules: action.user.schedules,
        currentSchedule: {...state.currentSchedule},
        scheduleInProgress: [...state.scheduleInProgress],
        postedSchedule: {
          schedule: {...state.postedSchedule.schedule},
          tasks: [...state.postedSchedule.tasks],
          readyToPost: false
        },
        relaxationCategories: action.user.relaxation_categories,
        loading: false
      }
    case 'LOGOUT_USER':
      console.log('LOGOUT_USER')
      console.log(state)
      return initialState
  // USER TASK CASES
    case 'ADD_TASK':
      console.log('ADD_TASK')
      console.log(state)
      let task = {
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
        scheduleInProgress: [...state.scheduleInProgress],
        postedSchedule: {
          schedule: {...state.postedSchedule.schedule},
          tasks: [...state.postedSchedule.tasks],
          readyToPost: false
        },
        relaxationCategories: [...state.relaxationCategories],
        loading: false
      }
    case 'ADD_TASK_TO_POSTED_SCHEDULE':
      console.log('ADD_TASK_TO_POSTED_SCHEDULE')
      console.log(state)
      let task2 = {
        id: action.task.id,
        task_description: action.task.task_description,
        task_notes: action.task.task_notes
      }
      return {
        ...state,
        user: {...state.user},
        userTasks: state.userTasks.concat(task2),
        userSchedules: [...state.user.schedules],
        currentSchedule: {...state.currentSchedule},
        scheduleInProgress: [...state.scheduleInProgress],
        postedSchedule: {
          schedule: {...state.postedSchedule.schedule},
          tasks: [...state.postedSchedule.tasks.concat(task2)],
          readyToPost: false
        },
        relaxationCategories: [...state.relaxationCategories],
        loading: false
      }
  // USER SCHEDULE CASES
    case 'ADD_SCHEDULE':
      console.log('ADD_SCHEDULE')
      console.log(state)
      let schedule = {
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
        scheduleInProgress: [...state.scheduleInProgress],
        postedSchedule: {
          schedule: {schedule},
          tasks: [...state.postedSchedule.tasks],
          readyToPost: true
        },
        relaxationCategories: [...state.relaxationCategories],
        loading: false
      }
  // SCHEDULE CASES
    case 'LOADING_SCHEDULE':
      console.log('LOADING_SCHEDULE')
      console.log(state)
      return {
        ...state,
        user: {...state.user},
        userTasks: [...state.userTasks],
        userSchedules: [...state.userSchedules],
        currentSchedule: {...state.currentSchedule},
        scheduleInProgress: [...state.scheduleInProgress],
        postedSchedule: {
          schedule: {...state.postedSchedule.schedule},
          tasks: [...state.postedSchedule.tasks],
          readyToPost: false
        },
        relaxationCategories: [...state.relaxationCategories],
        loading: true
      }
    case 'FETCH_SCHEDULE':
      console.log('FETCH_SCHEDULE')
      console.log(state)
      return {
        ...state,
        user: {...state.user},
        userTasks: state.user.tasks,
        userSchedules: [...state.userSchedules],
        currentSchedule: action.currentSchedule,
        scheduleInProgress: [...state.scheduleInProgress],
        postedSchedule: {
          schedule: {...state.postedSchedule.schedule},
          tasks: [...state.postedSchedule.tasks],
          readyToPost: false
        },
        relaxationCategories: [...state.relaxationCategories],
        loading: false
      }
    case 'FINALISE_SCHEDULE':
      console.log('FINALISE_SCHEDULE')
      console.log(state)
      return {
        ...state,
        user: {...state.user},
        userTasks: state.user.tasks,
        userSchedules: [...state.userSchedules],
        currentSchedule: {...state.currentSchedule},
        scheduleInProgress: [],
        postedSchedule: {
          schedule: {},
          tasks: [],
          readyToPost: false
        },
        relaxationCategories: [...state.relaxationCategories],
        loading: false
      }
    case 'ADD_TASK_TO_SIP':
      console.log('ADD_TASK_TO_SIP')
      console.log(state)
      return {
        ...state,
        user: {...state.user},
        userTasks: state.user.tasks,
        userSchedules: [...state.userSchedules],
        currentSchedule: {...state.currentSchedule},
        scheduleInProgress: state.scheduleInProgress.concat(action.task),
        postedSchedule: {
          schedule: {...state.postedSchedule.schedule},
          tasks: [...state.postedSchedule.tasks],
          readyToPost: false
        },
        relaxationCategories: [...state.relaxationCategories],
        loading: false
      }
  // DEFAULT CASES
    default:
      return state;
  }
}

export default userReducer;