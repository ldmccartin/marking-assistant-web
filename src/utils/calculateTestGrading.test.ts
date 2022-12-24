import { mapTestTotalToSchoolGrades } from './calculateTestGrading'
import type { SchoolPercentageGrade } from '../constants/percentagesAsGrades'

const mockSchoolGrades = [
  {
    min: 0,
    max: 24,
    grade: 'Ungenügend'
  },
  {
    min: 24.5,
    max: 49,
    grade: 'Mangelhaft'
  },
  {
    min: 49.5,
    max: 64,
    grade: 'Ausreichend'
  },
  {
    min: 64.5,
    max: 80,
    grade: 'Befriedigend'
  },
  {
    min: 80.5,
    max: 90,
    grade: 'Gut'
  },
  {
    min: 90.5,
    max: 100,
    grade: 'Sehr gut'
  }
] as SchoolPercentageGrade[]

const mockTestGrades = [
  {
    min: 0,
    max: 15,
    grade: 'Ungenügend'
  },
  {
    min: 15.5,
    max: 30.5,
    grade: 'Mangelhaft'
  },
  {
    min: 31,
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
    max: 56,
    grade: 'Gut'
  },
  {
    min: 56.5,
    max: 62,
    grade: 'Sehr gut'
  }
] as SchoolPercentageGrade[]

describe('mapTestTotalToSchoolGrades', () => {
  describe('When given an array of school grades and a test total score', () => {
    it('Should return an array of min max test points mapped to school grade totals', () => {
      expect(mapTestTotalToSchoolGrades(mockSchoolGrades, 100, 0.5)).toEqual(mockSchoolGrades)
    })
  })

  describe('When calculating grade points' , () => {
    it('Should map points to correct grading', () => {
      expect(mapTestTotalToSchoolGrades(mockSchoolGrades, 62, 0.5)).toEqual(mockTestGrades)
    })
  })
})