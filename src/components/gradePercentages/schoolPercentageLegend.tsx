import React from 'react';
import './schoolPercentageLegend.css'
import { percentageGrade } from '../../constants/percentagesAsGrades'
import PercentageItem from './percentageItem'

function SchoolPercentageLegend() {
  return (
    <div className="SchoolPercentageLegend-Wrapper">
      <p>School Percentage Legend:</p>
      {percentageGrade.map(({ min, max, grade }, index) => (
        <PercentageItem
          props={{min, max, grade}}
          key={index}
        />
      ))}
    </div>
  )
}

export default SchoolPercentageLegend