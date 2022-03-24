import { round } from 'lodash'

export const calculatePercentage = (studentGrade: number, totalPossibleGrade: number): number => {
  return round(studentGrade / totalPossibleGrade * 100)
}