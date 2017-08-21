import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
import Home from '../components/Home'
import * as CaseActions from '../actions/action'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

class AppContainer extends React.Component {
  constructor (props) {
    super(props)

    this.schoolDb = this.props.schoolDb
    this.remoteDb = this.props.remoteDb
    this.remoteSync = null
  }

  componentDidMount () {
    this.startRemoteSync()
  }

  componentWillUnmount () {
    this.stopRemoteSync()
  }

  render () {
    return <Home {...this.state} {...this.props}
    />
  }

  startRemoteSync () {
    console.log('starting remote sync')
    this.remoteSync = this.schoolDb.sync(this.remoteDb, {
      live: true,
      retry: true
    }).on('complete', () => {
      console.log('Remote sync complete', this.remoteSync)
    }).on('error', (err) => {
      console.log(err)
    })
  }

  stopRemoteSync () {
    this.remoteSync && this.remoteSync.cancel()
  }
}

function mapStateToProps (state) {
  return {
    schoolInfos: state.schoolInfos
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(CaseActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer)
