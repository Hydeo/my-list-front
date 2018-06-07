import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {set_user} from '../../actions/user_actions'

import Input from '@material-ui/core/Input';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    minWidth: 100,
    padding : 5
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class UserIdentification extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			user_name : ""
		}
	}

	handleChange = (event) =>{
		this.setState({user_name : event.target.value})
	}

	render(){
		const { classes } = this.props;		
		console.log(this.props);
		return(
			<div>
				<h1>
					Prop : '{this.props.user_name}'
				</h1>
				<h1>
					This : '{this.state.user_name}'
				</h1>
				<h1>
					Storage : '{localStorage.getItem('user_name')}'
				</h1>

				<Input id="name-simple"  placeholder="User Name" value={this.state.user_name} onChange={this.handleChange} />
              	<Button variant="fab" mini onClick={()=>{this.props.set_user(this.state.user_name)}} color="secondary" aria-label="edit">
                    <Icon>send</Icon>
              	</Button> 

              	<Grid container className={classes.root} spacing={16}>
             		<Grid item xs={12}>
						<Grid container className={classes.demo} justify="center" spacing={16}>
             					{this.props.user_list.map(list_name => (
	             						<Grid key={list_name} item>
	             								<Paper className={classes.paper}>
	             									<Typography variant="headline" component="h3" align="center">
											          {list_name}
											        </Typography>
	             								</Paper>
	             						</Grid>
             						))
             					}
             			</Grid>
             		</Grid>

              	</Grid>
			</div>
		)	
	}
}


const mapStateToProps = state =>({
  user_name : state.user.user_name,
  user_list : state.user.user_list
})

//On injecte les actions possible au props ?
const mapDispatchToProps = dispatch => bindActionCreators({
 set_user
}, dispatch)


export default withStyles(styles)(connect(
	  mapStateToProps, 
	  mapDispatchToProps
	)(UserIdentification)
);
