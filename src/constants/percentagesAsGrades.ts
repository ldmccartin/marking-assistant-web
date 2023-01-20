export type PercentageGrade = {
  minGrade: number,
  maxGrade: number,
  gradeLabel: string,
}

export const percentageGrade: PercentageGrade[] = [
  {
    minGrade: 0,
    maxGrade: 24,
    gradeLabel: 'Ungenügend'
  },
  {
    minGrade: 25,
    maxGrade: 49,
    gradeLabel: 'Mangelhaft'
  },
  {
    minGrade: 50,
    maxGrade: 64,
    gradeLabel: 'Ausreichend'
  },
  {
    minGrade: 65,
    maxGrade: 80,
    gradeLabel: 'Befriedigend'
  },
  {
    minGrade: 81,
    maxGrade: 90,
    gradeLabel: 'Gut'
  },
  {
    minGrade: 91,
    maxGrade: 100,
    gradeLabel: 'Sehr gut'
  }
]