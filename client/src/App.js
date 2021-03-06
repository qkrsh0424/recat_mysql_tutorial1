import React, { Component }from 'react';
import './App.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import Customer from './Components/Customer';

const styles = theme => ({
  root:{
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  },
  progress: {
    margin: theme.spacing.unit * 2,
  }
})

// const customerdata = [
//   {
//     'id':1,
//     'image':"https://placeimg.com/64/64/1",
//     'name':'sehoon',
//     'birthday':'940424',
//     'gender':'male',
//     'job':'student'
//   },
//   {
//     'id':2,
//     'image':"https://placeimg.com/64/64/2",
//     'name':'binhee',
//     'birthday':'950110',
//     'gender':'female',
//     'job':'student'
//   },
//   {
//     'id':3,
//     'image':"https://placeimg.com/64/64/3",
//     'name':'john',
//     'birthday':'970424',
//     'gender':'male',
//     'job':'student'
//   }
// ]
class App extends Component{
  state = {
    customer: ""
  }

  componentDidMount(){
    this.callApi()
    .then(res => this.setState({customers: res}))
    .catch(err => console.log(err))
  }

  callApi = async() => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  render(){
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableCell>No.</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Birth.</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Job</TableCell>
          </TableHead>
          <TableBody>
            {
              this.state.customers ? this.state.customers.map(c=> {
                return(
                  <Customer
                    key={c.id}
                    id={c.id}
                    image={c.image}
                    name={c.name}
                    birthday={c.birthday}
                    gender={c.gender}
                    job={c.job}
                  />
                );
              }) : <TableCell colspan="6" align="center"><CircularProgress className={classes.progress} /></TableCell>
            }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
