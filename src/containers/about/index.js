import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import {set_user} from '../../actions/user_actions'

import Home from '../home'

import Input from '@material-ui/core/Input';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormControl';

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
  center:{
  	textAlign : "center"
  },
  gutter:{
  	marginBottom : "5%" 
  },
  wordStyle : {
  	wordBreak: "break-word"
  },
  formControl : {
  	    flexDirection: "unset"
  },
  formControlTextHelper : {
  	    flexDirection: "column"
  }
});

class UserIdentification extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			user_name : localStorage.getItem('user_name'),
			new_list_name : ""
		}
	}

	handleChange = (event) =>{
		this.setState({user_name : event.target.value.toLowerCase()})
	}

	handleChangeNewListName = (event) =>{
		this.setState({new_list_name : event.target.value})
	}

	render(){
		const { classes } = this.props;		
		console.log(this.props);
		return(
			<div>
				<Grid item xs={12} >
		            <Grid container justify="center" spacing={8} direction="column" alignItems="center">
		                <Grid key="1" item>
		                 <h1>Here, it's all about saving Links</h1>
		                </Grid>
		                <Grid key="2" item>
		                 <img height="150" src="https://media.giphy.com/media/144Q1gg0FkTEVG/giphy.gif" alt="Dam link, where are you?"/>
		                </Grid>
		            </Grid>
	          	</Grid>
				<Grid container className={classes.center}>
              			<Grid item xs={12}>
              				<h2>User Name</h2>
              				<p>Retrieve all list with at least one contribution by this user </p>
              			</Grid>
              			<Grid item xs={12}>
							<Input id="name-simple"  placeholder="User Name" value={this.state.user_name} onChange={this.handleChange} />
			              	<Button variant="fab" mini onClick={()=>{this.props.set_user(this.state.user_name)}} color="secondary" aria-label="edit">
			                    <Icon>send</Icon>
			              	</Button>
              			</Grid>
              	</Grid>

              	<Grid container className={classes.gutter}>
              			<Grid item xs={12}>
              			</Grid>
              	</Grid>

              	<Grid container className={classes.root} spacing={16}>
              		<Grid item xs={12}>
		              	<Grid container className={classes.center} justify="center" >
			              	<Grid item xs={12}>
	              				<h2>Create a new list</h2>
	              			</Grid>
		         			<Grid item  xs={12}>
		         				<FormControl >
			             			<Input id="new_list_name" error={this.state.user_name == ""} placeholder="List Name" value={this.state.new_list_name} onChange={this.handleChangeNewListName} />
			             			 {(this.state.user_name == "") &&
					                      <FormHelperText className={classes.formControlTextHelper} id="name-error-text">User Name must be filled</FormHelperText>
					                    }
					            </FormControl>
					            <Link to={"/" +this.props.user_name + "/" + this.state.new_list_name}>
				             			<Button disabled={this.state.user_name == ""} variant="fab" mini color="secondary" aria-label="edit">
						                    <Icon>send</Icon>
						              	</Button>
					            </Link>
			              	</Grid>
		         		</Grid>
              		</Grid>
             		<Grid item xs={12}>
						<Grid container  justify="center" spacing={16}>
             					{this.props.user_list.map(list_name => (
		             						<Grid item  xs={12} sm={6} md={4} lg={3} key={list_name}>
		             							<div className={classes.wordStyle}>
	             									<Link to={"/" +this.props.user_name + "/" + list_name}>
			             								<Paper className={classes.paper}>
			             									<Typography variant="headline" component="h3" align="center">
													          {list_name}
													        </Typography>
			             								</Paper>
						             					</Link>
			             						</div>
		             						</Grid>
             						))
             					}
             			</Grid>
             		</Grid>
              	</Grid>

              	<Grid container className={classes.gutter}>
              			<Grid item xs={12}>
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
