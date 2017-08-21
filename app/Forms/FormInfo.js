'use strict'

import React from 'react'
import update from 'immutability-helper'
import RegistrationForm from './RegistrationForm'
import RegistrationInfo from './RegistrationInfo'
import {completeCase, getSchoolInfo} from '../schoolInfo'

export default class FormInfo extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      doc: getSchoolInfo(this.props),
      edit: false,
      savedStatusVisible: false,
      confirmCloseDialogVisible: false,
      registration: false
    }

    this.viewDoc = this.viewDoc.bind(this)
    this.updateDoc = this.updateDoc.bind(this)
    this.toggleEdit = this.toggleEdit.bind(this)
    this.createCase = this.createCase.bind(this)
    this.confirmClose = this.confirmClose.bind(this)
    this.cancelClose = this.cancelClose.bind(this)
    this.closeForm = this.closeForm.bind(this)
    this.saveCase = this.saveCase.bind(this)
    this.handleCloseRegistration = this.handleCloseRegistration.bind(this)
  }

  handleCloseRegistration () {
    this.setState({
      registration: false
    })
  }

  viewDoc (doc) {
    return (e) => {
      this.setState({
        doc,
        isNewCase: false,
        edit: false,
        hasChanged: false,
        savedStatusVisible: false
      })
    }
  }

  toggleEdit () {
    this.setState((prevState, props) => {
      return {edit: !prevState.edit}
    })
  }

  confirmClose (e) {
    if (this.state.hasChanged) {
      e.preventDefault()
      this.setState({
        confirmCloseDialogVisible: true
      })
    } else {
      return this.closeForm(e)
    }
  }

  cancelClose (e) {
    e.preventDefault()

    this.setState({
      confirmCloseDialogVisible: false
    })
  }

  closeForm (e) {
    e.preventDefault()
    this.setState({
      doc: getSchoolInfo(this.props),
      hasChanged: false,
      confirmCloseDialogVisible: false,
      registration: false
    })
  }

  createCase () {
    this.setState({
      doc: getSchoolInfo(this.props),
      isNewCase: true,
      hasChanged: false,
      edit: true,
      savedStatusVisible: false,
      registration: true
    })
  }

  saveCase (doc) {
    let action = this.state.isNewCase
      ? this.props.actions.insertInfo
      : this.props.actions.updateInfo

    action(doc)

    this.setState({
      doc,
      hasChanged: false,
      savedStatusVisible: true,
      edit: false
    })
  }

  updateDoc (dependentProps) {
    return (e) => {
      let key = e.target.name
      let value = e.target.type === 'checkbox'
                ? e.target.checked
                : e.target.value

      this.setState((prevState, props) => {
        let doc = {
          schoolInfo: {
            [key]: {$set: value}
          }
        }

        if (typeof dependentProps === 'function') {
          let calculatedProps = dependentProps(value)
          for (let prop in calculatedProps) {
            doc.schoolInfo[prop] = {$set: calculatedProps[prop]}
          }
        } else {
          for (let prop in dependentProps) {
            doc.schoolInfo[prop] = {$set: dependentProps[prop](value)}
          }
        }

        return update(prevState, {doc, hasChanged: {$set: true}})
      })
    }
  }

  render () {
    return (
      <div id='dashboard'>
        <RegistrationInfo
          createCase={this.createCase}
          selectedCase={this.state.doc}
          {...this.props} />
        {this.state.registration
        ? <div>
          <RegistrationForm
            updateDoc={this.updateDoc}
            toggleEdit={this.toggleEdit}
            confirmClose={this.confirmClose}
            cancelClose={this.cancelClose}
            closeForm={this.closeForm}
            createCase={this.createCase}
            saveCase={this.saveCase}
            completeCase={completeCase}
            isNewCase={this.state.isNewCase}
            hasChanged={this.state.hasChanged}
            {...this.state}
            {...this.props} />
        </div> : null }
      </div>
    )
  }
}
