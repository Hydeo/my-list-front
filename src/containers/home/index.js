import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';



import Utils from '../../modules/utils.js'
import {
	get_list_links,
  add_link
} from '../../actions/basic_actions'

import LinkCard from '../linkCards'
import LinkList from '../linkList'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: 0,
  },
  button: {
    margin: 10
  },
  gutter:{
    marginBottom : "5%" 
  },
});

const class_name = "Home";

class Home extends React.Component{

  constructor(props){
    super(props);
    console.log(this.props)
    this.state = {
      url_to_add: '',
      is_url_valide : false,
      url_input_has_been_used : false
    };
  }

  handleChange = event => {
    this.setState({ url_to_add: event.target.value, url_input_has_been_used : true });
    if(Utils.is_url(event.target.value)){
      this.setState({ is_url_valide: true });
    }
    else{
      this.setState({ is_url_valide: false }); 
    }
  };

  render(){
    //check if url param sont presents
    const { classes } = this.props;
    return(
        <div>
          <Grid item xs={12} >
            <Grid container justify="center" spacing={8}>
                <Grid key="1" xs={6} sm={4} item>
                  <FormControl fullWidth className={classes.formControl}>
                    <InputLabel htmlFor="name-simple">Url To Add</InputLabel>
                    <Input id="name-simple" error={!this.state.is_url_valide && this.state.url_input_has_been_used} placeholder="http(s):\\" value={this.state.url_to_add} onChange={this.handleChange} />
                    {(!this.state.is_url_valide && this.state.url_input_has_been_used ) &&
                      <FormHelperText id="name-error-text">Non valid URL</FormHelperText>
                    }
                  </FormControl>    
                </Grid>
            </Grid>
            <Grid container justify="center" spacing={8}>
                <Grid key="1" item>
                  <Button variant="fab" mini disabled={!this.state.is_url_valide} onClick={()=>{this.props.add_link(this.state.url_to_add,this.props.user_name,this.props.match.params.list_name)}} color="secondary" aria-label="edit" className={classes.button}>
                    <Icon>send</Icon>
                  </Button>  
                </Grid>
            </Grid>
          </Grid>
          <Grid container className={classes.gutter}>
            <Grid item xs={12}>
            </Grid>
          </Grid>
         	<LinkList/>
        </div>
      )
  }

  componentDidMount(){
    if(this.state.is_first_render){
      this.setState({is_first_render : false});
    }
    this.props.get_list_links(this.props.match.params.list_name);
  }
  componentDidUpdate(){
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state =>({
  user_name : state.user.user_name
})

//On injecte les actions possible au props ?
const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/about-us'),
  get_list_links,
  add_link : (url,owner,list_name) => add_link(url,owner,list_name) 
}, dispatch)


var Home_ws = withStyles(styles)(Home);
export default  withRouter(connect(
  mapStateToProps, 
  mapDispatchToProps
)(Home_ws))
