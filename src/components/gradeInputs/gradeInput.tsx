import React from 'react';
import {
  useSetRecoilState,
  useRecoilValue
} from 'recoil';
import { TextField } from '@mui/material'

import './gradeInput.css'
import { percentageGrade } from '../../constants/percentagesAsGrades';
import maxPossibleGradeState from '../../state/maxPossibleGrade'
import actualGradeState from '../../state/actualGrade'


const GradeInputs = () => {
  const setTestTotalScore = useSetRecoilState(maxPossibleGradeState)
  const setTestActualGrade = useSetRecoilState(actualGradeState)
  const testTotalScore = useRecoilValue(maxPossibleGradeState)


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
            min: 0
          }}
          InputLabelProps={{ style: { color: '#fff' } }}
          value={testTotalScore || null}
          onChange={(e) => {
            const { target: { value } } = e
            const newValue = parseFloat(value)
            if (newValue < percentageGrade.length) {
              return
            }
            setTestTotalScore(newValue)
          }}
        />
    </div>
  )
}

export default GradeInputs