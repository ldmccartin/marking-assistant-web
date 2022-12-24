import React from 'react';
import {
  RecoilRoot,
} from 'recoil';

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
        <GradeInputs />
        <GradeDisplay />
        <GradePercentageLegend />
      </div>
    </RecoilRoot>
  )
}

export default App