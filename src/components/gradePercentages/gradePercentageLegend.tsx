import React from 'react';
import {
  useRecoilValue,
} from 'recoil';
import './gradePercentageLegend.css'

import PercentageItem from './percentageItem'
import { mapTestTotalToSchoolGrades } from '../../utils/calculateTestGrading'
import maxPossibleGradeState from '../../state/maxPossibleGrade'
import { percentageGrade } from '../../constants/percentagesAsGrades'

const gradePercentageLegend = () => {
  const testTotalScore = useRecoilValue(maxPossibleGradeState)
  const testGrades = mapTestTotalToSchoolGrades(percentageGrade, testTotalScore);

  return (
    <div className="GradePercentageLegend-Wrapper">
      <p>Test Grade Legend:</p>
      {testGrades
        .sort((a, b) => b.maxGrade - a.maxGrade)
        .map((grade, index) => (
          <PercentageItem
            percentageGrade={grade}
            key={index}
          />
      ))}
    </div>
  )
}

export default gradePercentageLegend