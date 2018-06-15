import { 
SET_USER,
USER_LIST
} from '../actions/user_actions';

const initialState = {
	user_name : localStorage.getItem('user_name'),
	user_list : []
}

export default (state = initialState, action ) =>{
	switch(action.type){
		case SET_USER :
			return {
				...state,
				user_name : action.payload
			}
		break;
		case USER_LIST :
		console.log("USEEERRR LLLIIIISSSTTTTTTT§§§§")
			return {
				...state,
				user_list : action.payload.data
			}
		break;
		
		default:
			return state;
	}
}