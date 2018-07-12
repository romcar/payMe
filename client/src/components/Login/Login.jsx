import React from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';
import {
  Button, Form, Grid, Header, Message, Segment,
} from 'semantic-ui-react';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { setSession, removeSession } from '../../store/actions/userActions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // removes the session as login is mounting.
  componentDidMount () {
    this.props.removeSession({});
  }

  // handles a change in the input fields
  handleChange(e) {
    e.preventDefault();
    const { name }  = e.target;
    const { value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleClick(e) {
    e.preventDefault();
    // makes an axios request to verify credentials
    axios.post('/api/login', this.state).then((response) => {
      const { history } = this.props;

      // uses a redux action to set the new session data
      this.props.setSession(response.data);
      // reset state
      this.setState({
        email: '',
        password: '',
      });
      // if successful redirect to home page.
      history.push('/');
    }).catch((err) => {
      console.error(err, '!!!!');
      $('#message').text(err.response.data.error);
      setTimeout(() => {
        $('#message').text('Please log in!');
      }, 1500);
    });
  }

  render() {
    return (
      <div>
        <div className="login-form">
          <style>
            {`
            body > div,
            body > div > div,
            body > div > div > div.login-form {
              height: 100%;
            }
            `}
          </style>
          <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as="h2" id="message" color="teal" textAlign="center">
                Please log in!
              </Header>
              <Form size="large">
                <Segment raised>
                  <Form.Input onChange={this.handleChange} name="email" fluid icon="user" iconPosition="left" placeholder="E-mail address" />
                  <Form.Input
                    onChange={this.handleChange}
                    name="password"
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="Password"
                    type="password"
                  />
                  <Button onClick={this.handleClick} color="teal" fluid size="large">
                    Login
                  </Button>
                </Segment>
              </Form>
                <Segment raised>
                  <Message>
                    {'New User? '}
                    <a href="/signup">
                      Sign Up to Get That Bonus!
                    </a>
                  </Message>
                </Segment>
            </Grid.Column>
          </Grid>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { session: state.user };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setSession,
    removeSession,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
