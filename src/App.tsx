import React, { MouseEvent } from 'react'
import './App.css'

interface IProps extends IPropsWithChildren {
  name: string
}

interface IPropsWithChildren {
  quantity: number
}

function App(props: IProps) {
  console.log(props.name)

  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log('click')
  }

  return (
    <div>
      <button onClick={onClick}>Click me!</button>
    </div>
  )
}

export default App
