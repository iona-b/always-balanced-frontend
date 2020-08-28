import { v4 as uuidv4 } from 'uuid';

const initialState = {
  user: [],
  userTasks: [],
  userSchedules: [],
  loading: false
}

const userReducer = (state=initialState,action) => {
  switch (action.type) {
    case 'LOADING_USER':
      console.log('LOADING_USER')
      console.log(state)
      return {
        ...state,
        user: [...state.user],
        userTasks: [...state.userTasks],
        userSchedules: [...state.userSchedules],
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
        loading: false
      }
    case 'LOGOUT_USER':
      console.log('LOGOUT_USER')
      console.log(state)
      return {
        ...state,
        user: [],
        userTasks: [],
        userSchedules: [],
        loading: false
      }
      case 'ADD_TASK':
        const task = {
          id: uuidv4(),
          task_description: action.payload.text
        }
        return {
          userTasks: state.userTasks.concat(task)
        }
      case 'ADD_SCHEDULE':
        return {
          userSchedules: state.userSchedules.concat(action.payload.text)
        }
    default:
      return state;
  }
}

export default userReducer;