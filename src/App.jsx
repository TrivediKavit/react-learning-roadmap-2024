import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderWithoutJSX from './components/HeaderWithoutJSX'
// import Header from './components/Header'
// import Header from './components/Header'
// import styles from './css/header.module.css'


function App() {
  const [count, setCount] = useState(0)

  // const headerStyle = {fontSize: '3rem', backgroundColor: '#000000', paddingLeft: '24px'}

  return (
    <>
      {/* <h1 className={styles.h1}>This is weird!</h1> */}
      {/* <h1 className={styles.primary}>This is primary.</h1> */}
      {/* <Header /> */}
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
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
