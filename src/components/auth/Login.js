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

import { login } from '../../store'



class Login extends Component{

  state = {
    name: '',
    password: ''
  }

  displayErrors = () => {
    const { loginErrors } = this.props
    return loginErrors.map(error => <Alert>{error}</Alert>)
  }

  handleChange = (e) => {
    let name = e.target.name
    this.setState({
      ...this.state,
      [name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    const {login, history, currentUser} = this.props
    e.preventDefault()
    login(this.state)
    .then(() => {
      return currentUser.email ? history.push('/home') : null
    })
  }

  render(){
    const {handleChange, handleSubmit, displayErrors, props: { loginErrors }} = this
    return(
      <Fragment>
        {loginErrors ? displayErrors() : null}
        <Form onSubmit={(e) => handleSubmit(e)}>
          <h3>Login</h3>
          <Row form>
            <Col md={6}>
          <FormGroup>
            <Label for="exampleEmail" sm={2}>Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="email" onChange={(e) => handleChange(e)}/>
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col sm={10}>
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

const mapDispatch = (dispatch) => {
  return {
    login: (body) => {
      return dispatch(login(body))
    }
  }
}

const mapState = ({user: {currentUser}, error: { loginErrors }}) => {
  return {
    currentUser,
    loginErrors
  }
}

export default withRouter(connect(mapState, mapDispatch)(Login));
