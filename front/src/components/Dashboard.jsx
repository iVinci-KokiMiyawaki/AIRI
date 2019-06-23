import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


import Header from './Header';
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  paper: {
    width: '50%',
    margin: '0 auto',
    minWidth: 300,
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
});

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.onMount();
    this.props.getUserList();
  }
  render() {
    const { classes, me, users } = this.props;

    const list = Object.keys(users).length !== 0 ? users : [1,2,3];
    return (
      <div>
        <Header menu="ログアウト" onClick={this.props.logout}/>
        <Paper className={classes.paper} elevation={1}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>id</TableCell>
                <TableCell>nickname</TableCell>
                <TableCell>name</TableCell>
                <TableCell>birthday</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {list.map(row => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">{row.id}</TableCell>
                  <TableCell >{row.nickname}</TableCell>
                  <TableCell >{row.name}</TableCell>
                  <TableCell >{row.birthday}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}


export default withStyles(styles)(Dashboard);