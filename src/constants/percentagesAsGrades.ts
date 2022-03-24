export type SchoolPercentageGrade = {
  min: number,
  max: number,
  grade: string,
  emojiClass: string
}

export type TestPercentageGrade = {
  min: number,
  max: number,
  grade: string,
}

export const percentageGrade: Array<SchoolPercentageGrade> = [
  {
    min: 0,
    max: 24,
    grade: 'Ungenügend',
    emojiClass: 'sixthGradeEmoji'
  },
  {
    min: 25,
    max: 49,
    grade: 'Mangelhaft',
    emojiClass: 'fifthGradeEmoji'
  },
  {
    min: 50,
    max: 64,
    grade: 'Ausreichend',
    emojiClass: 'fourthGradeEmoji'
  },
  {
    min: 65,
    max: 80,
    grade: 'Befriedigend',
    emojiClass: 'thirdGradeEmoji'
  },
  {
    min: 81,
    max: 90,
    grade: 'Gut',
    emojiClass: 'secondGradetEmoji'
  },
  {
    min: 91,
    max: 100,
    grade: 'Sehr gut',
    emojiClass: 'firstGradeEmoji'
   
  }
].sort((a, b) => b.max - a.max)