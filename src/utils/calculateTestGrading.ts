import type { PercentageGrade } from '../constants/percentagesAsGrades'
import { calculatePercentage } from "./calculatePercentage"

type Percentage = number // purely for readbility of TestGradePercentage

export type TestGradePercentage = {
  [key: number]: Percentage
}

export const mapTestTotalToSchoolGrades = (
  schoolPercentageGrade: PercentageGrade[],
  testTotalGrade: number,
  pointFactor = 0.5
): PercentageGrade[] => {

  const testGradeObject: TestGradePercentage = {}
  for (let index = testTotalGrade; index > 0; index = index - pointFactor) {
    testGradeObject[index] = calculatePercentage(index, testTotalGrade)
  }

  /** 
   * Half points fuck with the object order it seems, so lets get the keys
   * and sort them accordingly when we get the min and max possible potentialGrades
  */
  const potentialGrades = Object.keys(testGradeObject).map(k => parseFloat(k)).sort((a, b) => a - b)

  return schoolPercentageGrade
    //lets be certain we are bottom to top
    .sort((a, b) => a.maxGrade - b.maxGrade)
    .reduce((acc, cur, index, array) => {
      const previousGradeMax = array[index - 1] ? array[index - 1].maxGrade : undefined
      const min = getMinGrade(previousGradeMax, potentialGrades, testGradeObject)
      const max = getMaxGrade(potentialGrades, testGradeObject, cur.maxGrade)
      acc.push({ gradeLabel: cur.gradeLabel, maxGrade: max, minGrade: min })
      return acc
    }, [] as Array<PercentageGrade>)
}

const getMinGrade = (
  previousMaxGrade: number | undefined,
  potentialGrades: number[],
  testGradePercentage: TestGradePercentage
): number => {
  if (!previousMaxGrade) {
    return 0
  }

  return potentialGrades
    .reduce((currentMinGrade, grade) => {

      if (!currentMinGrade && testGradePercentage[grade] > previousMaxGrade) {
        return grade
      }

      return currentMinGrade
    }, 0)
}

const getMaxGrade = (
  potentialGrades: number[],
  testGradePercentage: TestGradePercentage,
  currentMaxValueForGrade: number
): number => {
  return potentialGrades
  .reduce((currentMax, grade) => {

    const potentialGrade = testGradePercentage[grade]
    if (potentialGrade > currentMaxValueForGrade) {
      return currentMax
    }

    return grade
  }, 0)
}