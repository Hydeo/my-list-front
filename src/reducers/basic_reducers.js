import { 
GET_LIST_LINKS,
ADD_LINK,
UPDATE_ISOTOPE
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
			var new_links_array = state.links;
			console.log(new_links_array);
			new_links_array.unshift(action.payload.data);
			console.log(new_links_array);
			return{
					...state,
					links : new_links_array,
					last_added_link : action.payload.data 
				}
			break;
			
		case UPDATE_ISOTOPE:
			return state;
			break;


		default:
			return state;
	}
}