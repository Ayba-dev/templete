export const formatSumm = (sum?: number): string => {
  if (sum === null || sum === undefined) return ''

  return Intl.NumberFormat('ru-RU').format(sum || 0)
}
