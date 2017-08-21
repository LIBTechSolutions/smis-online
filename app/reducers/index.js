'use strict'

import { combineReducers } from 'redux'
import schoolInfos from './schoolInfos'
import syncState from './syncState'

export default combineReducers({
  schoolInfos,
  syncState
})
