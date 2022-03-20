import React from 'react';
import {
  useSetRecoilState
} from 'recoil';
import testTotalScoreState from '../../state/testTotalScore'
import testActualGradeState from '../../state/testActualGrade'

import './gradeInput.css'

const GradeInputs = () => {
  const setTestTotalScore = useSetRecoilState(testTotalScoreState)
  const setTestActualGrade = useSetRecoilState(testActualGradeState)


  return (
    <div className='GradeInputs-Wrapper'>
      <div>
        <p>Student Grade</p>
        <input 
          className='StudentGrade'
          id='student-grade'
          name='studentGrade'
          type='number'
          placeholder='0'
          onChange={(e) => {
            const { target: { value } } = e
            setTestActualGrade(parseInt(value))
          }}
        >
        </input>
      </div>
      <div>
        <p>Total Possible Grade</p>
        <input 
          className='TotalPossibleGrade'
          id='total-possible-grade'
          name='totalPossibleGrade'
          type='number'
          placeholder='0'
          onChange={(e) => {
            const { target: { value } } = e
            setTestTotalScore(parseInt(value))
          }}
        >
        </input>
      </div>
    </div>
  )
}

export default GradeInputs