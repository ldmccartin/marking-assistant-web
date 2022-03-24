import { SchoolPercentageGrade, TestPercentageGrade } from '../constants/percentagesAsGrades'
import { calculatePercentage } from "./calculatePercentage"

type TestGradeAsPercentageObject = {
  [key: number]: number
}

export type MapTestTotalToSchoolGradesFunc = (
  schoolGradePercentages: Array<SchoolPercentageGrade>,
  testTotalGrade: number,
  pointFactor?: number
) => Array<TestPercentageGrade>

export const mapTestTotalToSchoolGrades: MapTestTotalToSchoolGradesFunc = (
  schoolGradePercentages,
  testTotalGrade,
  pointFactor = 0.5
) => {

  let testGradeAsPercentageObject: TestGradeAsPercentageObject = {}
  for (let index = testTotalGrade; index > 0 ; index = index - pointFactor) {
    testGradeAsPercentageObject[index] = calculatePercentage(index, testTotalGrade)
  }

  /** 
   * Half points fuck with the object order it seems, so lets get the keys
   * and sort them accordingly when we get the min and max possible grades
  */
  const keys = Object.keys(testGradeAsPercentageObject).map(k => parseFloat(k)).sort((a, b) => a - b)

  return schoolGradePercentages
    //lets be certain we are bottom to top
    .sort((a, b) => a.max - b.max)
    .reduce((acc, cur, index, array) => {
      const previousGrade = array[index - 1]
      const min = previousGrade 
        ? keys
          .reduce((grade, key) => {
            if (grade) {
              return grade
            }

            if (testGradeAsPercentageObject[key] > previousGrade.max) {
              grade = key
            }

            return grade
          }, 0)
        : 0

      const max = keys
        .reduce((grade, key) => {
          if (testGradeAsPercentageObject[key] <= cur.max) {
            grade = key
          }
          return grade
        }, 0)

      acc.push({ grade: cur.grade, max, min })
      return acc
    }, [] as Array<TestPercentageGrade>)
}
