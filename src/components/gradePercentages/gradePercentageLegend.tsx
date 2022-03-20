import React from 'react';
import {
  useRecoilValue,
} from 'recoil';
import './gradePercentageLegend.css'
import { percentageGrade } from '../../constants/percentagesAsGrades'
import { mapTestTotalToSchoolGrades } from '../../utils/calculateTestGrading'
import testTotalScoreState from '../../state/testTotalScore'

import PercentageItem from './percentageItem'

const gradePercentageLegend = () => {
  const testTotalScore = useRecoilValue(testTotalScoreState)
  const testGrades = mapTestTotalToSchoolGrades(percentageGrade, testTotalScore);
  return (
    <div className="GradePercentageLegend-Wrapper">
      <p>Test Grade Legend:</p>
      {testGrades.map(({ min, max, grade }, index) => (
        <PercentageItem
          props={{min, max, grade}}
          key={index}
        />
      ))}
    </div>
  )
}

export default gradePercentageLegend