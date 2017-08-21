'use strict'

import PouchMiddleware from 'pouch-redux-middleware'
import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducers'
import { insertInfo, updateInfo, deleteInfo } from '../actions/action'

export default function configureStore (schoolDb, initialBatchTracker) {
  const pouchMiddleware = PouchMiddleware([{
    path: '/schoolInfos',
    db: schoolDb,
    actions: {
      insert: insertInfo,
      update: updateInfo,
      remove: deleteInfo
    },
    initialBatchDispatched: initialBatchTracker('schoolInfos')
  }])

  const store = createStore(
    reducer,
    undefined,
    applyMiddleware(pouchMiddleware)
  )

  return store
}
