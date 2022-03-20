import { mapTestTotalToSchoolGrades } from './calculateTestGrading'

const mockSchoolGrades = [
  {
    min: 0,
    max: 24,
    grade: 'Ungenügend'
  },
  {
    min: 25,
    max: 49,
    grade: 'Mangelhaft'
  },
  {
    min: 50,
    max: 64,
    grade: 'Ausreichend'
  },
  {
    min: 65,
    max: 80,
    grade: 'Befriedigend'
  },
  {
    min: 81,
    max: 90,
    grade: 'Gut'
  },
  {
    min: 91,
    max: 100,
    grade: 'Sehr gut'
  }
]

describe('mapTestTotalToSchoolGrades', () => {
  describe('When given an array of school grades and a test total score', () => {
    it('Should return an array of min max test points mapped to school grade totals', () => {
      expect(mapTestTotalToSchoolGrades(mockSchoolGrades, 100)).toEqual(mockSchoolGrades)
    })
  })
})