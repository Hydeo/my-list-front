
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


class LinkList extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			first_render : true
		}
	}

	render(){
		console.log("render");
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
		console.log("Did Mount");
	}

	shouldComponentUpdate = (nextProps,nextState)=>{
		return true;
	}

	componentDidUpdate = (prevProps, prevState, snapshot) =>{
		console.log("Did Update");
		this.props.update_isotope(()=>{this.init_Isotope()});
	}



	init_Isotope(){
		var iso_link_list ;
		var link_list = document.querySelector('#link_list');
		//ImagesLoaded("#link_list"),()=>{
			iso_link_list = new Isotope(link_list,{
					itemSelector : '.link_item',
					masonry : {
						 columnWidth: 300,
					}
				})
		//}
		iso_link_list.layout();
		iso_link_list.arrange();
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