'use strict'
import React from 'react'
import FormToolbar from './FormToolbar'
import Registration from 'Registration'

export default class RegistrationForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      canSubmit: false

    }
    this.submitCase = this.submitCase.bind(this)
    this.db = this.props.db
  }

  componentDidUpdate (prevProps, prevState) {
    const canSubmit = this.canSubmit()
    if (prevState.canSubmit !== canSubmit) {
      this.setState({canSubmit})
    }
  }

  submitCase (event) {
    event.preventDefault()

    let schoolInfo = Object.assign({}, this.props.doc)
    this.props.completeCase(schoolInfo)
    this.props.saveCase(schoolInfo)
  }

  // A form is submittable if it's in edit mode, has changes and is valid
  canSubmit () {
    return this.form
      ? this.props.edit && this.props.hasChanged && this.form.checkValidity()
      : false
  }

  render () {
    let props = this.props
    let {
      doc,
      updateDoc,
      toggleEdit,
      confirmClose,
      isNewCase,
      edit,
      savedStatusVisible,
      confirmCloseDialogVisible
    } = props

    return (
      <div className='container'>
        <div className='student-form'>
          <div>
            <form className='well form-horizontal' action='' onSubmit={this.submitCase} ref={form => { this.form = form }}>
              <FormToolbar
                isNewCase={isNewCase}
                canSubmit={this.state.canSubmit}
                edit={edit}
                toggleEdit={toggleEdit}
                confirmClose={confirmClose}
                {...doc.schoolInfo} />
              <div className='eidsr-form__container' ref={container => { this.container = container }}>
                {savedStatusVisible && this.savedStatus()}
                {confirmCloseDialogVisible && this.confirmCloseDialog()}
                <Registration
                  edit={edit}
                  handleChange={updateDoc}
                  {...doc.schoolInfo} />
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }

  savedStatus () {
    return this.props.isNewCase
      ? (<div className='alert-success'><span className='glyphicon glyphicon-ok' />Success! We'll get in touch soon!</div>)
      : (<div className='alert-success'>Info updated.</div>)
  }
}
