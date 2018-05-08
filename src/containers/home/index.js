
import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
	test_action_action
} from '../../actions/basic_actions'

import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';



const style = {
  height: 0,
  paddingTop: '46.25%'
};

const card =  {
    maxWidth: 345,
  };


const Home = props => (
  <div>
    <h1>Home</h1>
    <p>Welcome home!</p>
    <button onClick={() => props.changePage()}>Go to about page via redux</button>

    <button onClick={props.test_action_action}>ACTION!!</button>

    <p>Action count : {props.test_action}</p>
    <p>Snapdragon : {props.snapdragon.toString()}</p>


    {
    	props.links.map((link,index)=>(
		    <div style = {{width:"350px"}}>
		      <Card style={card}>
		        <CardMedia
		          style = {style}
		          image={link.image}
		          title={link.title}
		        />
		        <CardContent>
		          <Typography gutterBottom variant="headline" component="h2">
		            {link.title}
		          </Typography>
		          <Typography component="p">
		           {link.description}
		          </Typography>
		        </CardContent>
		        <CardActions>
		          <Button size="small" color="primary">
		            Share
		          </Button>
		          <Button size="small" color="primary">
		            Learn More
		          </Button>
		        </CardActions>
		      </Card>
		    </div>








    	))
    }

  </div>
)

//On recupere la tate dans les props
const mapStateToProps = state =>({
	test_action : state.bim.test_action,
	snapdragon : state.bim.snapdragon,
	links : state.bim.links
})

//On injecte les actions possible au props ?
const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/about-us'),
  test_action_action
}, dispatch)

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Home)