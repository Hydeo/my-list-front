import React from 'react'

import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Button from 'material-ui/Button';

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

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
	state = { expanded: false };
	handleExpandClick = () => {
	    this.setState({ expanded: !this.state.expanded });
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

const compoStyled = withStyles(styles)(LinkCard);
export default compoStyled;