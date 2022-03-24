import { round } from 'lodash'

export const calculatePercentage = (studentGrade: number, totalPossibleGrade: number) => {
  return round(studentGrade / totalPossibleGrade * 100)
}