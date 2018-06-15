import axios from 'axios'

import {conf_dev} from '../config';

export const SET_USER = 'SET_USER';
export const USER_LIST = 'USER_LIST';

export const URL_API = conf_dev.url_api;

export const set_user = (user_name) =>{
	localStorage.setItem('user_name', user_name);
	return dispatch =>{
		dispatch({
			type : SET_USER,
			payload : user_name
		}),
		dispatch(()=>{
			return axios.get(URL_API+"/"+user_name+"/lists")
				.then(
					(request)=>{
						dispatch({
							type : USER_LIST,
							payload : request
						});
					}
				)
		})
		
	}
}