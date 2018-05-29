import axios from 'axios'
import Isotope from 'isotope-layout';

export const GET_LIST_LINKS = 'GET_LIST_LINKS'
export const ADD_LINK = 'ADD_LINK'
export const INIT_ISOTOPE = 'INIT_ISOTOPE'
export const UPDATE_ISOTOPE = 'UPDATE_ISOTOPE'
export const SET_ISOTOPE = 'SET_ISOTOPE'

export const URL_API = "https://my-link-list.herokuapp.com";
export const LIST_NAME = "Hideo";

export const get_list_links = ()=>{
	//Redux Thunk will inject dispatch here
	return dispatch =>{
		return axios.get(URL_API+"/"+LIST_NAME+"/all")
			.then(
				(request)=>{
					dispatch({
						type : GET_LIST_LINKS,
						payload : request
					});
				}
			)
	}
}

export const add_link = (url) =>{

	const data = {
      url: url
    };
	return dispatch =>{
		return axios.post(URL_API+"/"+LIST_NAME,data)
			.then(
				(request)=>{
					dispatch({
						type : ADD_LINK,
						payload : request
					});
				}
			)
	}
}

export const update_isotope = (iso_instance = null) =>{
	return dispatch =>{
		if(iso_instance == null){
			console.log("-- init_Isotope --");
			var iso_link_list ;
			var link_list = document.querySelector('#link_list');
			//ImagesLoaded("#link_list"),()=>{
			iso_link_list = new Isotope(link_list,{
					itemSelector : ".link_item",
					percentPosition: true,
					masonry : {
						 columnWidth: ".link_sizer",
						 gutter : ".link_gutter"
					}
				})
			//}
			//iso_link_list.layout();
			//iso_link_list.arrange();
			dispatch({
				type : SET_ISOTOPE,
				payload: iso_link_list
			})
		}
		else{
			console.log("-- update_isotope -- update layout--");
			iso_instance.reloadItems()
			iso_instance.layout();
			iso_instance.arrange();
		}
	}
}

export const set_isotope = (isotope) =>{
	return dispatch =>{
		dispatch({
			type : SET_ISOTOPE,
			payload: isotope
		})
	}
}