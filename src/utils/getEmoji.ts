import { percentageGrade } from '../constants/percentagesAsGrades'

export const getEmoji = (studentGrade: number): string => {
  return percentageGrade.find(
    (grade) => studentGrade && studentGrade <= grade.max && studentGrade >= grade.min
  )?.emojiCssClass || 'defaultEmoji'
}