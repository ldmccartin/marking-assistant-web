import React from 'react';
import {
  useSetRecoilState,
  RecoilState
} from 'recoil';
import { TextField } from '@mui/material'

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
        <TextField 
          className='StudentGrade'
          name='studentGrade'
          type='number'
          size='medium'
          placeholder='0'
          variant='outlined'
          color='info'
          label='Student Grade'
          inputProps={{ style: { color: '#fff' } }}
          InputLabelProps={{ style: { color: '#fff' } }}
          onChange={(e) => {
            const { target: { value } } = e
            setTestActualGrade(parseFloat(value))
          }}
        >
        </TextField>
        <TextField
          className='TotalGrade'
          name='totalGrade'
          type='number'
          size='medium'
          placeholder='0'
          variant='outlined'
          color='info'
          label='Total Grade'
          inputProps={{ style: { color: '#fff' } }}
          InputLabelProps={{ style: { color: '#fff' } }}
          onChange={(e) => {
            const { target: { value } } = e
            setTestTotalScore(parseFloat(value))
          }}
        />
    </div>
  )
}

export default GradeInputs