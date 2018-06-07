import { 
SET_USER,
USER_LIST
} from '../actions/user_actions';

const initialState = {
	user_name : localStorage.getItem('user_name'),
	user_list : ["qdzhqzhdiu","quand il prout il fait des pet","qjdjdjpqzdjj","oqkzd koqzkd opzqk ", "kiqjzidjd 15","jqjhzuhqzd", "iqjzdiuhqzihduqhduiqzhduhqzidhuqzhdoiuqzhzdbqzhbqzd uqzhd uqhzdhzqudhkqzhd jqzhd "]
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