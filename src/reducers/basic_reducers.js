import { 
TEST_ACTION
} from '../actions/basic_actions';

const initialState = {
	test_action : 0,
	snapdragon : false,
	links : [{title : "1"}]
}

export default (state = initialState, action ) =>{
	switch(action.type){

		case TEST_ACTION:
			console.log("In Reducer " + state.test_action + " - " + state.snapdragon);
			console.log(action.payload.data);
			return{
				...state,
				test_action : state.test_action +  1,
				snapdragon : !state.snapdragon,
				links : action.payload.data
			}

		default:
			return state;
	}
}