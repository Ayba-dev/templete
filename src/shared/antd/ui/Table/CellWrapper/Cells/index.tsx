import Copy from './Copy'
import Date from './Date'
import Number from './Number'
import Sum from './Sum'
import Text from './Text'
import UpperCase from './UpperCase'

export const cell = {
  text: Text,
  copy: Copy,
  number: Number,
  date: Date,
  upperCase: UpperCase,
  sum: Sum,
} as const

export type Cell = keyof typeof cell
