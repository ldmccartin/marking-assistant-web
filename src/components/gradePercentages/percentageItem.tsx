import React from 'react';
import { PercentageGrade } from '../../constants/percentagesAsGrades'
import './percentageItem.css'

type Props = {
  props: PercentageGrade
}

const PercentageItem = ({props}: Props) => {
  return (
    <div className='PercentageItem-Wrapper'>
      <div className='PercentageItem-minMaxWrapper'>
        <div>
          <p>Min</p>
          <p>{props.min}</p>
        </div>

        <div>
          <p>Max</p>
          <p>{props.max}</p>
        </div>
      </div>
    
      <div className='PercentageItem-gradeWrapper'>
        <p>Grade</p>
        <p>{props.grade}</p>
      </div>
    </div>
  )
}

export default PercentageItem