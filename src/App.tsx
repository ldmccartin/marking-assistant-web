import React from 'react';
import {
  RecoilRoot,
} from 'recoil';

import { mapTestTotalToSchoolGrades } from './utils/calculateTestGrading'

import calculatedGradeState from './state/selectors/calculatedGradeState'
import testTotalScoreState from './state/testTotalScore'
import testActualGradeState from './state/testActualGrade'

import './App.css'
import SchoolPercentageLegend from './components/gradePercentages/schoolPercentageLegend'
import GradePercentageLegend from './components/gradePercentages/gradePercentageLegend'
import GradeInputs from './components/gradeInputs/gradeInput'
import GradeDisplay from './components/gradeDisplay/gradeDisplay'

function App() {

  return (
    <RecoilRoot>
      <div className='App'>
        <SchoolPercentageLegend />
        <GradeInputs
          testTotalScoreState={testTotalScoreState}
          testActualGradeState={testActualGradeState}
        />
        <GradeDisplay
          calculatedGradeState={calculatedGradeState}
        />
        <GradePercentageLegend
          testTotalScoreState={testTotalScoreState}
          mapTestTotalToSchoolGradesFunc={mapTestTotalToSchoolGrades}
        />
      </div>
    </RecoilRoot>
  )
}

export default App