import React, { FC } from "react"
import "./App.css"

console.log(React.Component)
const App: FC = (): JSX.Element => {
  return (
    <div className="App">
      {" "}
      <h1 className="text-3xl font-bold underline p-7">Hello world!</h1>
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div className="shrink-0">
          <img className="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo" />
        </div>
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-slate-500">You have a new message!</p>
        </div>
      </div>
    </div>
  )
}

export default App
