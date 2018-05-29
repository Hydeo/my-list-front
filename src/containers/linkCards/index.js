import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
	update_isotope
} from '../../actions/basic_actions'
import {conf_dev} from '../../config';
import {getTypeSizeScreen, calculateIsotopeItemWidth} from '../../utils'

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = {
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
			expanded: false,
			card_size : {
				width : calculateIsotopeItemWidth(conf_dev.isotope_nb_item[getTypeSizeScreen(conf_dev.breakpoints,window.screen.width)],3)+"%"
			}
		}
	}

	handleExpandClick = () => {
	    this.setState({ 
	    	expanded: !this.state.expanded 
	    });
	};

	update_isotope_layout = ()=>{
		this.props.isotope_instance.layout();
	}


	render(){
		const {classes, link_data} = this.props;
		return (
		<div className={" link_item "} style={this.props.cardSize}>
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
	        <Collapse in={this.state.expanded} onExited={()=>{this.update_isotope_layout();console.log("Transition ended")}} onEntered={()=>{this.update_isotope_layout();console.log("Transition Entered")}} timeout="auto" unmountOnExit>
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

	componentDidUpdate = ()=>{
	}

}


//On recupere la tate dans les props
const mapStateToProps = state =>({
	isotope_instance : state.bim.isotope_instance
})


const mapDispatchToProps = dispatch => bindActionCreators({
  update_isotope
}, dispatch)

const compoStyled = withStyles(styles)(LinkCard);
export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(compoStyled)
