import React from 'react';
import { connect } from 'react-redux';
import { fetchRelaxationCategories } from '../actions/fetchRelaxationCategories'
import { addUserRelaxationCategory } from '../actions/addUserRelaxationCategory'

class ChooseRelaxationCategories extends React.Component {

    state = {
        relaxationCategory1: '',
        relaxationCategory2: '',
        relaxationCategory3: ''
    };
    
    componentDidMount() {
      this.props.fetchRelaxationCategories()
    }

    componentDidUpdate() {
      if (this.props.relaxationCategories.length>2 && this.state.relaxationCategory1 === '' && this.state.relaxationCategory2 === '' && this.state.relaxationCategory3 === '') {
        this.setState({
          relaxationCategory1: this.props.relaxationCategories[0].category_name,
          relaxationCategory2: this.props.relaxationCategories[0].category_name,
          relaxationCategory3: this.props.relaxationCategories[0].category_name
        })
      }
    }
     
    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
    };
     
    handleSubmit = () => {
      let relaxationCategory1 = this.props.relaxationCategories.filter(category => category.category_name === this.state.relaxationCategory1)[0]
      let relaxationCategory2 = this.props.relaxationCategories.filter(category => category.category_name === this.state.relaxationCategory2)[0]
      let relaxationCategory3 = this.props.relaxationCategories.filter(category => category.category_name === this.state.relaxationCategory3)[0]
      this.props.addUserRelaxationCategory(this.props.user.id, relaxationCategory1)
      this.props.addUserRelaxationCategory(this.props.user.id, relaxationCategory2)
      this.props.addUserRelaxationCategory(this.props.user.id, relaxationCategory3)
    };


    render() {
        return (
            <div className="choose-relaxation-categories-form">
              <h2 className="form-headers">Select 3 Relaxation Categories</h2>
              <p>In order to help us create a schedule which truly suits your needs, please let us know what type of activities help you relax.</p>
              <select name="relaxationCategory1" onChange={this.handleChange}>{this.props.relaxationCategories.map(relaxationCategory => <option key={relaxationCategory.id}>{relaxationCategory.category_name}</option>)}</select><br></br>
              <select name="relaxationCategory2" onChange={this.handleChange}>{this.props.relaxationCategories.map(relaxationCategory => <option key={relaxationCategory.id}>{relaxationCategory.category_name}</option>)}</select><br></br>
              <select name="relaxationCategory3" onChange={this.handleChange}>{this.props.relaxationCategories.map(relaxationCategory => <option key={relaxationCategory.id}>{relaxationCategory.category_name}</option>)}</select><br></br>
              <button onClick={this.handleSubmit}>Confirm Relaxation Categories</button>
            </div>
          );
    }
  
}

const mapStateToProps = state => {
  return {
    user: state.user,
    relaxationCategories: state.allRelaxationCategories
  }
}
 
const mapDispatchToProps = dispatch => {
  return {
    fetchRelaxationCategories: (userId, relaxationCategoryId) => dispatch(fetchRelaxationCategories(userId, relaxationCategoryId)),
    addUserRelaxationCategory: (userId, relaxationCategoryId) => dispatch(addUserRelaxationCategory(userId, relaxationCategoryId)),
  };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(ChooseRelaxationCategories);