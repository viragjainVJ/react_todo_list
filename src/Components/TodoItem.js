import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../Css/ListDesign.css';

class TodoItem extends Component {


  render() {
    return (
      <li className='project-list todo-list'>
      	<strong>{this.props.todo.title}</strong>
      </li>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object,
}

export default TodoItem;
