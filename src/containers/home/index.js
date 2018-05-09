
import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
	get_list_links
} from '../../actions/basic_actions'

import LinkCard from '../linkCards'
import LinkList from '../linkList'


const Home = props => (
  <div>
    <h1>Home</h1>
    <p>Welcome home!</p>
    <button onClick={() => props.changePage()}>Go to about page via redux</button>

    <button onClick={props.get_list_links}>ACTION!!</button>

   	<LinkList/>
  </div>
)


//On injecte les actions possible au props ?
const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/about-us'),
  get_list_links
}, dispatch)

export default connect(
  null, 
  mapDispatchToProps
)(Home)
