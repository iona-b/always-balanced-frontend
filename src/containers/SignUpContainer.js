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

  render() {
    return (
      <div className="form-containers">
        { this.state.profileCreated === false ? <SignUpForm /> : null }
        { this.state.profileCreated === true && this.state.relaxationCategoriesChosen === false ? <ChooseRelaxationCategories /> : null }
        { this.state.profileCreated === true && this.state.relaxationCategoriesChosen === true && this.state.initialToDosCreated === false ?
          <div>           
              <CreateTaskForm id="create-task-form" />
              <div id="task-list">{this.handleLoading()}</div>
          </div>
        : 
          null
        }
        { this.state.profileCreated === true && this.state.relaxationCategoriesChosen === true && this.state.initialToDosCreated === true ? 
          <div>
            <CreateTaskForm id="create-task-form" />
            <div id="task-list">{this.handleLoading()}</div>
            <Link to='/' >
                <button>Go to Home</button>
            </Link>
          </div>
        :
          null
        }
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    user: state.user,
    relaxationCategories: state.relaxationCategories,
    tasks: state.userTasks,
    loading: state.loading
  }
}

export default connect(mapStateToProps, null)(SignUpContainer);