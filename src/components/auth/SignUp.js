// import React,{Component} from 'react';
// import { withRouter } from 'react-router-dom'
// import { connect } from 'react-redux'
// import {
//   Button,
//   Form,
//   FormGroup,
//   Label,
//   Input,
//   Row,
//   Col } from 'reactstrap';
//
// import {signUp} from '../../store'
//
//
// class Signup extends Component{
//
//   state = {
//     name: '',
//     password: ''
//   }
//
//   handleChange = (e) => {
//     let name = e.target.name
//     this.setState({
//       ...this.state,
//       [name]: e.target.value
//     })
//   }
//
//   handleSubmit = (e) => {
//     const {signUp, history, currentUser} = this.props
//     e.preventDefault()
//     signUp(this.state)
//     .then(() =>  currentUser.email ? history.push('/home') : null
//     )
//   }
//
//   render(){
//     return(
//       <Form onSubmit={(e) => this.handleSubmit(e)}>
//         <h3>Sign Up</h3>
//         <Row form>
//           <Col md={6}>
//         <FormGroup>
//           <Label for="exampleEmail" sm={2}>Email</Label>
//           <Input type="email" name="email" id="exampleEmail" placeholder="email" onChange={(e) => this.handleChange(e)}/>
//         </FormGroup>
//       </Col>
//     </Row>
//     <Row form>
//       <Col sm={10}>
//         <FormGroup>
//             <Label for="examplePassword" sm={2}>Password</Label>
//             <Input type="password" name="password" id="examplePassword" placeholder="password" onChange={(e) => this.handleChange(e)}/>
//         </FormGroup>
//       </Col>
//       </Row>
//         <Button>Submit</Button>
//       </Form>
//     )
//   }
// }
//
// const mapDispatch = (dispatch) => {
//   return {
//     signUp: (body) => {
//       return dispatch(signUp(body))
//     }
//   }
// }
//
// const mapState = ({user: {currentUser}, error: { loginErrors }}) => {
//   return {
//     currentUser,
//     loginErrors
//   }
// }
//
// export default withRouter(connect(mapState, mapDispatch)(Signup));
