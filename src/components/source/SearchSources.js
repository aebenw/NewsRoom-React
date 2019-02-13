import React, {Fragment, Component} from 'react';
import { connect } from 'react-redux';
import {
  InputGroup,
  InputGroupAddon,
  Button,
  Input
} from 'reactstrap'
import { FoundSourceFeed } from '../../containers'
import {withRouter} from 'react-router-dom'
import { searchSources } from '../../store'




class SearchSources extends Component {

  state = {
    source: ''
  }

  handleChange = (e) => {

    let source = e.target.value
    this.setState({
      ...this.state,
      source
    })
  }

  handleSubmit = (e) => {
    const { searchSources } = this.props
    e.preventDefault()
    searchSources(this.state)
  }


  render(){
    const { foundSources } = this.props
    return (
      <Fragment>
        <InputGroup>
          <InputGroupAddon addonType="append">
            <Button onClick={(e) => this.handleSubmit(e)}>Search</Button>
          </InputGroupAddon>
          <Input type='text' name='source' onChange={(e) => this.handleChange(e)}/>
        </InputGroup>
        {foundSources ?
          <FoundSourceFeed sources={foundSources} />
          : null
        }
      </Fragment>
    )
  }
}


const mapDispatch = (dispatch) => {
  return{
    searchSources: (source) => {
      return dispatch(searchSources(source))
    }
  }
}
const mapState = ({news: {foundSources}}) => {
  return{
    foundSources
  }
}

export default withRouter(connect(mapState, mapDispatch)(SearchSources))
