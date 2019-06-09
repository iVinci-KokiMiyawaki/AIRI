import { connect } from 'react-redux';
import Login from '../components/Login';

const mapStateToProps = (store, ownProps) => ({
  username: store.username,
});

const mapDispatchToProps = dispatch => ({
  loginRequest: () => {dispatch(loginRequest)},
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);