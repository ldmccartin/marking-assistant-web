import React from 'react';
import {
  useRecoilValue
} from 'recoil';

import calculatedGradeSelector from '../../state/selectors/calculatedGradePercentageSelectorState'
import './gradeDisplay.css'

function GradeDisplay() {
  const studentGrade = useRecoilValue(calculatedGradeSelector)

  return (
    <div className='GradeDisplay-Wrapper'>
      <p className='PercentageDisplay' id='percentage-display'>{studentGrade || 0}%</p>
    </div>
  )
}

export default GradeDisplay