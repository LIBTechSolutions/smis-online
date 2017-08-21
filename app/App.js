import React from 'react'
import PouchDB from 'pouchdb-browser'
import { Provider } from 'react-redux'
import AppContainer from './containers/AppContainer'
import configureStore from './store/configureStore'
import config from '../config.json'

const schoolDb = new PouchDB(config.db.case.local)
const remoteDb = config.db.case.remote

let loadedData = {}
const initialBatchTracker = (name) => () => { loadedData[name] = true }
const store = configureStore(schoolDb, initialBatchTracker)

export default class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <AppContainer
          schoolDb={schoolDb}
          remoteDb={remoteDb}
          config={config}
        />
      </Provider>
    )
  }
}
