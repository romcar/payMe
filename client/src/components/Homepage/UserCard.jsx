import React from 'react';
import axios from 'axios';

import UserCardForm from './UserCardForm';

export default class UserCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    // this.handleUserCardUpdate = this.handleUserCardUpdate.bind(this);
    // this.handleGetAppliedRoles = this.handleGetAppliedRoles.bind(this);
    // this.handleGetUserInformation = this.handleGetUserInformation.bind(this);
    // this.componentDidMount = this.componentDidMount.bind(this);
  }

  // // this function will change the state to form display
  // handleFormViewSwitch() {
  //   const { display } = this.state;
  //   this.setState({ display });
  // }

  // handleViewChecker() {
  //   const { display } = this.state;
  //   if (display === true) {
  //     return (
  //       <div>
  //         <UserCardForm {...this.props} />
  //       </div>
  //     );
  //   }
  //   return null;
  // }

  // componentDidMount() {
  //   this.handleGetUserInformation((res) => {
  //     this.setState({ currentUser: res })
  //   })
  //   this.handleGetAppliedRoles((res) => {
  //     this.setState({ currentRoles: res })
  //   })
  // }

  // handleGetAppliedRoles(callback) {
  //   const { id } = this.props.session.user;
  //   axios.get(`/api/roles?user_id=${id}`).then((res) => {
  //     callback(res.data);
  //   })
  //     .catch(err => console.error(err));
  // }

  // handleGetUserInformation(callback) {
  //   const { id } = this.props.session.user;
  //   axios.get(`api/user?id=${id}`).then((res) => {
  //     callback(res.data);
  //   })
  //     .catch(err => console.error(err));
  // }

  // handleUserCardUpdate(id, query) {
  //   axios.patch((`/api/user?id=${id}`), query)
  //     .then((res) => {
  //       this.handleGetAppliedRoles((data) => {
  //         this.setState({ currentRoles: data });
  //       });
  //     })
  //     .then((res) => {
  //       this.handleGetUserInformation((data) => {
  //         this.setState({ currentUser: data });
  //       });
  //     });
  // }

  // handleDisplayRoles() {
  //   let temp = '';

  //   for (let i = 0; i < this.props.roles.length; i++) {
  //     if (this.props.roles[i].id === this.props.user.active_role) {
  //       temp = `${this.props.roles[i].name} at ${this.props.roles[i].company.name}`;
  //     }
  //   }
  //   return temp;
  // }

  render() {
    const { user } = this.props;
    if (!user) {
      return (
        <div />
      );
    }
    console.log('NEGA' ,this.props)
    console.log('ahhhhHHHH',user)
    return (
      <div className="ui teal card">
       <div className="image">
         <img src={user.profile_pic} alt=""/>
       </div>
       <div className="content wrap line">
         <a>
           {`${user.first_name} ${user.last_name}`}
         </a>
         <div className="meta">
           <span className="description">
             {this.props.session.user.active_role ? `${this.props.session.user.active_role[0].name} at ${this.props.session.user.active_role[0].company.name}`: undefined}
           </span>
         </div>
       </div>
       <div className="extra content wrap line">
         <a>
           <div data-tooltip="Email wrap line">
             <i className="envelope icon" />
             {user.email}
           </div>
           <br />
         </a>
         <a>
           <div data-tooltip="Current Salary wrap line">
             <i className="dollar sign icon" />
             {user.current_salary}
           </div>
         </a>
         <a>
           <div>
             <UserCardForm
               update={this.props.update} user={this.props.user} roles={this.props.roles}
             />
           </div>
         </a>
       </div>
      </div>
    );
  }
}
