import { 
GET_LIST_LINKS,
ADD_LINK,
UPDATE_ISOTOPE,
SET_ISOTOPE
} from '../actions/basic_actions';

const initialState = {
	test_action : 0,
	snapdragon : false,
	links : [],
	last_added_link : {}
}

export default (state = initialState, action ) =>{
	switch(action.type){

		case GET_LIST_LINKS:
				return{
					...state,
					test_action : state.test_action +  1,
					snapdragon : !state.snapdragon,
					links : action.payload.data
				}
			break;

		case ADD_LINK:
			/*var new_links_array = state.links;
			console.log( state.links);
			new_links_array.unshift(action.payload.data);
			console.log( state.links);*/
			return{
					...state,
					links : [action.payload.data , ...state.links],
					last_added_link : action.payload.data 
				}
			break;

		case UPDATE_ISOTOPE:
			return state;
			break;

		case SET_ISOTOPE:
			console.log("-- Set G State Iso --")
			console.log(action.payload)
			return{
					...state,
					isotope_instance : action.payload
				}
			break;


		default:
			return state;
	}
}