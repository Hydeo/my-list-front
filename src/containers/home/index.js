
import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import Grid from 'material-ui/Grid';



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
});

const class_name = "Home";

class Home extends React.Component{

  constructor(props){
    super(props);
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
    const { classes } = this.props;
    return(
        <div>
          <Grid item xs={12} >
            <Grid container justify="center" spacing={8} direction="column" alignItems="center">
                <Grid key="1" item>
                 <h1>Here, it's all about Link</h1>
                </Grid>
                <Grid key="2" item>
                 <img height="150" src="https://media.giphy.com/media/144Q1gg0FkTEVG/giphy.gif" alt="Dam link, where are you?"/>
                </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} >
            <Grid container justify="center" spacing={8}>
                <Grid key="1" item>
                  <button onClick={() => this.props.changePage()}>[TEST] Change Page</button>
                </Grid>
            </Grid>
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
                  <Button variant="fab" mini disabled={!this.state.is_url_valide} onClick={()=>{this.props.add_link(this.state.url_to_add)}} color="secondary" aria-label="edit" className={classes.button}>
                    <Icon>send</Icon>
                  </Button>  
                </Grid>
            </Grid>
            <Grid container justify="center" spacing={8}>
                <Grid key="1" item>
                  <Button onClick={this.props.get_list_links} className={classes.button} variant="raised" color="primary">  
                    <Icon className={classes.rightIcon}>autorenew</Icon>
                  </Button>           
                </Grid>
            </Grid>
          </Grid>

         	<LinkList/>
        </div>
      )
  }

  componentDidMount(){
    console.log("--["+class_name+"] componentWillReceiveProps --")
    if(this.state.is_first_render){
      this.setState({is_first_render : false});
    }
    this.props.get_list_links();
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

//On injecte les actions possible au props ?
const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/about-us'),
  get_list_links,
  add_link : (url) => add_link(url) 
}, dispatch)


var Home_ws = withStyles(styles)(Home);
export default connect(
  null, 
  mapDispatchToProps
)(Home_ws)
