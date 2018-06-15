import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {  Link } from 'react-router-dom'
import {
	update_isotope
} from '../../actions/basic_actions'
import {conf_dev} from '../../config';
import {getTypeSizeScreen, calculateIsotopeItemWidth} from '../../utils'
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LinkIcon from '@material-ui/icons/Link';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ( {
  card: {
    marginBottom: "15px"
  },
  media: {
    height: 0,
    paddingTop: '46.25%', // 16:9
  },
   expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    })
  },
  marginAuto : {
  	marginLeft: 'auto'
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
});


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
	        <Collapse in={this.state.expanded} onExited={()=>{this.update_isotope_layout()}} onEntered={()=>{this.update_isotope_layout()}} timeout="auto" unmountOnExit>
		        <CardContent>
		          <Typography component="p">
		            {link_data.description}
		          </Typography>
		        </CardContent>
		    </Collapse>
	        <CardActions>
		        <IconButton
	              className={classnames(classes.expand, {
	                [classes.expandOpen]: this.state.expanded,
	              })}
	              onClick={this.handleExpandClick}
	              aria-expanded={this.state.expanded}
	              aria-label="Show more"
	            >
              		<ExpandMoreIcon />
            	</IconButton>
            	<a className={classes.marginAuto} target="_blank" href={link_data.url}>
	            	<IconButton  color="primary">
			        	<LinkIcon/>
			        </IconButton>
		        </a>
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
