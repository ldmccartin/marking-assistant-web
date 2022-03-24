import { percentageGrade } from '../constants/percentagesAsGrades'

export type GetEmojiFunc = (studentGrade: number) => string

export const getEmoji: GetEmojiFunc = (studentGrade) => {
  return percentageGrade.find((g) => studentGrade && studentGrade <= g.max && studentGrade >= g.min)?.emojiClass || 'defaultEmoji'
}