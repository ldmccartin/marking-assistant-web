import React from 'react';
import {
  useSetRecoilState,
  useRecoilValue,
  RecoilState
} from 'recoil';
import { TextField } from '@mui/material'

import { percentageGrade } from '../../constants/percentagesAsGrades';

import './gradeInput.css'

type Props = {
  testTotalScoreState: RecoilState<number>,
  testActualGradeState: RecoilState<number>
}

const GradeInputs = ({testTotalScoreState, testActualGradeState }: Props) => {
  const setTestTotalScore = useSetRecoilState(testTotalScoreState)
  const setTestActualGrade = useSetRecoilState(testActualGradeState)
  const testTotalScore = useRecoilValue(testTotalScoreState)


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
          inputProps={{ 
            style: { color: '#fff' },
            min: percentageGrade.length
          }}
          InputLabelProps={{ style: { color: '#fff' } }}
          value={testTotalScore || null}
          onChange={(e) => {
            const { target: { value } } = e
            const newValue = parseFloat(value) < percentageGrade.length ? percentageGrade.length : parseFloat(value)
            setTestTotalScore(newValue)
          }}
        />
    </div>
  )
}

export default GradeInputs