const initialState = {
  token:'',
  userId: '',
  user: {},
  userTasks: [],
  userSchedules: [],
  currentSchedule: {
    id: '',
    date: '',
    user_id: '',
    schedule_activities: [],
    activities: [],
    schedule_tasks: [],
    tasks: []
  },
  scheduleInProgress: [],
  postedSchedule: {
    schedule: {},
    tasks: []
  },
  allRelaxationCategories: [],
  relaxationCategories: []
}

const userReducer = (state=initialState,action) => {
  // USER CASES
  switch (action.type) {
    case 'SET_TOKEN_AND_USER_ID':
      console.log('SET_TOKEN_AND_USER_ID')
      console.log(state)
      let sliced = action.user.user.slice(1,action.user.user.length-2)
      let split1 = sliced.split(',')
      let split2 = split1[0].split(':')
      let id = parseInt(split2[1])
      return {
        ...state,
        token: action.user.token,
        userId: id,
        user: {...state.user},
        userTasks: [...state.userTasks],
        userSchedules: [...state.userSchedules],
        currentSchedule: {
            id: state.currentSchedule.id,
            date: state.currentSchedule.date,
            user_id: state.currentSchedule.user_id,
            schedule_activities: [...state.currentSchedule.schedule_activities],
            activities: [...state.currentSchedule.activities],
            schedule_tasks: [...state.currentSchedule.schedule_tasks],
            tasks: [...state.currentSchedule.tasks]
          },
        scheduleInProgress: [...state.scheduleInProgress],
        postedSchedule: {
          tasks: [...state.postedSchedule.tasks]
        },
        allRelaxationCategories: [...state.allRelaxationCategories],
        relaxationCategories: action.user.relaxation_categories
      }
    case 'LOADING_USER':
      console.log('LOADING_USER')
      console.log(state)
      return {
        ...state,
        token: state.token,
        user: {...state.user},
        userId: state.userId,
        userTasks: [...state.userTasks],
        userSchedules: [...state.userSchedules],
        currentSchedule: {
          id: state.currentSchedule.id,
          date: state.currentSchedule.date,
          user_id: state.currentSchedule.user_id,
          schedule_activities: [...state.currentSchedule.schedule_activities],
          activities: [...state.currentSchedule.activities],
          schedule_tasks: [...state.currentSchedule.schedule_tasks],
          tasks: [...state.currentSchedule.tasks]
        },
        scheduleInProgress: [...state.scheduleInProgress],
        postedSchedule: {
          tasks: [...state.postedSchedule.tasks]
        },
        allRelaxationCategories: [...state.allRelaxationCategories],
        relaxationCategories: [...state.relaxationCategories]
      }
    case 'FETCH_USER':
      console.log('FETCH_USER')
      console.log(state)
      let findSchedule = action.user.schedules.filter((schedule) => {
        if (schedule.date) {
            let splitDate = schedule.date.split("-")
            return parseInt(splitDate[0]) === new Date().getFullYear() && parseInt(splitDate[1]) === new Date().getMonth()+1 && parseInt(splitDate[2]) === new Date().getDate()
        }
      })
      let thisSchedule = ''
      if (findSchedule.length > 0) {
        let foundSchedule = findSchedule[findSchedule.length-1]
        thisSchedule = {
          id: foundSchedule.id,
          date: foundSchedule.date,
          user_id: foundSchedule.user_id,
          schedule_activities: [state.currentSchedule.schedule_activities],
          activities: [state.currentSchedule.activities],
          schedule_tasks: [state.currentSchedule.schedule_tasks],
          tasks: [state.currentSchedule.tasks]
        }
      } else {
        thisSchedule = initialState.currentSchedule
      }
      return {
        ...state,
        token: state.token,
        userId: state.userId,
        user: action.user,
        userTasks: action.user.tasks,
        userSchedules: action.user.schedules,
        currentSchedule: thisSchedule,
        scheduleInProgress: [...state.scheduleInProgress],
        postedSchedule: {
          tasks: [...state.postedSchedule.tasks]
        },
        allRelaxationCategories: [...state.allRelaxationCategories],
        relaxationCategories: action.user.relaxation_categories
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
        token: state.token,
        userId: state.userId,
        user: {...state.user},
        userTasks: state.userTasks.concat(task),
        userSchedules: [...state.user.schedules],
        currentSchedule: {
          id: state.currentSchedule.id,
          date: state.currentSchedule.date,
          user_id: state.currentSchedule.user_id,
          schedule_activities: [...state.currentSchedule.schedule_activities],
          activities: [...state.currentSchedule.activities],
          schedule_tasks: [...state.currentSchedule.schedule_tasks],
          tasks: [...state.currentSchedule.tasks]
        },
        scheduleInProgress: [...state.scheduleInProgress],
        postedSchedule: {
          tasks: [...state.postedSchedule.tasks]
        },
        allRelaxationCategories: [...state.allRelaxationCategories],
        relaxationCategories: [...state.relaxationCategories]
      }
    case 'ADD_TASK_TO_POSTED_SCHEDULE':
      console.log('ADD_TASK_TO_POSTED_SCHEDULE')
      console.log(state)
      return {
        ...state,
        token: state.token,
        userId: state.userId,
        user: {...state.user},
        userTasks: state.userTasks.concat(action.task),
        userSchedules: [...state.user.schedules],
        currentSchedule: {
          id: state.currentSchedule.id,
          date: state.currentSchedule.date,
          user_id: state.currentSchedule.user_id,
          schedule_activities: [...state.currentSchedule.schedule_activities],
          activities: [...state.currentSchedule.activities],
          schedule_tasks: [...state.currentSchedule.schedule_tasks],
          tasks: [...state.currentSchedule.tasks]
        },
        scheduleInProgress: [...state.scheduleInProgress],
        postedSchedule: {
          tasks: [...state.postedSchedule.tasks.concat(action.task)]
        },
        allRelaxationCategories: [...state.allRelaxationCategories],
        relaxationCategories: [...state.relaxationCategories]
      }
  // USER SCHEDULE CASES
    case 'ADD_SCHEDULE':
      console.log('ADD_SCHEDULE')
      console.log(state)
      return {
        ...state,
        token: state.token,
        userId: state.userId,
        user: {...state.user},
        userTasks: [...state.userTasks],
        userSchedules: state.userSchedules.concat(action.schedule),
        currentSchedule: {
          id: action.schedule.id,
          date: action.schedule.date,
          user_id: action.schedule.user_id,
          schedule_activities: [...state.currentSchedule.schedule_activities],
          activities: [...state.currentSchedule.activities],
          schedule_tasks: [...state.currentSchedule.schedule_tasks],
          tasks: [...state.currentSchedule.tasks]
        },
        scheduleInProgress: [...state.scheduleInProgress],
        // postedSchedule: {
        //   tasks: [...state.postedSchedule.tasks]
        // },
        allRelaxationCategories: [...state.allRelaxationCategories],
        relaxationCategories: [...state.relaxationCategories]
      }
  // SCHEDULE CASES
    case 'LOADING_SCHEDULE':
      console.log('LOADING_SCHEDULE')
      console.log(state)
      return {
        ...state,
        token: state.token,
        userId: state.userId,
        user: {...state.user},
        userTasks: [...state.userTasks],
        userSchedules: [...state.userSchedules],
        currentSchedule: {
          id: state.currentSchedule.id,
          date: state.currentSchedule.date,
          user_id: state.currentSchedule.user_id,
          schedule_activities: [...state.currentSchedule.schedule_activities],
          activities: [...state.currentSchedule.activities],
          schedule_tasks: [...state.currentSchedule.schedule_tasks],
          tasks: [...state.currentSchedule.tasks]
        },
        scheduleInProgress: [...state.scheduleInProgress],
        postedSchedule: {
          tasks: [...state.postedSchedule.tasks]
        },
        allRelaxationCategories: [...state.allRelaxationCategories],
        relaxationCategories: [...state.relaxationCategories]
      }
    case 'FETCH_SCHEDULE':
      console.log('FETCH_SCHEDULE')
      console.log(state)
      return {
        ...state,
        token: state.token,
        userId: state.userId,
        user: {...state.user},
        userTasks: state.user.tasks,
        userSchedules: [...state.userSchedules],
        currentSchedule: {
          id: action.currentSchedule.id,
          date: action.currentSchedule.date,
          user_id: action.currentSchedule.user_id,
          schedule_activities: [...action.currentSchedule.schedule_activities],
          activities: [...action.currentSchedule.activities],
          schedule_tasks: [...action.currentSchedule.schedule_tasks],
          tasks: [...action.currentSchedule.tasks]
        },
        currentSchedule: action.currentSchedule,
        scheduleInProgress: [...state.scheduleInProgress],
        postedSchedule: {
          tasks: [...state.postedSchedule.tasks]
        },
        allRelaxationCategories: [...state.allRelaxationCategories],
        relaxationCategories: [...state.relaxationCategories]
      }
    case 'FINALISE_SCHEDULE':
      console.log('FINALISE_SCHEDULE')
      console.log(state)
      return {
        ...state,
        token: state.token,
        userId: state.userId,
        user: {...state.user},
        userTasks: state.user.tasks,
        userSchedules: [...state.userSchedules],
        currentSchedule: {
          id: action.schedule.schedule_id,
          date: state.currentSchedule.date,
          user_id: state.currentSchedule.user_id,
          schedule_activities: [...state.currentSchedule.schedule_activities],
          activities: [...state.currentSchedule.activities],
          schedule_tasks: [...state.currentSchedule.schedule_tasks],
          tasks: [...state.currentSchedule.tasks]
        },
        scheduleInProgress: [...state.scheduleInProgress],
        postedSchedule: {
          tasks: [...state.postedSchedule.tasks]
        },
        allRelaxationCategories: [...state.allRelaxationCategories],
        relaxationCategories: [...state.relaxationCategories]
      }
    case 'ADD_TASK_TO_SIP':
      console.log('ADD_TASK_TO_SIP')
      console.log(state)
      return {
        ...state,
        token: state.token,
        userId: state.userId,
        user: {...state.user},
        userTasks: state.user.tasks,
        userSchedules: [...state.userSchedules],
        currentSchedule: {
          id: state.currentSchedule.id,
          date: state.currentSchedule.date,
          user_id: state.currentSchedule.user_id,
          schedule_activities: [...state.currentSchedule.schedule_activities],
          activities: [...state.currentSchedule.activities],
          schedule_tasks: [...state.currentSchedule.schedule_tasks],
          tasks: [...state.currentSchedule.tasks]
        },
        scheduleInProgress: state.scheduleInProgress.concat(action.task),
        postedSchedule: {
          tasks: [...state.postedSchedule.tasks]
        },
        allRelaxationCategories: [...state.allRelaxationCategories],
        relaxationCategories: [...state.relaxationCategories]
      }
    case 'DELETE_CURRENT_SCHEDULE':
        console.log('DELETE_CURRENT_SCHEDULE')
        console.log(state)
        let updatedSchedules = state.user.schedules.filter (schedule => schedule.id !== action.currentSchedule.id)
        return {
          ...state,
          token: state.token,
          userId: state.userId,
          user: {...state.user},
          userTasks: state.user.tasks,
          userSchedules: updatedSchedules,
          currentSchedule: initialState.currentSchedule,
          scheduleInProgress: [],
          postedSchedule: {
            tasks: []
          },
          allRelaxationCategories: [...state.allRelaxationCategories],
          relaxationCategories: [...state.relaxationCategories],
      }
      // RELAXATION CATEGORIES
    case 'FETCH_RELAXATION_CATEGORIES':
      console.log('FETCH_RELAXATION_CATEGORIES')
      console.log(state)
      return {
        ...state,
        token: state.token,
        userId: state.userId,
        user: {...state.user},
        userTasks: state.user.tasks,
        userSchedules: [...state.userSchedules],
        currentSchedule: {
          id: state.currentSchedule.id,
          date: state.currentSchedule.date,
          user_id: state.currentSchedule.user_id,
          schedule_activities: [...state.currentSchedule.schedule_activities],
          activities: [...state.currentSchedule.activities],
          schedule_tasks: [...state.currentSchedule.schedule_tasks],
          tasks: [...state.currentSchedule.tasks]
        },
        scheduleInProgress: [...state.scheduleInProgress],
        postedSchedule: {
          tasks: [...state.postedSchedule.tasks]
        },
        allRelaxationCategories: action.relaxationCategories,
        relaxationCategories: [...state.relaxationCategories]
      }
      case 'ADD_USER_RELAXATION_CATEGORY':
        console.log('ADD_USER_RELAXATION_CATEGORY')
        console.log(state)
        return {
          ...state,
          token: state.token,
          userId: state.userId,
          user: {...state.user},
          userTasks: state.user.tasks,
          userSchedules: [...state.userSchedules],
          currentSchedule: {
            id: state.currentSchedule.id,
            date: state.currentSchedule.date,
            user_id: state.currentSchedule.user_id,
            schedule_activities: [...state.currentSchedule.schedule_activities],
            activities: [...state.currentSchedule.activities],
            schedule_tasks: [...state.currentSchedule.schedule_tasks],
            tasks: [...state.currentSchedule.tasks]
          },
          scheduleInProgress: [...state.scheduleInProgress],
          postedSchedule: {

            tasks: [...state.postedSchedule.tasks]
          },
          allRelaxationCategories: [...state.allRelaxationCategories],
          relaxationCategories: state.relaxationCategories.concat(action.userRelaxationCategory)
        }
      // DEFAULT CASES
    default:
      return state;
  }
}

export default userReducer;