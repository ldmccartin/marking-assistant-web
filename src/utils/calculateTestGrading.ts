import type { SchoolPercentageGrade, PercentageGrade } from '../constants/percentagesAsGrades'
import { calculatePercentage } from "./calculatePercentage"

type Percentage = number // purely for readbility of TestGradePercentage
type TestGrade = number // purely for readbility of TestGradePercentage

export type TestGradePercentage = {
  [key: TestGrade]: Percentage
}

export const mapTestTotalToSchoolGrades = (
  schoolPercentageGrade: SchoolPercentageGrade[],
  testTotalGrade: number,
  pointFactor = 0.5
): PercentageGrade[] => {

  const testGradePercentage: TestGradePercentage = {}
  for (let index = testTotalGrade; index > 0; index = index - pointFactor) {
    testGradePercentage[index] = calculatePercentage(index, testTotalGrade)
  }

  /** 
   * Half points fuck with the object order it seems, so lets get the keys
   * and sort them accordingly when we get the min and max possible potentialGrades
  */
  const potentialGrades = Object.keys(testGradePercentage).map(k => parseFloat(k)).sort((a, b) => a - b)

  return schoolPercentageGrade
    //lets be certain we are bottom to top
    .sort((a, b) => a.max - b.max)
    .reduce((acc, cur, index, array) => {
      const previousGrade = array[index - 1]
      const min = getMinGrade(previousGrade, potentialGrades, testGradePercentage)
      const max = getMaxGrade(potentialGrades, testGradePercentage, cur.max)
      acc.push({ grade: cur.grade, max, min })
      return acc
    }, [] as Array<PercentageGrade>)
}

const getMinGrade = (
  previousGrade: SchoolPercentageGrade,
  potentialGrades: number[],
  testGradePercentage: TestGradePercentage
): number => {
  if (!previousGrade) {
    return 0
  }

  return potentialGrades
    .reduce((minGrade, grade) => {
      if (minGrade) {
        return minGrade
      }

      if (testGradePercentage[grade] > previousGrade.max) {
        minGrade = grade
      }

      return minGrade
    }, 0)
}

const getMaxGrade = (
  potentialGrades: number[],
  testGradePercentage: TestGradePercentage,
  currentMax: number
): number => {
  return potentialGrades
  .reduce((maxGrade, grade) => {
    if (testGradePercentage[grade] <= currentMax) {
      maxGrade = grade
    }
    return maxGrade
  }, 0)
}