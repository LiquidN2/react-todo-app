import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ListItem = ({
  id,
  name,
  selected,
  handleDelete,
  handleSelect,
  handleUpdate,
}) => {
  const [taskName, setTaskName] = useState(name);

  const handTaskNameChange = event => {
    setTaskName(event.target.value);
  };

  const handleBlur = event => {
    const { name: taskId, value: taskUpdate } = event.target;
    if (taskUpdate.length === 0) {
      alert('Empty task will not be saved!');
    } else {
      handleUpdate(taskId, taskUpdate);
    }
  };

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      event.target.blur();
    }
  };

  const styleLabelInput = `list-group-item__label-input ${
    selected ? 'list-group-item__label-input--selected' : ''
  }`;

  return (
    <li className="list-group-item">
      <input
        className="list-group-item__checkbox"
        type="checkbox"
        id={id}
        name={id}
        onChange={handleSelect}
        checked={selected}
      />

      <input
        type="text"
        className={styleLabelInput}
        id={id}
        name={id}
        value={taskName}
        onBlur={handleBlur}
        onChange={handTaskNameChange}
        onKeyPress={handleKeyPress}
        minLength="1"
        maxLength="40"
      />

      <div className="list-group-item__remove" onClick={handleDelete}>
        <i className="fas fa-times" />
      </div>
    </li>
  );
};

ListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  selected: PropTypes.bool,
  handleDelete: PropTypes.func,
  handleSelect: PropTypes.func,
  handleUpdate: PropTypes.func,
};

export default ListItem;
