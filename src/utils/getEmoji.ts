import { percentageGrade } from '../constants/percentagesAsGrades'

export type GetEmojiFunc = (studentGrade: number) => string

export const getEmoji: GetEmojiFunc = (studentGrade) => {
  return percentageGrade.find(
    (grade) => studentGrade && studentGrade <= grade.max && studentGrade >= grade.min
  )?.emojiClass || 'defaultEmoji'
}