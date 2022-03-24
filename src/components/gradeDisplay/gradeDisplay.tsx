import React from 'react';
import {
  useRecoilValue,
} from 'recoil';
import calculatedGradeState from '../../state/selectors/calculatedGradeState'

import './gradeDisplay.css'

function GradeDisplay() {
  const studentGrade = useRecoilValue(calculatedGradeState)

  return (
    <div className='GradeDisplay-Wrapper'>
      <p className='PercentageDisplay' id='percentage-display'>{studentGrade ? Math.round(studentGrade) : ''}</p>
    </div>
  )
}

export default GradeDisplay