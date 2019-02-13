import React, { Fragment, Component } from 'react';
import classnames from 'classnames'
// import { connect } from 'react-redux'
// import { withRouter } from 'react-router-dom'
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';

import { Login, SignUp } from '../';


class LoginSignUp extends Component {

  state = {
    activeTab: '1'
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render(){
    return (
      <Fragment>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}>
              Log In
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}>
              Sign Up
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Login/>
          </TabPane>
          <TabPane tabId="2">
            <SignUp/>
          </TabPane>
        </TabContent>
      </Fragment>
    )
  }
}



export default LoginSignUp
