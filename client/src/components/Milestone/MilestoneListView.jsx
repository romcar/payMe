import React from 'react';
import MilestoneForm from './MilestoneForm.jsx';

export default class MilestoneListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'default',
    }
  }

  projectDisplayView() {
    return (
      <div>
        <div className="name-header">
          <h5>Project's Name</h5>
        </div>
        <div className="project-display-description-container">
          <div className="project-display-description">
            This application helps user negotiate their salary!
          </div>
        </div>
      </div>
    )
  }

  techStackDisplayView() {
    return (
      <div>
        <div className="name-header">
          <h5>Tech Stack</h5>
        </div>
        <div className="stack-display-description-container">
          <div className="stack-display-description">
            JavaScript, ReactJS, mySQL, SemanticUI, Google.
          </div>
        </div>
      </div>
    )
  }

  repositoryLinkDisplay() {
    return (
      <div>
        <div className="name-header">
          <h5>Repository</h5>
        </div>
        <div className="respository-display-description-container">
          <div className="repository-display-description">
            www.github.com/SirGitchardHubbard
          </div>
        </div>
      </div>
    )
  }

  dateDisplay() {
    return (
      <div>
        <div className="name-header">
          <h5>Completed On: </h5>
        </div>
        <div className="date-display-container">
          <span className="date-display">
            1/1/2018
          </span>
        </div>
      </div>
    )
  }

  //this function will invoke our state change
  formUpdate() {
    return (
      <div className="edit-button-container">
        <button className="ui-button-edit" tabIndex="0" onClick={() => {this.displayChanger()}}>Update</button>
      </div>
    )
  }

  milestoneDisplayView() {
    return (
      <div>
        <div className="title-header">
          <h4>Milestones and Achievements</h4>
        </div>
        {this.projectDisplayView()}
        {this.techStackDisplayView()}
        {this.repositoryLinkDisplay()}
        {this.dateDisplay()}
        {this.formUpdate()}
      </div>
    )
  }

  //this function will change the state from default to form
  displayChanger() {
    this.setState({
      display: 'form',
    })
  }

  //this function will render the default view or editable form depending on the state
  milestoneFormView() {
    const {display} = this.state;
    if (display === 'default') {
      return (
        <div>
          {this.milestoneDisplayView()}
        </div>
      )
    } else if (display === 'form') {
      return (
        <div>
          <MilestoneForm currentFormState={this.state}/>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        {this.milestoneFormView()}
      </div>
    )
  }
}