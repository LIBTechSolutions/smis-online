import * as types from '../constants/ActionTypes'

export function insertInfo (schoolInfo) {
  return { type: types.INSERT_INFO, schoolInfo }
}

export function updateInfo (schoolInfo) {
  return { type: types.UPDATE_INFO, schoolInfo }
}

export function deleteInfo (schoolInfo) {
  return { type: types.DELETE_INFO, id: schoolInfo._id }
}
