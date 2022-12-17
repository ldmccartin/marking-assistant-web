import {
  selector,
} from 'recoil';

import maxPossibleGradeState from '../maxPossibleGrade'
import actualGradeState from '../actualGrade'
import { calculatePercentage } from '../../utils/calculatePercentage'

export default selector({
  key: 'calculatedGradePercentageSelectorState', // unique ID (with respect to other atoms/selectors)
  get: ({get}) => {
    const actualGrade = get(actualGradeState)
    const maxPossibleGrade = get(maxPossibleGradeState)

    return calculatePercentage(actualGrade, maxPossibleGrade);
  },
})