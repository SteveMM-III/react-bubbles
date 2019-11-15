import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';

class Login extends React.Component {
  state = {
    credentials: {
      username: 'Lambda School',
      password: 'i<3Lambd4'
    }
  };

  handleChange = e => {
    this.setState( {
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    } );
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.dispatch( login( this.state.credentials.username, this.state.credentials.password ) )
    this.props.history.push( '/protected' );
  };

  render() {
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <input
            type="text"
            name="username"
            placeholder='username'
            value={ this.state.credentials.username }
            onChange={ this.handleChange }
          />
          <input
            type="password"
            name="password"
            placeholder='password'
            value={ this.state.credentials.password }
            onChange={ this.handleChange }
          />
          <button>Log in</button>
        </form>
      </div>
    );
  }
}

export default connect ( state => state )( Login );
