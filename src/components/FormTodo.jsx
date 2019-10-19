import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addTask } from '../actions/taskActions';

class FormToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
    };
  }

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.addTask(this.state.task);
    this.setState({ task: '' });
  };

  render() {
    return (
      <form
        className="form-inline form-inline--flex-end ma-top-md"
        onSubmit={this.handleFormSubmit}
      >
        <div className="form-group form-group--inline-extends">
          <input
            type="text"
            className="form-control form-control--inline-extends"
            id="task"
            name="task"
            placeholder="Enter new task (max length 40 characters)"
            value={this.state.task}
            onChange={this.handleInputChange}
            maxLength="40"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Task
        </button>
      </form>
    );
  }
}

FormToDo.propTypes = {
  addTask: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  addTask: task => dispatch(addTask(task)),
});

export default connect(
  null,
  mapDispatchToProps
)(FormToDo);
