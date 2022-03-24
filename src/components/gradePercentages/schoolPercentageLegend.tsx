import React from 'react';
import './schoolPercentageLegend.css'
import { percentageGrade } from '../../constants/percentagesAsGrades'
import PercentageItem from './percentageItem'

function SchoolPercentageLegend() {
  return (
    <div className="SchoolPercentageLegend-Wrapper">
      <p>School Percentage Legend:</p>
      {percentageGrade.map((grade, index) => (
        <PercentageItem
          percentageGrade={grade}
          key={index}
        />
      ))}
    </div>
  )
}

export default SchoolPercentageLegend