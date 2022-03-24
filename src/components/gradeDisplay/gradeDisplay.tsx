import React from 'react';
import {
  RecoilValueReadOnly,
  useRecoilValue
} from 'recoil';
import './gradeDisplay.css'

type Props = {
  calculatedGradeState: RecoilValueReadOnly<number>
}

function GradeDisplay({ calculatedGradeState }: Props) {
  const studentGrade = useRecoilValue(calculatedGradeState)
  return (
    <div className='GradeDisplay-Wrapper'>
      <p className='PercentageDisplay' id='percentage-display'>{studentGrade || ''}</p>
    </div>
  )
}

export default GradeDisplay