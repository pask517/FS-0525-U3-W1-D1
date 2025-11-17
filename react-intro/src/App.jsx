import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import FirstPart from "./components/FirstPart"
import Welcome from "./components/Welcome"
import InputField from "./components/InputField"
const myName = "Giangiorgio"
//App é un COMPONENTE REACT
// la forma PIÚ SEMPLICE per un componente REACT é una funzione
const App = function () {
  return (
    <>
      <FirstPart />
      <Welcome myName="Stefano" />
      <Welcome myName="Matteo" />
      <Welcome myName="Rossella" />
      <section>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </section>
      <InputField pholder="Scrivimi" />
      <InputField pholder="Riempimi" />
      <h1>Vite + React</h1>
      <h2>Il mio primo componente REACT! Io mi chiamo: {myName}</h2>
      <h3>EPICODE!</h3>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
