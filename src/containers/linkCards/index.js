import React from 'react'

import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    maxWidth: "300px"
  },
  media: {
    height: 0,
    paddingTop: '46.25%', // 16:9
  },
};


class LinkCard extends React.Component{
	render(){
		console.log(this.props);
		const { classes, link_data} = this.props;
		
		return (
		<div className="link_item">
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
	          <Typography component="p">
	            {link_data.description}
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
		)
	}
}

const compoStyled = withStyles(styles)(LinkCard);
export default compoStyled;