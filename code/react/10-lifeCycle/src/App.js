
import { useState } from "react"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import LifeCycleMethods from "./components/LifeCycleMethods"
import Clock from "./components/Clock"
import People from "./components/useEffect-fetch-axios/People"

const App = () => {

  const [show, setShow] = useState(true)

  return (
    <div className="container text-center mt-4">

      <button
        className="btn btn-danger"
        onClick={() => setShow(!show)}
      >
        SHOW
      </button>


      {/* {show && <LifeCycleMethods />} */}

      {/* {show ? <Clock /> : ""} */}

      <People />

    </div>
  )
}


export default App
