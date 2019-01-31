import React,{Component} from 'react';
import { connect } from 'react-redux'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col } from 'reactstrap';

import {signUp} from '../../store'


class Signup extends Component{

  state = {
    name: '',
    password: ''
  }

  handleChange = (e) => {
    let name = e.target.name
    this.setState({
      ...this.state,
      [name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.signUp(this.state)
  }

  render(){
    return(
      <Form onSubmit={(e) => this.handleSubmit(e)}>
        <h3>Sign Up</h3>
        <Row form>
          <Col md={6}>
        <FormGroup>
          <Label for="exampleEmail" sm={2}>Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="email" onChange={(e) => this.handleChange(e)}/>
        </FormGroup>
      </Col>
    </Row>
    <Row form>
      <Col sm={10}>
        <FormGroup>
            <Label for="examplePassword" sm={2}>Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="password" onChange={(e) => this.handleChange(e)}/>
        </FormGroup>
      </Col>
      </Row>
        <Button>Submit</Button>
      </Form>
    )
  }
}

const mapDispatch = (dispatch) => {
  return {
    signUp: (body) => {
      return dispatch(signUp(body))
    }
  }
}

export default connect(null, mapDispatch)(Signup);
