import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../Css/ListDesign.css';

class ProjectItem extends Component {


deleteProject(id){
	//console.log('test');
	this.props.onDelete(id);
}

  render() {
    return (
      <li className="project-list">
      	<strong>{this.props.project.title}</strong>: {this.props.project.category}<sup> <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>X</a></sup>
      </li>
    );
  }
}

ProjectItem.propTypes = {
  project: PropTypes.object,
  onDelete: PropTypes.func
}

export default ProjectItem;
