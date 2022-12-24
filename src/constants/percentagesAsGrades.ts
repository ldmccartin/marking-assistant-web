export type PercentageGrade = {
  min: number,
  max: number,
  grade: string,
}

export interface SchoolPercentageGrade extends PercentageGrade {
  emojiCssClass: string
}

export const percentageGrade: SchoolPercentageGrade[] = [
  {
    min: 0,
    max: 24,
    grade: 'Ungenügend',
    emojiCssClass: 'sixthGradeEmoji'
  },
  {
    min: 25,
    max: 49,
    grade: 'Mangelhaft',
    emojiCssClass: 'fifthGradeEmoji'
  },
  {
    min: 50,
    max: 64,
    grade: 'Ausreichend',
    emojiCssClass: 'fourthGradeEmoji'
  },
  {
    min: 65,
    max: 80,
    grade: 'Befriedigend',
    emojiCssClass: 'thirdGradeEmoji'
  },
  {
    min: 81,
    max: 90,
    grade: 'Gut',
    emojiCssClass: 'secondGradetEmoji'
  },
  {
    min: 91,
    max: 100,
    grade: 'Sehr gut',
    emojiCssClass: 'firstGradeEmoji'
  }
]