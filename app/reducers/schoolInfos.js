'use strict'

import { INSERT_INFO, UPDATE_INFO, DELETE_INFO } from '../constants/ActionTypes'

const initialState = []

export default function schoolInfos (state = initialState, action) {
  switch (action.type) {
    case INSERT_INFO:
      return [
        action.schoolInfo,
        ...state
      ]
    case UPDATE_INFO:
      return state.map(schoolInfo =>
        schoolInfo._id === action.schoolInfo._id
          ? action.schoolInfo
          : schoolInfos
      )
    case DELETE_INFO:
      return state.filter(schoolInfo =>
        schoolInfo._id !== action.id
      )
    default:
      return state
  }
}
