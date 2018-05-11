
import $ from 'jquery';
import Isotope from 'isotope-layout';
import ImagesLoaded from 'imagesloaded';

import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
	update_isotope
} from '../../actions/basic_actions'

import LinkCard from '../linkCards'

const class_name = "LinkList";

class LinkList extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			first_render : true,
			isotope_instance : null
		}
	}

	render(){
		console.log("--["+class_name+"] Render --")
		return(
			  <div id="link_list">
			    {
			    	this.props.links.map((link,index)=>(
			    		<LinkCard link_data={link} key={index}/>
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
		console.log("--["+class_name+"] shouldComponentUpdate -- "+(this.state.isotope_instance == null ? "true" : "false"))
		//return this.state.isotope_instance == null ? true : false;
		return true;
	}

	componentDidUpdate = (prevProps, prevState, snapshot) =>{
		console.log("--["+class_name+"] componentDidUpdate --")
		this.props.update_isotope(()=>{this.update_isotope()});
	}


	update_isotope(){
		
		if(this.state.isotope_instance == null){
			console.log("-- update_isotope -- call init --");
			this.init_Isotope();
		}
		else{
			console.log("-- update_isotope -- update layout--");
			console.log(this.state);
			this.state.isotope_instance.reloadItems()
			this.state.isotope_instance.layout();
			this.state.isotope_instance.arrange();
		}
	}

	init_Isotope(){
		console.log("-- init_Isotope --");
		var iso_link_list ;
		var link_list = document.querySelector('#link_list');
		//ImagesLoaded("#link_list"),()=>{
		iso_link_list = new Isotope(link_list,{
				itemSelector : '.link_item',
				masonry : {
					 columnWidth: 300,
				}
			})
		this.setState((previousState, new_iso_instance)=>{
			return{isotope_instance : iso_link_list};
		})
		//}
		//iso_link_list.layout();
		//iso_link_list.arrange();
	}
}

//On recupere la tate dans les props
const mapStateToProps = state =>({
	test_action : state.bim.test_action,
	snapdragon : state.bim.snapdragon,
	links : state.bim.links
})

//On injecte les actions possible au props ?
const mapDispatchToProps = dispatch => bindActionCreators({
  update_isotope
}, dispatch)

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(LinkList)