const ThemeKey = '@antd/app-theme'

export const useTheme = () => {
  const getTheme = () => {
    if (typeof window === 'undefined') return

    const theme = localStorage.getItem(ThemeKey) || 'light'
    return theme
  }

  const toggleTheme = () => {
    const newTheme = getTheme() === 'light' ? 'dark' : 'light'

    localStorage.setItem(ThemeKey, newTheme)
  }

  return { getTheme, toggleTheme }
}
