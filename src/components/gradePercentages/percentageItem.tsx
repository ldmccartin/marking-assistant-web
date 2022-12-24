import React from 'react';
import { PercentageGrade } from '../../constants/percentagesAsGrades'
import './percentageItem.css'

type Props = {
  key: number,
  percentageGrade: PercentageGrade
}

const PercentageItem = ({key, percentageGrade}: Props) => {
  return (
    <div className='PercentageItem-Wrapper'>
      <div className='PercentageItem-minMaxWrapper'>
        <div>
          <p>Min</p>
          <p>{percentageGrade.min}</p>
        </div>

        <div>
          <p>Max</p>
          <p>{percentageGrade.max}</p>
        </div>
      </div>
    
      <div className='PercentageItem-gradeWrapper'>
        <p>Grade</p>
        <p>{percentageGrade.grade}</p>
      </div>
    </div>
  )
}

export default PercentageItem