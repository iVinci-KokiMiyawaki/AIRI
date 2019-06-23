import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard';
import { logoutAndRedirect } from '../modules/AuthAction';
import { getMe, getList } from '../modules/UserAction';

const mapStateToProps = (state, ownProps) => ({
  me: state.user.me,
  users: state.user.users,
});

const mapDispatchToProps = dispatch => ({
  onMount() {
    dispatch(getMe());
  },
  getUserList() {
    dispatch(getList());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);