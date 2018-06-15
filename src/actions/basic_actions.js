import axios from 'axios'
import Isotope from 'isotope-layout';

export const GET_LIST_LINKS = 'GET_LIST_LINKS'
export const ADD_LINK = 'ADD_LINK'
export const INIT_ISOTOPE = 'INIT_ISOTOPE'
export const UPDATE_ISOTOPE = 'UPDATE_ISOTOPE'
export const SET_ISOTOPE = 'SET_ISOTOPE'

//export const URL_API = "https://my-link-list.herokuapp.com";
export const URL_API = "http://localhost:8080";

export const get_list_links = (list_name)=>{
	//Redux Thunk will inject dispatch here
	return dispatch =>{
		return axios.get(URL_API+"/lists/"+list_name)
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

export const add_link = (url,owner,list_name) =>{

	const data = {
      url: url
    };
    console.log(owner)
	return dispatch =>{
		return axios.post(URL_API+"/"+owner+"/"+list_name,data)
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

export const update_isotope = (iso_instance = null,force_new = false) =>{
	return dispatch =>{
		if(iso_instance == null || force_new == true){
			console.log("-- init_Isotope --");
			var iso_link_list ;
			var link_list = document.querySelector('#link_list');
			console.log(document.querySelector('#link_list'));
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
			dispatch({
				type : SET_ISOTOPE,
				payload: iso_link_list
			})
		}
		else{
			console.log("-- update_isotope -- update layout--");
			console.log(document.querySelector('#link_list'));
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