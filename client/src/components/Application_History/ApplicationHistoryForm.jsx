import React from 'react';

export default class ApplicationHistoryForm extends React.Component {
  constructor(props) {
    super(props);
  }

  historyFormDisplay() {
    return (
      <div>
        <h4>Application Information:</h4>
        <form className="ui-form">
          <label>Company's Name</label>
          <div className="app-field">
            <textarea className="company-name" placeholder="Company's Name"></textarea>
          </div>
          <label>Position's Title</label>
          <div className="app-field">
            <textarea className="position-name" placeholder="Position's Title"></textarea>
          </div>
          <label>Company's Location</label>
          <div className="app-field">
            <textarea className="location-name" placeholder="Company's Location"></textarea>
          </div>
          <label>Date Applied</label>
          <div className="app-field">
            <input className="date-name" type="date"></input>
          </div>
        </form>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.historyFormDisplay()}
        <div className="button-container">
          <button className="ui-button-cancel" tabIndex="0">Cancel</button>
          <button className="ui-button-confirm" tabIndex="1">Confirm</button>
        </div>
      </div>
    )
  }
}