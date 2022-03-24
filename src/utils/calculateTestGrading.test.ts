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
] as any

const mockTestGrades = [
  {
    min: 0,
    max: 14.5,
    grade: 'Ungenügend'
  },
  {
    min: 15,
    max: 30,
    grade: 'Mangelhaft'
  },
  {
    min: 30.5,
    max: 39.5,
    grade: 'Ausreichend'
  },
  {
    min: 40,
    max: 49.5,
    grade: 'Befriedigend'
  },
  {
    min: 50,
    max: 55.5,
    grade: 'Gut'
  },
  {
    min: 56,
    max: 62,
    grade: 'Sehr gut'
  }
] as any

describe('mapTestTotalToSchoolGrades', () => {
  describe('When given an array of school grades and a test total score', () => {
    it('Should return an array of min max test points mapped to school grade totals', () => {
      expect(mapTestTotalToSchoolGrades(mockSchoolGrades, 100)).toEqual(mockSchoolGrades)
    })
  })

  describe('When calculating grade points' , () => {
    it('Should map points to correct grading', () => {
      expect(mapTestTotalToSchoolGrades(mockSchoolGrades, 62)).toEqual(mockTestGrades)
    })
  })
})