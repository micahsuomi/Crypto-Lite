import React, { useState } from 'react'

export const themes = {
  light: {
    iconColor: 'var(--primary-light)',
    backgroundColor: 'white',
    homeBanner: 'var(--color-secondary-dark)',
    headerColor: 'var(--primary-light)',
    tableHead: 'white',
    viewItemColor: 'var(--background-day-mode)',
    text: 'var(--dark)',
    buttonColor: 'white',
    currencyCalcColor: 'var(--btn-disabled)',
    bigBtnColor: 'var(--primary)',
    inputColor: 'white',
  },
  dark: {
    iconColor: 'white',
    backgroundColor: 'var(--dark)',
    homeBanner: 'var(--color-light)',
    headerColor: 'var(--overlay-mask)',
    tableHead: 'var(--dark)',
    viewItemColor: 'var(--background-night-mode)',
    text: 'var(--color-white)',
    buttonColor: 'var(--overlay-mask)',
    currencyCalcColor: 'var(--overlay-mask)',
    bigBtnColor: 'var(--overlay-mask)',
    inputColor: 'var(--overlay-mask)',
  },
}

const defaultState = {
  theme: themes.light,
  switchTheme: () => {},
  isSwitched: false,
}
export type Props = {
  children: React.ReactNode
}

export const ThemeContext = React.createContext(defaultState)

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState(themes.light)
  const [isSwitched, setIsSwitched] = useState(false)

  const switchTheme = () => {
    setTheme((current) => {
      if (current === themes.light) {
        return themes.dark
      } else {
        return themes.light
      }
    })
    setIsSwitched(!isSwitched)
  }
  const themeValue = { theme, switchTheme, isSwitched }
  // eslint-disable-next-line

  // eslint-disable-next-line
  return (
    <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>
  )
}
