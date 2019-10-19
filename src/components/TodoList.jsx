import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  setTasks,
  selectTask,
  selectAllTasks,
  updateTask,
  deleteTask,
  deleteSelectedTasks,
} from '../actions/taskActions';

import ListItem from './ListItem';

class TodoList extends Component {
  componentDidMount() {
    const existingTasks = JSON.parse(localStorage.getItem('tasks'));
    this.props.setTasks(existingTasks);
  }

  componentDidUpdate() {
    localStorage.setItem('tasks', JSON.stringify(this.props.tasks));
  }

  componentWillUnmount() {
    localStorage.setItem('tasks', JSON.stringify(this.props.tasks));
  }

  handleSelect = event => {
    const { name, checked } = event.target;
    this.props.selectTask(name, checked);
  };

  handleSelectAll = event => {
    this.props.selectAllTasks(event.target.checked);
  };

  render() {
    const { tasks, deleteTask, deleteSelectedTasks, updateTask } = this.props;

    return (
      <Fragment>
        {tasks.length > 0 ? (
          <div className="task-list-header ma-top-md">
            <div className="form-check form-check--aligned">
              <input
                type="checkbox"
                className="form-check-input"
                id="allTasks"
                name="allTasks"
                onChange={this.handleSelectAll}
              />
              <label className="form-check-label" htmlFor="allTasks">
                Select all
              </label>
            </div>
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={deleteSelectedTasks}
            >
              <i className="fas fa-trash"></i>
            </button>
          </div>
        ) : null}

        <ul className="list-group ma-top-sm">
          {tasks.map(({ id, name, selected }) => (
            <ListItem
              key={id}
              id={id}
              name={name}
              selected={selected}
              handleSelect={this.handleSelect}
              handleDelete={() => deleteTask(id)}
              handleUpdate={updateTask}
            />
          ))}
        </ul>
      </Fragment>
    );
  }
}

TodoList.propTypes = {
  tasks: PropTypes.array,
  setTasks: PropTypes.func,
  selectTask: PropTypes.func,
  selectAllTasks: PropTypes.func,
  updateTask: PropTypes.func,
  deleteTask: PropTypes.func,
  deleteSelectedTasks: PropTypes.func,
};

const mapStateToProps = state => ({
  tasks: state.tasks,
});

const mapDispatchToProps = dispatch => ({
  setTasks: tasks => dispatch(setTasks(tasks)),
  selectTask: (taskId, selected) => dispatch(selectTask(taskId, selected)),
  selectAllTasks: selected => dispatch(selectAllTasks(selected)),
  updateTask: (taskId, taskUpdate) => dispatch(updateTask(taskId, taskUpdate)),
  deleteTask: taskId => dispatch(deleteTask(taskId)),
  deleteSelectedTasks: () => dispatch(deleteSelectedTasks()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
