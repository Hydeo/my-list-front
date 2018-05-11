import axios from 'axios'
export const GET_LIST_LINKS = 'GET_LIST_LINKS'
export const ADD_LINK = 'ADD_LINK'
export const INIT_ISOTOPE = 'INIT_ISOTOPE'
export const UPDATE_ISOTOPE = 'UPDATE_ISOTOPE'

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

export const update_isotope = (callback) =>{
	return dispatch =>{
		callback();
		dispatch({
			type : UPDATE_ISOTOPE
		})
	}
}