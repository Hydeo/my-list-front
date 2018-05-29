
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
import {getTypeSizeScreen} from '../../utils'
import LinkCard from '../linkCards'

const class_name = "LinkList";


const calculateIsotopeItemWidth = (nb_item,gutter_size)=>{
	var nb_gutters = nb_item-1;
	var item_width = (100 - (nb_gutters * gutter_size)) / nb_item;
	return item_width;
}

const link_sizer = {
    width: calculateIsotopeItemWidth(conf_dev.isotope_nb_item[getTypeSizeScreen(conf_dev.breakpoints,window.screen.width)],3)+"%"
  }

const link_gutter = {
    width: "3%"
  }



class LinkList extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			first_render : true,
			isotope_instance : null
		}
		console.log(conf_dev.isotope_nb_item[getTypeSizeScreen(conf_dev.breakpoints,window.screen.width)]);
		console.log(calculateIsotopeItemWidth(conf_dev.isotope_nb_item[getTypeSizeScreen(conf_dev.breakpoints,window.screen.width)],3));
	}

	render(){
		console.log((100 - (5 * 17)) / 5);

		console.log(this.props);
		const { classes} = this.props;
		console.log("--["+class_name+"] Render --")
		return(
			  <div id="link_list">
			  	<div  style={link_sizer} className="link_sizer"/>
			  	<div  style={link_gutter} className="link_gutter"/>
			    {
			    	this.props.links.map((link,index)=>(
			    		<LinkCard link_data={link} key={index} isotopeUpdate={this.update_isotope} />
			  		))
			    }
			  </div>
		)
	}


	componentDidMount = ()=>{
		console.log("--["+class_name+"] componentDidMount--");
	}

	componentWillReceiveProps = () =>{
		console.log("--["+class_name+"] componentWillReceiveProps --")
		
	}

	shouldComponentUpdate = (nextProps,nextState)=>{
		//console.log("--["+class_name+"] shouldComponentUpdate -- "+(this.state.isotope_instance == null ? "true" : "false"))
		//return this.state.isotope_instance == null ? true : false;
		return true;
	}

	componentDidUpdate = (prevProps, prevState, snapshot) =>{
		console.log("--["+class_name+"] componentDidUpdate --")
		console.log(this.props);
		this.props.update_isotope(this.props.isotope_instance);
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