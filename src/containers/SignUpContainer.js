import React from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import SignUpForm from '../components/SignUpForm';
import ChooseRelaxationCategories from '../components/ChooseRelaxationCategories'
import Tasks from '../components/Tasks'
import CreateTaskForm from '../components/CreateTaskForm'

class SignUpContainer extends React.Component {

  state = {
    profileCreated: false,
    relaxationCategoriesChosen: false,
    initialToDosCreated: false
  }

  componentDidUpdate() {
    if (this.props.user.id && this.state.profileCreated === false) {
      return this.setState({profileCreated: true})
    } else if (this.props.user.id && this.props.relaxationCategories.length > 0 && this.state.relaxationCategoriesChosen === false){
      return this.setState({relaxationCategoriesChosen: true})
    } else if (this.props.user.id && this.props.tasks.length > 0 && this.state.initialToDosCreated === false){
      return this.setState({initialToDosCreated: true})
    }
  }

  handleLoading = () => {
    if(this.props.loading === true) {
      return <div>Loading...</div>
    } else {
      return <Tasks tasks={this.props.tasks} />
    }
  }

  handleToggleAddTaskForm = () => {
    console.log("I don't do anything")
  }

  render() {
    return (
      <div>
        <Link to='/' >
          <button className="buttons back-buttons">⬅</button>
        </Link>
        <img src={require("../images/background-bottom-left.png")} alt='' id="background-bottom-left" />
        <img src={require("../images/background-top-right.png")} alt='' id="background-top-right" />
        <div className="form-containers">
          { this.state.profileCreated === false ? <SignUpForm /> : null }
          { this.state.profileCreated === true && this.state.relaxationCategoriesChosen === false ? <ChooseRelaxationCategories /> : null }
          { this.state.profileCreated === true && this.state.relaxationCategoriesChosen === true && this.state.initialToDosCreated === false ?
            <div>           
                <CreateTaskForm id="create-task-form" handleToggleAddTaskForm={this.handleToggleAddTaskForm} />
            </div>
          : 
            null
          }
          { this.state.profileCreated === true && this.state.relaxationCategoriesChosen === true && this.state.initialToDosCreated === true ? 
            <div>
              <CreateTaskForm id="create-task-form" handleToggleAddTaskForm={this.handleToggleAddTaskForm} />
            </div>
          :
            null
          }
        </div>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    user: state.user,
    relaxationCategories: state.relaxationCategories,
    tasks: state.userTasks
  }
}

export default connect(mapStateToProps, null)(SignUpContainer);