import React, { useCallback, useState } from 'react'
import { flushSync } from 'react-dom'

export const Test = () => {
  const [number, setNumber] = useState(1)
  const [flag, setFlag] = useState(false)

  const cb = useCallback(() => {
    // eslint-disable-next-line no-promise-executor-return
    new Promise((r) => setTimeout(r, 100)).then(() => {
      flushSync(() => {
        setNumber((n) => n + 1)
      })
      flushSync(() => {
        setFlag((p) => !p)
      })
    })
  }, [])

  console.log(number, flag)
  return (
    <div>
      Test component
      {number}
      <button type="button" onClick={cb}>Click me</button>
    </div>
  )
}
