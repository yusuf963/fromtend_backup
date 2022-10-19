import {useEffect, useState} from 'react'

const useLocalStorage = (name: string, defaultValue: []) => {
  const [currentValue, setCurrentValue] = useState(
    JSON.parse(localStorage.getItem(name) as any) ?? defaultValue
  )

  useEffect(() => {
    localStorage.setItem(name, JSON.stringify(currentValue))
  }, [currentValue])

  return [currentValue, setCurrentValue]
}

export default useLocalStorage
