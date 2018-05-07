
import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
	test_action_action
} from '../../actions/basic_actions'

const Home = props => (
  <div>
    <h1>Home</h1>
    <p>Welcome home!</p>
    <button onClick={() => props.changePage()}>Go to about page via redux</button>

    <button onClick={props.test_action_action}>ACTION!!</button>

    <p>Action count : {props.test_action}</p>
    <p>Snapdragon : {props.snapdragon.toString()}</p>


    {
    	props.links.map((link,index)=>(
    		<p>
		    	<div key={index}>
		    		<br/>{link.title}
		    		<br/>{link.owner}
		    		<br/><a href={link.url}>{link.url}</a> 
		    		<br/>{link.author}
		    		<br/>{link.description}
		    		<br/><img src={link.image} alt="lol"/>
		    		<br/>{link.publisher}
		    	</div>
		    </p>	
    	))
    }

  </div>
)

//On recupere la tate dans les props
const mapStateToProps = state =>({
	test_action : state.bim.test_action,
	snapdragon : state.bim.snapdragon,
	links : state.bim.links
})

//On injecte les actions possible au props ?
const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/about-us'),
  test_action_action
}, dispatch)

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Home)