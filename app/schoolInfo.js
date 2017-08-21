import { generateId } from './utils'
import { toIndexableString } from 'pouchdb-collate'
import uuid from 'uuid/v4'

export function getSchoolInfo () {
  return {
    id: uuid(),
    created: new Date().getTime(),
    regID: generateId(),
    schoolInfo: {
      studentID: generateId(),
      registrationtype: '',
      firstname: '',
      middlename: '',
      lastname: '',
      dob: '',
      nationality: '',
      sex: '',
      email: '',
      phone: '',
      emcontactname: '',
      emcontactnum: '',
      picture: '',
      prevschool: '',
      currentClass: '',
      parentguardian: '',
      parentguardianphone: '',
      Position: '',
      qualification: '',
      experience: '',
      license: '',
      // first period
      semesterg: '',
      period: '',
      math: '',
      english: '',
      biology: '',
      literature: '',
      chemistry: '',
      physics: '',
      history: '',
      geography: '',
      economics: '',
      french: '',
      rotc: '',
      religious: '',
      // second period
      semesterg1: '',
      period1: '',
      math1: '',
      english1: '',
      biology1: '',
      literature1: '',
      chemistry1: '',
      physics1: '',
      history1: '',
      geography1: '',
      economics1: '',
      french1: '',
      rotc1: '',
      religious1: '',
      // third period
      semesterg2: '',
      period2: '',
      math2: '',
      english2: '',
      biology2: '',
      literature2: '',
      chemistry2: '',
      physics2: '',
      history2: '',
      geography2: '',
      economics2: '',
      french2: '',
      rotc2: '',
      religious2: '',
      // exam
      semesterg3: '',
      period3: '',
      math3: '',
      english3: '',
      biology3: '',
      literature3: '',
      chemistry3: '',
      physics3: '',
      history3: '',
      geography3: '',
      economics3: '',
      french3: '',
      rotc3: '',
      religious3: '',
      // fourth period
      semesterg4: '',
      period4: '',
      math4: '',
      english4: '',
      biology4: '',
      literature4: '',
      chemistry4: '',
      physics4: '',
      history4: '',
      geography4: '',
      economics4: '',
      french4: '',
      rotc4: '',
      religious4: '',
      // fifth period
      semesterg5: '',
      period5: '',
      math5: '',
      english5: '',
      biology5: '',
      literature5: '',
      chemistry5: '',
      physics5: '',
      history5: '',
      geography5: '',
      economics5: '',
      french5: '',
      rotc5: '',
      religious5: '',
      // sixth period
      semesterg6: '',
      period6: '',
      math6: '',
      english6: '',
      biology6: '',
      literature6: '',
      chemistry6: '',
      physics6: '',
      history6: '',
      geography6: '',
      economics6: '',
      french6: '',
      rotc6: '',
      religious6: '',
      // exam
      semesterg7: '',
      period7: '',
      math7: '',
      english7: '',
      biology7: '',
      literature7: '',
      chemistry7: '',
      physics7: '',
      history7: '',
      geography7: '',
      economics7: '',
      french7: '',
      rotc7: '',
      religious7: '',
      // first installment
      semester: '',
      installment: '',
      class: '',
      amount: '',
      // second installment
      semester1: '',
      installment1: '',
      class1: '',
      amount1: '',
      // third installment
      semester2: '',
      installment2: '',
      class2: '',
      amount2: '',
      // fourth installment
      semester3: '',
      installment3: '',
      class3: '',
      amount3: ''
    }
  }
}

export function getSISId (schoolInfo) {
  const info = schoolInfo.schoolInfo
  return `${info.id} - ${info.regID} - ${info.created}`
}

export function getId (schoolInfo) {
  return toIndexableString([
    schoolInfo.regID,
    schoolInfo.created,
    schoolInfo.id
  ]).replace(/\u0000/g, '\u0001')
}

export function completeCase (schoolInfo) {
  if (!schoolInfo._id) {
    schoolInfo._id = getId(schoolInfo)
  }

  schoolInfo.schoolInfo.sisId = getSISId(schoolInfo)
  schoolInfo.processEdit = true

  return schoolInfo
}
