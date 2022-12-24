import React from 'react';
import {
  useRecoilValue
} from 'recoil';

import { getEmoji } from '../../utils/getEmoji'
import calculatedGradeSelector from '../../state/selectors/calculatedGradePercentageSelectorState'
import './gradeDisplay.css'

function GradeDisplay() {
  const studentGrade = useRecoilValue(calculatedGradeSelector)
  const emoji = getEmoji(studentGrade)

  return (
    <div className='GradeDisplay-Wrapper'>
      <p className='PercentageDisplay' id='percentage-display'>{studentGrade || 0}%</p>
      <span className={emoji}></span>
    </div>
  )
}

export default GradeDisplay