import dayjs from 'dayjs'

export const displayDate = (
  date: string | Date | undefined,
  dateFormat?: string,
) => {
  if (!date) return '-'

  try {
    if (date) {
      const d = dayjs(date)
      if (d.isValid()) {
        return d.format(dateFormat)
      }
    }
  } catch (error) {
    console.error(`${error}`)
    return '-'
  }

  return '-'
}
