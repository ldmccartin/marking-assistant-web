import React from 'react';
import {
  useRecoilValue,
  RecoilValueReadOnly
} from 'recoil';

import { percentageGrade } from '../../constants/percentagesAsGrades'
import { MapTestTotalToSchoolGradesFunc } from '../../utils/calculateTestGrading'

import PercentageItem from './percentageItem'
import './gradePercentageLegend.css'

type Props = {
  testTotalScoreState: RecoilValueReadOnly<number>,
  mapTestTotalToSchoolGradesFunc: MapTestTotalToSchoolGradesFunc
}

const gradePercentageLegend = ({testTotalScoreState, mapTestTotalToSchoolGradesFunc}: Props) => {
  const testTotalScore = useRecoilValue(testTotalScoreState)
  const testGrades = mapTestTotalToSchoolGradesFunc(percentageGrade, testTotalScore);

  return (
    <div className="GradePercentageLegend-Wrapper">
      <p>Test Grade Legend:</p>
      {testGrades
        .sort((a, b) => b.max - a.max)
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