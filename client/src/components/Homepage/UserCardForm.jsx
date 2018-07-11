
import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Form, Modal } from 'semantic-ui-react';
import { setAppliedRoles } from '../../store/actions/userActions';

export class UserCardForm extends React.Component {
  constructor(props) {
    super(props);
    const { first_name, last_name, profile_pic, active_role } = this.props.user;
    this.state = {
      first_name: first_name,
      last_name: last_name,
      profile_pic: profile_pic,
      active_role: active_role,
    };
    this.handleChange = this.handleChange.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    // this.handleGetAppliedRoles((data) => {
    //   this.props.setAppliedRoles(data);
    // });
    const { first_name, last_name, profile_pic, active_role } = this.props.user;
    this.setState({
      first_name: first_name,
      last_name: last_name,
      profile_pic: profile_pic,
      active_role: active_role,
    })
  }

  handleChange(e) {
    const { name, value } = e.target;
    e.preventDefault();

    this.setState({
      [name]: value,
    });
  }

  // handleGetAppliedRoles(callback) {
  //   const { id } = this.props.session.user;
  //   axios.get(`/api/roles?user_id=${id}`).then((res) => {
  //     callback(res.data);
  //   })
  //     .catch(err => console.error(err));
  // }

  // handleSubmit(event) {
  //   const { id } = this.props.session.user;
  //   const { firstName, lastName, profilePic, activeRole } = this.state;
  //   event.preventDefault();

  //   axios.patch((`/api/user?id=${id}`), {
  //     first_name: firstName,
  //     last_name: lastName,
  //     profilePic,
  //     activeRole,
  //   })
  //     .then((response) => {
  //       console.log(response);
  //     });
  // }

  handleClearField() {
    this.setState({
      first_name: '',
      last_name: '',
      profile_pic: '',
      active_role: '',
    });
  }

  render() {
    // console.log('is it reaching', this.props)
    // console.log('reached state', this.state)
    console.log('THIS IS THE USER ID', this.props.user.id)
    console.log('wah ==>', this.props)
    console.log('dnfdnfkdjfkldjfklj', this.state);
    const {
      first_name, last_name, profile_pic
    } = this.state;
    const style = {
      top: '10%',
    };

    return (
      <div>
        <Modal
          style={style}
          trigger={(
          <i className="edit icon"  onClick={this.componentDidMount} />
          )}
        >
        <Modal.Header>
          {'Update Your Profile!'}
        </Modal.Header>
          <Form raised="true" className="ui teal segment">
            <Modal.Content>
            <div className="field">
            <div className="left aligned segment" style={{ fontWeight: 'bold' }}>
              Full Name
            </div>
            <div className="inline fields">
              <div className="field">
                <input
                  type="text"
                  placeholder="First Name"
                  name="first_name"
                  value={first_name}
                  onChange={this.handleChange}
                />
              </div>
              <div className="field">
                <input
                  type="text"
                  placeholder="Last Name"
                  name="last_name"
                  value={last_name}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            </div>
              <div className="field">
                <label style={{ fontWeight: 'bold' }}>
                  {'Profile picture: '}
                </label>
                <div className="field">
                  <input
                    type="text"
                    value={profile_pic}
                    name="profile_pic"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="field">
                <label style={{ fontWeight: 'bold' }}>
                  {'Active role: '}
                </label>
                <div className="field">
                  <select id="applied-roles" name="active_role" style={{ 'width': '100%' }} onChange={this.handleChange}>
                    <option key="default" value="" selected>
                      Select role
                    </option>
                    {this.props.roles ? this.props.roles.map((role, index) => {
                      if (this.props.session.user.active_role !== null
                        && this.props.session.user.active_role[0].id === role.id) {
                        return (
                          <option
                            key={index}
                            value={role.id}
                            selected
                          >
                            {`${role.name} at ${role.company.name}`}
                          </option>
                        );
                      }
                      return (
                        <option
                          key={index}
                          value={role.id}
                        >
                          {`${role.name} at ${role.company.name}`}
                        </option>);
                    }) : undefined}
                  </select>
                </div>
              </div>
              <div className="ui two bottom attached buttons">
                <Button className="ui-button-cancel" onClick={this.handleClearField}>
                  Cancel
                </Button>
                <Button
                  className="ui-button-confirm"
                  color="teal"
                  onClick={() => {
                    this.props.update(this.props.user.id, this.state)
                  }}
                >
                  Confirm
                </Button>
              </div>
            </Modal.Content>
          </Form>
        </Modal>

      </div>

      // <div className="ui teal card">
      //   <h4 className="ui dividing header left aligned segment">
      //     Edit User's Profile
      //   </h4>
      //   <Form className="ui-form" onSubmit={this.handleSubmit}>
          // <div className="field">
          //   <div className="left aligned segment" style={{ fontWeight: 'bold' }}>
          //     Full Name
          //   </div>
          //   <div className="inline fields">
          //     <div className="field">
          //       <input
          //         type="text"
          //         placeholder="First Name"
          //         name="firstName"
          //         value={firstName}
          //         onChange={this.handleChange}
          //       />
          //     </div>
          //     <div className="field">
          //       <input
          //         type="text"
          //         placeholder="Last Name"
          //         name="lastName"
          //         value={lastName}
          //         onChange={this.handleChange}
          //       />
          //     </div>
          //   </div>
          // </div>
          // <div className="field">
          //   <label style={{ fontWeight: 'bold' }}>
          //     {'Profile picture: '}
          //   </label>
          //   <div className="field">
          //     <input
          //       type="text"
          //       value={profilePic}
          //       name="profilePic"
          //       onChange={this.handleChange}
          //     />
          //   </div>
          // </div>
          // <div className="field">
          //   <label style={{ fontWeight: 'bold' }}>
          //     {'Active role: '}
          //   </label>
          //   <div className="field">
          //     <select id="applied-roles" name="activeRole" style={{ 'width': '100%' }} onChange={this.handleChange}>
          //       <option key="default" value="" selected>
          //         Select role
          //       </option>
          //       {this.props.session.roles ? this.props.session.roles.map((role, index) => {
          //         if (this.props.session.user.active_role !== null
          //           && this.props.session.user.active_role[0].id === role.id) {
          //           return (
          //             <option
          //               key={index}
          //               value={role.id}
          //               selected
          //             >
          //               {`${role.name} at ${role.company.name}`}
          //             </option>
          //           );
          //         }
          //         return (
          //           <option
          //             key={index}
          //             value={role.id}
          //           >
          //             {`${role.name} at ${role.company.name}`}
          //           </option>);
          //       }) : undefined}
          //     </select>
          //   </div>
          // </div>
          // <div className="ui two bottom attached buttons">
          //   <Button className="ui-button-cancel" onClick={this.handleClearField}>
          //     Cancel
          //   </Button>
          //   <Button className="ui-button-confirm" color="teal">
          //     Confirm
          //   </Button>
          // </div>
      //   </Form>
      // </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('EWWWWWWWWW', state);

  return { session: state.user };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setAppliedRoles
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(UserCardForm);
