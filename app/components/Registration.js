'use strict'

import React, {Component} from 'react'
import Select from '../Forms/Select'
import config from '../../config.json'

const PhoneNumberPattern = '^(?:\\+\\d{1,3})?\\d{4}[ -]?\\d{3}[ -]?\\d{3}$'

export default class Registration extends Component {
  getClasses () {
    let grade = config.staff_positions
    return Object.keys(grade.grades)
  }

  render () {
    let props = this.props
    let {edit} = props
    let handleChange = props.handleChange()
    return (
      <fieldset disabled={!edit}>
        <legend><center><h2><b>We'll get in touch with you!</b></h2></center></legend><br />
        <hr />
        <div className='form-group'>
          <label className='col-md-2 control-label'>First Name</label>
          <div className='col-md-4 inputGroupContainer'>
            <div className='input-group'>
              <span className='input-group-addon'><i className='glyphicon glyphicon-user' /></span>
              <input name='firstname'
                value={props['firstname']}
                type='text'
                placeholder='First Name'
                className='form-control'
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className='form-group'>
          <label className='col-md-4 control-label'>Middle Name</label>
          <div className='col-md-4 inputGroupContainer'>
            <div className='input-group'>
              <span className='input-group-addon'><i className='glyphicon glyphicon-user' /></span>
              <input name='middlename'
                value={props['middlename']}
                type='text'
                placeholder='Middle Name'
                className='form-control'
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className='form-group'>
          <label className='col-md-4 control-label'>Last Name</label>
          <div className='col-md-4 inputGroupContainer'>
            <div className='input-group'>
              <span className='input-group-addon'><i className='glyphicon glyphicon-user' /></span>
              <input name='lastname'
                value={props['lastname']}
                type='text'
                placeholder='Last Name'
                className='form-control'
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className='form-group'>
          <label className='col-md-4 control-label'>Date of Birth</label>
          <div className='col-md-4 inputGroupContainer'>
            <div className='input-group'>
              <span className='input-group-addon'><i className='glyphicon glyphicon-calendar' /></span>
              <input name='dob'
                value={props['dob']}
                type='date'
                placeholder='Date of Birth'
                className='form-control'
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className='form-group'>
          <label className='col-md-4 control-label'>Nationality</label>
          <div className='col-md-4 inputGroupContainer'>
            <div className='input-group'>
              <span className='input-group-addon'><i className='glyphicon glyphicon-nationwide' /></span>
              <input name='nationality'
                value={props['nationality']}
                type='text'
                placeholder='Nationality'
                className='form-control'
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className='form-group'>
          <label className='col-md-4 control-label'>Gender</label>
          <div className='col-md-4 inputGroupContainer'>
            <div className='input-group'>
              <span className='input-group-addon'><i className='glyphicon glyphicon-gender' /></span>
              <div className='form-row'>
                <label>
                  <input name='sex'
                    value={'Male'}
                    type='radio'
                    checked={props.sex === 'Male'}
                    key={1}
                    onChange={handleChange}
                    required
              />
              Male
          </label>
                <label>
                  <input name='sex'
                    value={'Female'}
                    type='radio'
                    checked={props.sex === 'Female'}
                    key={2}
                    onChange={handleChange}
                    required
              />
             Female
           </label>
              </div>
            </div>
          </div>
        </div>
        <div className='form-group'>
          <label className='col-md-4 control-label'>Contact Email</label>
          <div className='col-md-4 inputGroupContainer'>
            <div className='input-group'>
              <span className='input-group-addon'><i className='glyphicon glyphicon-envelope' /></span>
              <input name='email'
                value={props['email']}
                type='email'
                className='form-control'
                placeholder='Email'
                onChange={handleChange}
            />
            </div>
          </div>
        </div>
        <div className='form-group'>
          <label className='col-md-4 control-label'>Phone Number</label>
          <div className='col-md-4 inputGroupContainer'>
            <div className='input-group'>
              <span className='input-group-addon'><i className='glyphicon glyphicon-earphone' /></span>
              <input name='phone'
                value={props['phone']}
                type='tel'
                className='form-control'
                pattern={PhoneNumberPattern}
                placeholder='Phone Number'
                onChange={handleChange}
            />
            </div>
          </div>
        </div>
        <div className='form-group'>
          <label className='col-md-4 control-label'>Grade</label>
          <div className='col-md-4 inputGroupContainer'>
            <div className='input-group'>
              <span className='input-group-addon'><i className='glyphicon glyphicon-list' /></span>
              <Select name='currentClass'
                onChange={handleChange}
                value={props['currentClass']}
                options={this.getClasses()}
                required />
            </div>
          </div>
        </div>
      </fieldset>

    )
  }
}
