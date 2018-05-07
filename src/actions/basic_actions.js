import axios from 'axios'
export const TEST_ACTION = 'TEST_ACTION'

export const test_action_action = ()=>{
	return dispatch =>{

		return axios.get("https://my-link-list.herokuapp.com/Hideo/all")
			.then(
				(request)=>{
					console.log("Action triggered");
					dispatch({
						type : TEST_ACTION,
						payload : request
					})	
				}
			)
	}
}