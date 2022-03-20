export type PercentageGrade = {
  min: number,
  max: number,
  grade: string
}

export const percentageGrade: Array<PercentageGrade> = [
  {
    min: 0,
    max: 24,
    grade: 'Ungenügend',
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
].sort((a, b) => b.max - a.max)