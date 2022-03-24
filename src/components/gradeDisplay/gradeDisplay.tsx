import React from 'react';
import {
  RecoilValueReadOnly,
  useRecoilValue
} from 'recoil';

import { GetEmojiFunc } from '../../utils/getEmoji'
import './gradeDisplay.css'

type Props = {
  calculatedGradeState: RecoilValueReadOnly<number>
  getEmojiFunc: GetEmojiFunc
}

function GradeDisplay({ calculatedGradeState, getEmojiFunc }: Props) {
  const studentGrade = useRecoilValue(calculatedGradeState)
  const emoji = getEmojiFunc(studentGrade)

  return (
    <div className='GradeDisplay-Wrapper'>
      <p className='PercentageDisplay' id='percentage-display'>{studentGrade || 0}%</p>
      <span className={emoji}></span>
    </div>
  )
}

export default GradeDisplay