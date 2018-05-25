import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
	update_isotope
} from '../../actions/basic_actions'

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = {
  card_size : {
  	width : "17%"
  },
  card: {
    marginBottom: "15px"
  },
  media: {
    height: 0,
    paddingTop: '46.25%', // 16:9
  },
};


class LinkCard extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			expanded: false
		}
		console.log(props)
	}

	handleExpandClick = () => {
	    this.setState({ expanded: !this.state.expanded });
	    this.props.isotopeUpdate();
	};

	render(){
		const { classes, link_data} = this.props;
		
		return (
		<div className={classes.card_size + " link_item "}>
	      <Card className={classes.card}>
	        <CardMedia
	          className={classes.media}
	          image={link_data.image}
	          title={link_data.title}
	        />
	        <CardContent>
	          <Typography gutterBottom variant="headline" component="h2">
	            {link_data.title}
	          </Typography>
	        </CardContent>
	        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
		        <CardContent>
		          <Typography component="p">
		            {link_data.description}
		          </Typography>
		        </CardContent>
		    </Collapse>
	        <CardActions>
	          <Button size="small" color="primary">
	            Share
	          </Button>
	          <Button onClick={this.handleExpandClick} size="small" color="primary">
	            Open
	          </Button>
	        </CardActions>
	      </Card>
	    </div>
		)
	}
}


const mapDispatchToProps = dispatch => bindActionCreators({
  update_isotope
}, dispatch)

const compoStyled = withStyles(styles)(LinkCard);
export default connect(
  null, 
  mapDispatchToProps
)(compoStyled)
