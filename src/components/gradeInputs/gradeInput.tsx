import React from 'react';
import {
  useSetRecoilState,
  RecoilState
} from 'recoil';

import './gradeInput.css'

type Props = {
  testTotalScoreState: RecoilState<number>,
  testActualGradeState: RecoilState<number>
}

const GradeInputs = ({testTotalScoreState, testActualGradeState }: Props) => {
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
            setTestActualGrade(parseFloat(value))
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
            setTestTotalScore(parseFloat(value))
          }}
        >
        </input>
      </div>
    </div>
  )
}

export default GradeInputs