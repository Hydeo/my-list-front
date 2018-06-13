
import $ from 'jquery';
import Isotope from 'isotope-layout';
import ImagesLoaded from 'imagesloaded';

import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
	update_isotope,
	set_isotope
} from '../../actions/basic_actions'

import {conf_dev} from '../../config';
import {getTypeSizeScreen,calculateIsotopeItemWidth} from '../../utils'
import LinkCard from '../linkCards'

const class_name = "LinkList";


const link_gutter = {
    width: "3%"
  }

class LinkList extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			first_render : true,
			isotope_instance : null,
			link_size_state : {
				width : calculateIsotopeItemWidth(conf_dev.isotope_nb_item[getTypeSizeScreen(conf_dev.breakpoints,window.screen.width)],3)+"%"
			}
		}
	}

	updateDimensions = ()=>{
		if(!this.state.first_render){
			//TODO : Debounce ?
			this.setState({link_size_state : {
					width : calculateIsotopeItemWidth(conf_dev.isotope_nb_item[getTypeSizeScreen(conf_dev.breakpoints,window.screen.width)],3)+"%"
				}
			});
		}
	}

	render(){
		const {classes} = this.props;
		return(
			  <div id="link_list">
			  	<div  style={this.state.link_size_state} className="link_sizer"/>
			  	<div  style={link_gutter} className="link_gutter"/>
			    {
			    	this.props.links.map((link,index)=>(
			    		<LinkCard link_data={link} key={index} isotopeUpdate={this.update_isotope} cardSize={this.state.link_size_state}/>
			  		))
			    }
			  </div>
		)
	}


	componentDidMount = ()=>{
		console.log("--["+class_name+"] componentDidMount--");
		window.addEventListener("resize", this.updateDimensions);
	}
	
	componentWillUnmount() {
    	window.removeEventListener("resize", this.updateDimensions);
  	}

	componentWillReceiveProps = () =>{
		//console.log("--["+class_name+"] componentWillReceiveProps --")
	}

	shouldComponentUpdate = (nextProps,nextState)=>{
		//console.log("--["+class_name+"] shouldComponentUpdate -- "+(this.state.isotope_instance == null ? "true" : "false"))
		//return this.state.isotope_instance == null ? true : false;
		return true;
	}

	componentDidUpdate = (prevProps, prevState, snapshot) =>{
		console.log("--["+class_name+"] componentDidUpdate -- first_render: "+this.state.first_render)
		//console.log(this.props);
		
		if(this.state.first_render == true){
			this.setState({first_render: false});
			this.props.update_isotope(this.props.isotope_instance,true);
		}
		else{
			this.props.update_isotope(this.props.isotope_instance);
		}
	}

}

//On recupere la tate dans les props
const mapStateToProps = state =>({
	test_action : state.bim.test_action,
	snapdragon : state.bim.snapdragon,
	links : state.bim.links,
	isotope_instance : state.bim.isotope_instance
})

//On injecte les actions possible au props ?
const mapDispatchToProps = dispatch => bindActionCreators({
  update_isotope,
  set_isotope
}, dispatch)



export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(LinkList)