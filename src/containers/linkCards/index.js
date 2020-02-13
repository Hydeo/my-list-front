import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {  Link } from 'react-router-dom'
import {
	update_isotope,
	delete_link,
	upvote
} from '../../actions/basic_actions'
import {conf_dev} from '../../config';
import Utils from '../../modules/utils.js'
import classnames from 'classnames';
import LazyLoad from 'react-lazyload';
import dice_spinner from "../../medias/spinner_dice.gif";
import pic_404 from "../../medias/404.jpg";


import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Delete from '@material-ui/icons/Delete';
import LinkIcon from '@material-ui/icons/Link';
import ThumbUp from '@material-ui/icons/ThumbUp';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ( {
  card: {
    marginBottom: "15px"
  },
  media: {
    height: 0,
    //paddingTop: '46.25%', // 16:9
    paddingTop: '100%', // 16:9
    backgroundSize: "contain",
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
  loadingBackgound: {
  	backgroundSize : "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundImage: "url("+dice_spinner+")",
  },
});


class LinkCard extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			expanded: false,
			vote : this.props.link_data.vote != null ? this.props.link_data.vote : 0 
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
		if(link_data.image == null || link_data.image == undefined || !link_data.image.includes("http"))
			link_data.image=pic_404;
	            			
		return (
		<div className={" link_item "} nb-vote={this.state.vote} style={this.props.cardSize}>
	      <Card className={classes.card}>
	      	<LazyLoad  className="qzd" offset={0}>
	      		<div>
		      		<a target="_blank" href={link_data.url}>
				        <CardMedia
				          className={classes.media +' '+classes.loadingBackgound}
				          image={link_data.image}
				          title={link_data.title}
				        />
				    </a>
		        </div>		
	        </LazyLoad>
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
	        	<IconButton onClick={()=>{this.props.update({title:"Delete '"+link_data.title+"' ?",description:"Url : "+link_data.url, open:true, agree_callback : ()=>{this.props.delete_link(link_data.id)}});}}>
              		<Delete color="error"/>
            	</IconButton>


	            <a className={classes.marginAuto}>
	            	<IconButton  color="primary" onClick={()=>{
	            		this.setState({vote : this.state.vote+1})
	            		this.props.upvote(link_data.id)}}>
			        	<ThumbUp/>
			        	<Typography gutterBottom variant="headline" component="h2">
			        	
	            			{this.state.vote == null ? 0 : this.state.vote}
	            		
	          			</Typography>
			        </IconButton>
			        
		        </a>
		        
		        
            	<IconButton
	              className={classnames(classes.expand,classes.marginAuto, {
	                [classes.expandOpen]: this.state.expanded,
	              })}
	              onClick={this.handleExpandClick}
	              aria-expanded={this.state.expanded}
	              aria-label="Show more"
	            >
              		<ExpandMoreIcon />
            	</IconButton>

	        </CardActions>
	      </Card>
	    </div>
		)
	}

	componentDidUpdate = ()=>{
		console.log("link updated");
	}

}


//On recupere la tate dans les props
const mapStateToProps = state =>({
	isotope_instance : state.bim.isotope_instance,
	links : state.bim.links
})


const mapDispatchToProps = dispatch => bindActionCreators({
  update_isotope,
  delete_link,
  upvote
}, dispatch)

const compoStyled = withStyles(styles)(LinkCard);
export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(compoStyled)
