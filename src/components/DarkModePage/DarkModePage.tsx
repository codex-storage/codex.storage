import React from 'react'
import { useColorMode } from '@docusaurus/theme-common'
import './DarkModePage.scss'

export function DarkModePage({ children }) {
  const { setColorMode } = useColorMode()

  React.useEffect(() => {
    setColorMode('dark')

    const colorModeToggle = document.querySelector(
      '.navbar__color-mode-toggle',
    ) as HTMLElement
    if (colorModeToggle) {
      colorModeToggle.style.display = 'none'
      colorModeToggle.style.setProperty('display', 'none', 'important')
    }
  }, [setColorMode])

  return <div>{children}</div>
}
