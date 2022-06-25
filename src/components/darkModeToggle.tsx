import React from 'react'
import { SunIcon } from '@heroicons/react/outline'
import { MoonIcon } from '@heroicons/react/outline'

import { Theme } from '../types/theme'

interface Props {
  theme: Theme
  setTheme: React.Dispatch<React.SetStateAction<Theme>>
}

const DarkModeToggle: React.FC<Props> = ({ theme, setTheme }) => {
  return (
    <React.Fragment>
      {theme === 'dark' ? (
        <SunIcon
          className="h-6 w-6 cursor-pointer absolute right-5"
          onClick={() => {
            setTheme('light')
          }}
        />
      ) : (
        <MoonIcon
          className="h-6 w-6 cursor-pointer absolute right-5"
          onClick={() => {
            setTheme('dark')
          }}
        />
      )}
    </React.Fragment>
  )
}

export default DarkModeToggle
