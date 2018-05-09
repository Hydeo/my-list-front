import axios from 'axios'
export const GET_LIST_LINKS = 'GET_LIST_LINKS'
export const INIT_ISOTOPE = 'INIT_ISOTOPE'
export const UPDATE_ISOTOPE = 'UPDATE_ISOTOPE'

export const get_list_links = ()=>{
	//Redux Thunk will inject dispatch here
	return dispatch =>{
		return axios.get("https://my-link-list.herokuapp.com/Hideo/all")
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

export const update_isotope = (callback) =>{
	return dispatch =>{
		callback();
		dispatch({
			type : UPDATE_ISOTOPE
		})
	}
}