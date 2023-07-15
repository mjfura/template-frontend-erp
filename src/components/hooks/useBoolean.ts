import { useState } from 'react'

export const useBoolean = (initial:boolean) => {
  const [value, setValue] = useState<boolean>(initial)
  const toggle = () => setValue(prev => !prev)
  const off = () => setValue(false)
  const on = () => setValue(true)
  return {
    value,
    toggle,
    off,
    on
  }
}
