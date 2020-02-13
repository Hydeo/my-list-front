
import { 
GET_LIST_LINKS,
ADD_LINK,
DELETE_LINK,
UPDATE_ISOTOPE,
SET_ISOTOPE,
UPVOTE
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
				var new_state = Object.assign({}, state);
				new_state["test_action"] = state.test_action +  1;
				new_state["snapdragon"] = !state.snapdragon;
				new_state["links"] = action.payload.data; 
				return{
					...new_state
				}
			break;

		case ADD_LINK:
			return{
					...state,
					links : [action.payload.data , ...state.links],
					last_added_link : action.payload.data 
				}
			break;
		case DELETE_LINK:

			var index =  state.links.findIndex(function(item) {
			    return item.id === action.idLink;
			});
			return{
				...state,
				links : [
							...state.links.slice(0,index),
							...state.links.slice(index+1)
						],
			}
			break;

		case UPDATE_ISOTOPE:
			return state;
			break;

		case SET_ISOTOPE:
			return{
					...state,
					isotope_instance : action.payload
				}
			break;
		case UPVOTE:
			var new_state = Object.assign({}, state);
			var index =  new_state.links.findIndex(function(item) {
				    return item.id === action.idLink;
				});
			var new_links = Object.assign([], new_state.links);
			new_links[index] = action.payload.data;

			new_state.isotope_instance.reloadItems();
			new_state.isotope_instance.layout();
			new_state.isotope_instance.arrange();
			return{
				...new_state,
				links : new_links
			}
		break;

		default:
			return state;
	}
}