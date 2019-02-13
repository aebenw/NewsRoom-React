import React,{Fragment, Component} from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  Alert } from 'reactstrap';

import { login, signUp } from '../../store'



class Auth extends Component{

  state = {
    name: '',
    password: ''
  }

  displayErrors = () => {
    const { errors, type } = this.props
    if(type === 'Login' && errors.loginErrors){
      return errors.loginErrors.map(error => <Alert>{error}</Alert>)
    } else if (type === "SignUp" && errors.signUpErrors){
      return errors.signUpErrors.map(error => <Alert>{error}</Alert>)
    }
    return null
  }

  handleChange = (e) => {
    let name = e.target.name
    this.setState({
      ...this.state,
      [name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    const {submitAction, history, currentUser} = this.props
    e.preventDefault()
    submitAction(this.state)
    .then(() =>  currentUser.email ? history.push('/home') : null)
  }

  render(){
    const {handleChange, handleSubmit, displayErrors, props: { errors, type }} = this
    return(
      <Fragment>
        {errors.loginErrors || errors.signUpErrors ?
          displayErrors() : null}
        <Form onSubmit={(e) => handleSubmit(e)}>
          {type === 'Login' ?
           <h3>Log In</h3>
           :
           <h3>Sign Up</h3>
          }
          <Row form>
            <Col md={6}>
          <FormGroup>
            <Label for="exampleEmail" sm={2}>Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="email" onChange={(e) => handleChange(e)}/>
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          <FormGroup>
              <Label for="examplePassword" sm={2}>Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="password" onChange={(e) => handleChange(e)}/>
          </FormGroup>
        </Col>
        </Row>
          <Button>Submit</Button>
        </Form>
      </Fragment>
    )
  }
}

const mapDispatchForLogin = (dispatch) => {
  return {
    submitAction: (body) => {
      return dispatch(login(body))
    },
    type: 'Login'
  }
}
const mapDispatchForSignUp = (dispatch) => {
  return {
    submitAction: (body) => {
      return dispatch(signUp(body))
    },
    type: 'SignUp'
  }
}

const mapState = ({errors, user: {currentUser} }) => {
  return {
    currentUser,
    errors
  }
}

const Login = withRouter(connect(mapState, mapDispatchForLogin)(Auth));
const SignUp = withRouter(connect(mapState, mapDispatchForSignUp)(Auth));

export {
  Login,
  SignUp
}
