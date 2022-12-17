import React from 'react';
import {
  RecoilRoot,
} from 'recoil';

import { mapTestTotalToSchoolGrades } from './utils/calculateTestGrading'
import { getEmoji } from './utils/getEmoji'

import calculatedGradePercentageSelectorState from './state/selectors/calculatedGradePercentageSelectorState'
import maxPossibleGradeState from './state/maxPossibleGrade'
import actualGradeState from './state/actualGrade'

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
          maxPossibleGradeState={maxPossibleGradeState}
          actualGradeState={actualGradeState}
        />
        <GradeDisplay
          calculatedGradeState={calculatedGradePercentageSelectorState}
          getEmojiFunc={getEmoji}
        />
        <GradePercentageLegend
          maxPossibleGradeState={maxPossibleGradeState}
          mapTestTotalToSchoolGradesFunc={mapTestTotalToSchoolGrades}
        />
      </div>
    </RecoilRoot>
  )
}

export default App