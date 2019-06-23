import { connect } from 'react-redux';
import Login from '../components/Login';
import { login } from '../modules/AuthAction';

const mapStateToProps = (state, ownProps) => ({
  error: state.auth.error
});

const mapDispatchToProps = dispatch => ({
  login(username, password) {
    dispatch(login(username, password));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);