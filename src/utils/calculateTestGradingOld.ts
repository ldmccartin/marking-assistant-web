import { SchoolPercentageGrade, TestPercentageGrade } from '../constants/percentagesAsGrades'
import { calculatePercentage } from "./calculatePercentage"

type TestGradeAsPercentageObject = {
  [key: number]: number
}

const pointFactor: number = 0.5

// School grade percentages are not an even distribtion across points so shit is a bit more complicated than what I first though
export const mapTestTotalToSchoolGrades =
  (schoolGradePercentages: Array<SchoolPercentageGrade>, testTotalGrade: number) => {

  let testGradeAsPercentageObject: TestGradeAsPercentageObject = {}
  for (let index = testTotalGrade; index > 0 ; index = index - pointFactor) {
    testGradeAsPercentageObject[index] = calculatePercentage(index, testTotalGrade)
  }

  /** 
   * Half points fuck with the object order it seems, so lets get the keys
   * and sort them accordingly when we get the min and max possible grades
  */
  const keys = Object.keys(testGradeAsPercentageObject).map(k => parseFloat(k))

  // console.log('keys', keys, 'testGradeAsPercentageObject', testGradeAsPercentageObject)

  return schoolGradePercentages
    //lets be certain we are top to bottoms
    .sort((a, b) => b.max - a.max)
    .reduce((acc, cur, index, array) => {
      const isBottomGrade = index === array.length - 1
      const previousGrade = acc[index - 1]

      // sort here, order is important
      const minPossibleGrade = keys
        .sort((a, b) => b - a)
        .reduce((grade, key) => {
          if (testGradeAsPercentageObject[key] >= cur.min) {
            grade = key
          }
          return grade
        }, 0)

      // sort here, order is important
      const maxPossibleGrade = keys
        .sort((a, b) => a - b)
        .reduce((grade, key) => {
          if (testGradeAsPercentageObject[key] <= cur.max) {
            grade = key
          }
          return grade
        }, 0)

      const max = previousGrade ? maxPossibleGrade : testTotalGrade
      const min = isBottomGrade ? 0 : minPossibleGrade

      acc.push({ grade: cur.grade, max: max, min: min })
      return acc
    }, [] as Array<TestPercentageGrade>)
}
