import { mapTestTotalToSchoolGrades } from './calculateTestGrading'
import type { PercentageGrade } from '../constants/percentagesAsGrades'

const mockSchoolGrades = [
  {
    minGrade: 0,
    maxGrade: 24,
    gradeLabel: 'Ungenügend'
  },
  {
    minGrade: 24.5,
    maxGrade: 49,
    gradeLabel: 'Mangelhaft'
  },
  {
    minGrade: 49.5,
    maxGrade: 64,
    gradeLabel: 'Ausreichend'
  },
  {
    minGrade: 64.5,
    maxGrade: 80,
    gradeLabel: 'Befriedigend'
  },
  {
    minGrade: 80.5,
    maxGrade: 90,
    gradeLabel: 'Gut'
  },
  {
    minGrade: 90.5,
    maxGrade: 100,
    gradeLabel: 'Sehr gut'
  }
] as PercentageGrade[]

const mockTestGrades = [
  {
    minGrade: 0,
    maxGrade: 15,
    gradeLabel: 'Ungenügend'
  },
  {
    minGrade: 15.5,
    maxGrade: 30.5,
    gradeLabel: 'Mangelhaft'
  },
  {
    minGrade: 31,
    maxGrade: 39.5,
    gradeLabel: 'Ausreichend'
  },
  {
    minGrade: 40,
    maxGrade: 49.5,
    gradeLabel: 'Befriedigend'
  },
  {
    minGrade: 50,
    maxGrade: 56,
    gradeLabel: 'Gut'
  },
  {
    minGrade: 56.5,
    maxGrade: 62,
    gradeLabel: 'Sehr gut'
  }
] as PercentageGrade[]

describe('mapTestTotalToSchoolGrades', () => {
  describe('When given an array of school grades and a test total score', () => {
    it('Should return an array of minGrade maxGrade test points mapped to school grade totals', () => {
      expect(mapTestTotalToSchoolGrades(mockSchoolGrades, 100, 0.5)).toEqual(mockSchoolGrades)
    })
  })

  describe('When calculating grade points' , () => {
    it('Should map points to correct grading', () => {
      expect(mapTestTotalToSchoolGrades(mockSchoolGrades, 62, 0.5)).toEqual(mockTestGrades)
    })
  })
})