import {
  selector,
} from 'recoil';

import testTotalScoreState from '../testTotalScore'
import testActualGradeState from '../testActualGrade'
import { calculatePercentage } from '../../utils/calculatePercentage'

export default selector({
  key: 'charCountState', // unique ID (with respect to other atoms/selectors)
  get: ({get}) => {
    const testActualGrade = get(testActualGradeState)
    const testTotalScore = get(testTotalScoreState)

    return calculatePercentage(testActualGrade, testTotalScore);
  },
})