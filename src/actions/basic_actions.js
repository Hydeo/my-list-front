import axios from 'axios'
import Isotope from 'isotope-layout';
import { forceCheck } from 'react-lazyload';

import {conf_dev} from '../config';

export const GET_LIST_LINKS = 'GET_LIST_LINKS'
export const ADD_LINK = 'ADD_LINK'
export const DELETE_LINK = 'DELETE_LINK'
export const INIT_ISOTOPE = 'INIT_ISOTOPE'
export const UPDATE_ISOTOPE = 'UPDATE_ISOTOPE'
export const SET_ISOTOPE = 'SET_ISOTOPE'

//export const URL_API = "https://my-link-list.herokuapp.com";
export const URL_API = conf_dev.url_api;

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

	if(!url.includes("http"))
		url = "http://"+url;
	const data = {
      url: url
    };
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

export const delete_link = (idLink) =>{
	return dispatch =>{
		return axios.delete(URL_API+"/"+idLink)
			.then(
				(request)=>{
					dispatch({
						type : DELETE_LINK,
						payload : request,
						idLink : idLink
					})
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
		//Force check lazyload after isotope layout has been created
		forceCheck();
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